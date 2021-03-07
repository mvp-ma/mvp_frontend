import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './style.scss';

const Header = () => (
  <Toolbar className='toolbar'>
    <Typography
      component='h2'
      variant='h5'
      color='inherit'
      align='center'
      noWrap
    >
      EXEC
    </Typography>
  </Toolbar>
);

export default Header;
