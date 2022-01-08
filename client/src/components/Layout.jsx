import React from 'react';
import { Container } from '@material-ui/core';
import { Copyright } from 'components/Copyright.jsx';
import { NavBar } from 'components/NavBar.jsx';

export const Layout = ({ children }) => {
  return (
    <Container maxWidth='xl' disableGutters={true}>
      <NavBar />
      {children}
      <Copyright />
    </Container>
  );
};
