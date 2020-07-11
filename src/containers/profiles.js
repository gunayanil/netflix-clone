import React, { useState } from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';

export const SelectProfileContainer = ({ user, setProfile }) => {
  console.log('User: ', user);
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src='/images/misc/logo.svg' />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who is watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
};