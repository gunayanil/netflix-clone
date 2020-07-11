import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  ButtonLink,
  Container,
  Frame,
  Group,
  Link,
  Logo,
  Text,
  Feature,
  FeatureCallOut,
  PlayButton,
} from './styles/header';

export const Header = ({ bg = true, children, ...props }) => {
  return bg ? <Background {...props}>{children}</Background> : children;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...props }) {
  return <ButtonLink {...props}>{children}</ButtonLink>;
};

Header.Frame = function HeaderFrame({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...props }) {
  return <Group {...props}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...props }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...props} />
    </ReactRouterLink>
  );
};

Header.Link = function HeaderLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
};

Header.Text = function HeaderText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

Header.Feature = function HeaderFeautre({ children, ...props }) {
  return <Feature {...props}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeautreCallOut({ children, ...props }) {
  return <FeatureCallOut {...props}>{children}</FeatureCallOut>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...props }) {
  return <PlayButton {...props}>{children}</PlayButton>;
};
