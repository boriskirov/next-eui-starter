import { FunctionComponent } from 'react';

import { EuiProvider, EuiThemeColorMode } from '@elastic/eui';

import { useProvider } from '../provider';

import CollapsibleNav from './collapsible_nav';

import { css } from '@emotion/react';
import createCache from '@emotion/cache';

/**
 * Renders the UI that surrounds the page content.
 */
const Chrome: FunctionComponent = ({ children }) => {
  const { colorMode } = useProvider();

  /**
   * This `@emotion/cache` instance is used to insert the global styles
   * into the correct location in `<head>`. Otherwise they would be
   * inserted after the static CSS files, resulting in style clashes.
   * Only necessary until EUI has converted all components to CSS-in-JS:
   * https://github.com/elastic/eui/issues/3912
   */
  const emotionCache = createCache({
    key: 'eui-styles',
    container:
      typeof document !== 'undefined'
        ? document.querySelector('meta[name="eui-styles-global"]')
        : null,
  });

  return (
    <EuiProvider
      colorMode={colorMode as EuiThemeColorMode}
      cache={emotionCache}>
      <div
        css={css`
          padding-top: 96px; // top nav
          max-height: calc(100vh - 96px);
        `}>
        <CollapsibleNav />
        {children}
      </div>
    </EuiProvider>
  );
};

export default Chrome;
