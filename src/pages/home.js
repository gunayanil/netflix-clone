import React from 'react';
import { FaqContainer } from '../containers/faq';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { OptForm } from '../components';

export const Home = () => {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder='Email Address' />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email to create your membership.
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
};
