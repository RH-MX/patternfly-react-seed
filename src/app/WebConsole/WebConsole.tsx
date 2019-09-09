import * as React from 'react';
import { CubeIcon } from '@patternfly/react-icons';
import {
  PageSection,
  Title,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody
} from '@patternfly/react-core';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';

const WebConsole: React.FunctionComponent<any> = (props) => {

let target = "https://openshift.rally.redhat.com";
  
    window.open(target,"_blank");
  
  
    return (
    <PageSection>
      <EmptyState variant={EmptyStateVariant.full}>
        <EmptyStateIcon icon={CubeIcon} />
        <Title headingLevel="h5" size="lg">
        Redirecting to {target}
        </Title>
        <EmptyStateBody>
          A new window/tab was opened with OpenShift Web Console.
        </EmptyStateBody>
        
      </EmptyState>
    </PageSection>

      
    );
  }


export default WebConsole;
