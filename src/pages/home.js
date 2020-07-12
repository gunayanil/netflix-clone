import React from 'react';
import { FaqContainer } from '../containers/faq';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Feature, OptForm } from '../components';

export const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>100% entertainment guaranteed.</Feature.Title>
          <Feature.SubTitle>
            You'll love Netflix! If you don't, cancel within 7 days for a
            refund.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder='Email Address' />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create your membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
};
