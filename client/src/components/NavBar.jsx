import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const NavBar = () => {
  return (
    <div>
      <AppBar sx={{ boxShadow: 3 }}>
        <Toolbar position='fixed' style={{ zIndex: '99' }}>
          <Typography style={{ textShadow: '1px 1px 2px black' }} variant='h4'>
            DEMO Streaming
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
