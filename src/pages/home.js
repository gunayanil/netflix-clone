import React from 'react';
import { FaqContainer } from '../containers/faq';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';

export const Home = () => {
  return (
    <>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
};
