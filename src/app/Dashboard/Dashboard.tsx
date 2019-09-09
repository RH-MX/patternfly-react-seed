import * as React from 'react';
import { PageSection, Title, Gallery, GalleryItem, Avatar, Brand, Grid, GridItem, EmptyState, EmptyStateIcon, EmptyStateVariant, EmptyStateBody } from '@patternfly/react-core';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon, CubesIcon } from '@patternfly/react-icons';
import imgCF from '@app/assets/images/Logo-Red_Hat-CloudForms-A-Standard-RGB.png';
import imgAnsible from '@app/assets/images/Logo-Red_Hat-Ansible_Automation-A-Standard-SVG.png';
import imgOSP from '@app/assets/images/Logo-Red_Hat-OpenStack_Platform-A-Standard-RGB.png';
import imgOCP from '@app/assets/images/Logo-Red_Hat-OpenShift-Container_Platform-A-Standard-RGB.png';
import { Link } from 'react-router-dom';

const Dashboard: React.FunctionComponent<any> = (props) => {
  return (
    <PageSection>
      <EmptyState variant={EmptyStateVariant.full}>
        <EmptyStateIcon icon={CubesIcon} />
        <Title headingLevel="h1" size="4xl">
        Rally Stages
        </Title>
        <EmptyStateBody>
          <br></br>
          <br></br>
          <br></br>
        </EmptyStateBody>
      </EmptyState>
      

  

      <Grid gutter="lg" >
      <GridItem span={6}><a href="https://www.redhat.com" target="_blank"><Brand src={imgOSP} alt="Red Hat OSP" width="560px"></Brand></a></GridItem>
      <GridItem span={6}><a href="https://www.redhat.com" target="_blank"><Brand src={imgCF} alt="Red Hat Cloud Forms" width="560px"></Brand></a></GridItem>
      <GridItem span={6}><a href="https://www.redhat.com" target="_blank"><Brand src={imgAnsible} alt="Red Hat Ansible" width="560px"></Brand></a></GridItem>
      <GridItem span={6}><a href="https://www.redhat.com" target="_blank"><Brand src={imgOCP} alt="Red Hat OCP" width="560px"></Brand></a></GridItem>

  

</Grid>
    </PageSection>
  );
}

export { Dashboard };
