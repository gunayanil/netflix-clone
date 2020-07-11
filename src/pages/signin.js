import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = password === '' || email === '';

  const handleSignin = e => {
    e.preventDefult();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        setError('');
        history.push(ROUTES.BROWSE);
      })
      .catch(err => setError(err.message));
  };

  return (
    <>
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
      <FooterContainer />
    </>
  );
};
