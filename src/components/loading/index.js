import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

export const Loading = ({ src, ...props }) => {
  return (
    <Spinner {...props}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
};

Loading.ReleaseBody = function LoadingRelease({ children, ...props }) {
  return <ReleaseBody />;
};
