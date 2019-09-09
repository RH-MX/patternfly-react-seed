import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavList,
  NavItem,
  NavVariants,
  Page,
  PageHeader,
  PageSidebar,
  SkipToContent,
  Brand
} from '@patternfly/react-core';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { routes } from '@app/routes';
import redhatlogo from '@app/assets/images/Logo-RedHat-A-Color-RGBw.png';

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({children}) => {
  const logoProps = {
    href: '/',
    target: '_self'
  };
  const [isNavOpen, setIsNavOpen] = React.useState(true);
  const [isMobileView, setIsMobileView] = React.useState(true);
  const [isNavOpenMobile, setIsNavOpenMobile] = React.useState(false);
  const onNavToggleMobile = () => {
    setIsNavOpenMobile(!isNavOpenMobile);
  };
  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  }
  const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
    setIsMobileView(props.mobileView);
  };
  const Header = (
    <PageHeader
      logo={<Brand src={redhatlogo} alt="Red Hat" />}
      logoProps={logoProps}
      toolbar="Open Innovation Rally"
      showNavToggle={true}
      isNavOpen={isNavOpen}
      onNavToggle={isMobileView ? onNavToggleMobile : onNavToggle}
    />
  );

  const Navigation = (
    <Nav id="nav-primary-simple">
      <NavList id="nav-list-simple" variant={NavVariants.simple}>
        {routes.map((route, idx) => {
          return (
            <NavItem key={`${route.label}-${idx}`} id={`${route.label}-${idx}`} > {route.icon}
              <NavLink exact={true} to={route.path} activeClassName="pf-m-current">{route.label}</NavLink>{route.icon}
            </NavItem>
          );
        })}
      </NavList>
    </Nav>
  );
  const Sidebar = (
    <PageSidebar
      nav={Navigation}
      isNavOpen={isMobileView ? isNavOpenMobile : isNavOpen} />
  );
  const PageSkipToContent = (
    <SkipToContent href="#primary-app-container">
      Skip to Content
    </SkipToContent>
  );
  return (
    <Page
      mainContainerId="primary-app-container"
      header={Header}
      sidebar={Sidebar}
      onPageResize={onPageResize}
      skipToContent={PageSkipToContent}>
      {children}
    </Page>
  );
}

export { AppLayout };
