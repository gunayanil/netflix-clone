import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  ButtonLink,
  Container,
  Frame,
  Link,
  Logo,
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

Header.Logo = function HeaderLogo({ to, ...props }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...props} />
    </ReactRouterLink>
  );
};
