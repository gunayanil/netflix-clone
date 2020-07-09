import React from 'react';
import { Container, SubTitle, Title } from './styles/feature';

export const Feature = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Feature.Title = function FeatureTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...props }) {
  return <SubTitle {...props}>{children}</SubTitle>;
};
