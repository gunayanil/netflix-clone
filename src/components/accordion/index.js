import React, { useState, useContext, createContext } from 'react';
import {
  Body,
  Container,
  Frame,
  Header,
  Inner,
  Item,
  Title,
} from './styles/accordion';

const ToggleContext = createContext();

export const Accordion = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Header = function AccordionHeader({ children, ...props }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...props}>
      {children}
      {toggleShow ? (
        <img src='/images/icons/close-slim.png' alt='Close' />
      ) : (
        <img src='/images/icons/add.png' alt='Open' />
      )}
    </Header>
  );
};

Accordion.Item = function AccordionItem({ children, ...props }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...props}>{children}</Item>;
    </ToggleContext.Provider>
  );
};

Accordion.Body = function AccordionBody({ children, ...props }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...props}>{children}</Body> : null;
};

Accordion.Frame = function AccordionFrame({ children, ...props }) {
  return <Frame {...props}>{children}</Frame>;
};

Accordion.Title = function AccordionTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};
