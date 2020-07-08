import React from 'react';
import { Break, Button, Container, Input, Text } from './styles/optform';

export const OptForm = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

OptForm.Input = function OptFormInput({ ...props }) {
  return <Input {...props} />;
};

OptForm.Break = function OptBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...props }) {
  return (
    <Button {...props}>
      {children} <img src='/images/icons/chevron-right.png' alt='Try now' />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};
