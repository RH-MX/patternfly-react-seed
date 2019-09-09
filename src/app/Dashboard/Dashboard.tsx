import * as React from 'react';
import { PageSection, Title, Gallery, GalleryItem, Avatar, Brand, EmptyState, EmptyStateIcon, EmptyStateVariant, EmptyStateBody, Page, Card, CardBody, Label, Badge, Grid, GridItem } from '@patternfly/react-core';
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
    <Page>
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
      </PageSection>
      <PageSection>
      <Grid  gutter="md">
  <GridItem span={6} rowSpan={12}><Card><CardBody><Grid><GridItem span={2}><h1><Badge>1</Badge></h1></GridItem><GridItem span={4}><a href="https://192.168.122.21" target="_blank"><Brand src={imgOSP} alt="Red Hat OSP" width="560px"></Brand></a></GridItem></Grid></CardBody></Card></GridItem>
  <GridItem span={6} rowSpan={12}><Card><CardBody><Grid><GridItem span={2}><h1><Badge>2</Badge></h1></GridItem><GridItem span={4}><a href="https://cloudforms.example.com" target="_blank"><Brand src={imgCF} alt="Red Hat Cloud Forms" width="560px"></Brand></a></GridItem></Grid></CardBody></Card></GridItem>
  <GridItem span={6} rowSpan={12}><Card><CardBody><Grid><GridItem span={2}><h1><Badge>3</Badge></h1></GridItem><GridItem span={4}><a href="http://tower.example.com" target="_blank"><Brand src={imgAnsible} alt="Red Hat Ansible" width="560px"></Brand></a></GridItem></Grid></CardBody></Card></GridItem>
  <GridItem span={6} rowSpan={12}><Card><CardBody><Grid><GridItem span={2}><h1><Badge>4</Badge></h1></GridItem><GridItem span={4}><a href="https://openshift.rally.redhat.com:8443/console" target="_blank"><Brand src={imgOCP} alt="Red Hat OCP" width="560px"></Brand></a></GridItem></Grid></CardBody></Card></GridItem>
  
</Grid>
         
    </PageSection>
   
    </Page>
  );
}

export { Dashboard };
