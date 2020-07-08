import React from 'react';
import {
  Container,
  Inner,
  Item,
  Title,
  SubTitle,
  Image,
  Pane,
} from './styles/jumbotron';

export const Jumbotron = ({ children, direction = 'row', ...props }) => {
  return (
    <Item {...props}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

// Compound Components
Jumbotron.Container = function JumbtronContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...props }) {
  return <SubTitle {...props}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...props }) {
  return <Image {...props} />;
};

Jumbotron.Pane = function JumbotronPane({ children, ...props }) {
  return <Pane {...props}>{children}</Pane>;
};
