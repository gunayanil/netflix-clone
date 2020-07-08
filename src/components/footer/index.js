import React from 'react';
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/footer';

export const Footer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Footer.Row = function FooterRow({ children, ...props }) {
  return <Row {...props}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...props }) {
  return <Column {...props}>{children}</Column>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterTitle({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Link = function FooterLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
};

Footer.Break = function FooterBreak({ ...props }) {
  return <Break {...props} />;
};
