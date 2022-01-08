import React from 'react';
import { Typography, Link } from '@material-ui/core';

export const Copyright = () => {
  return (
    <Typography
      style={{
        position: 'fixed',
        bottom: '0px',
        backgroundColor: 'silver',
        width: '100%',
        borderTop: '4px groove grey',
        height: '60px',
      }}
      variant='body2'
      color='textSecondary'
      align='center'
    >
      <br />
      {'Copyright © '}
      <Link color='inherit' href='https://zavala.info/'>
        Ricardo Zavala
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
