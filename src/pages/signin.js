import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';

export const Signin = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isInvalid = password === '' || email === '';

  const handleSignin = e => {
    e.preventDefult();
    // call firebase
  };

  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSignin} method='POST'>
          <Form.Input
            placeholder='Email address'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <Form.Input
            type='password'
            value={password}
            placeholder='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit disabled={isInvalid} type='submit'>
            Sign In
          </Form.Submit>
          <Form.Text>
            New to Netflix? <Form.Link to='/signup'>Sign up now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA.
          </Form.TextSmall>
        </Form.Base>
      </Form>
    </HeaderContainer>
  );
};
