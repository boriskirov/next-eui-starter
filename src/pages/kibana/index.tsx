import { FunctionComponent } from 'react';
import {
  EuiPageTemplate,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
} from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';

const icons = [
  'Kibana',
  'EnterpriseSearch',
  'Observability',
  'Security',
  'managementApp',
];

const cardNodes = icons.map(function (item, index) {
  return (
    <EuiFlexItem key={index}>
      <EuiCard
        icon={<EuiIcon size="xxl" type={`logo${item}`} />}
        title={`${item}`}
        isDisabled={false}
        description="Example of a card's description. Stick to one or two sentences."
        onClick={() => {}}
      />
    </EuiFlexItem>
  );
});

const Index: FunctionComponent = () => {
  return (
    <KibanaLayout>
      <EuiPageTemplate
        template="empty"
        restrictWidth
        pageHeader={{
          pageTitle: 'Welcome',
        }}>
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>
            <EuiFlexGroup gutterSize="l">{cardNodes}</EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageTemplate>
    </KibanaLayout>
  );
};

export default Index;
