import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from '../containers/footer';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = name === '' || password === '' || email === '';

  const handleSignup = e => {
    e.preventDefault();
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method='POST'>
            <Form.Input
              placeholder='Name'
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Form.Input
              placeholder='Email'
              type='email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              placeholder='Password'
              type='password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to='/signin'>Sign in now</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};
