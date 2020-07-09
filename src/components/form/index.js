import React from 'react';
import {
  Base,
  Container,
  Error,
  Link,
  Input,
  Submit,
  Text,
  TextSmall,
  Title,
} from './styles/form';

export const Form = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Form.Base = function FormBase({ children, ...props }) {
  return <Base {...props}>{children}</Base>;
};

Form.Error = function FormError({ children, ...props }) {
  return <Error {...props}>{children}</Error>;
};

Form.Link = function FormLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...props }) {
  return <Input {...props}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...props }) {
  return <Submit {...props}>{children}</Submit>;
};

Form.Text = function FormText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...props }) {
  return <TextSmall {...props}>{children}</TextSmall>;
};

Form.Title = function FormTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};
