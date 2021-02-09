import React from 'react';
import { Box, Typography } from '@material-ui/core';

import emptyRigs from '../../assets/Tower@1.5x.svg';
import './sideBar.scss';

function EmptyCard() {
  return (
    <Box className='sidebarBox'>
      <img className='boxImage' alt='Oil Rig' src={emptyRigs} title='Oil Rig' />
      <Typography className='sidebarText' variant='body2' color='textSecondary'>
        Your rigs will be organized here. Start creating!
      </Typography>
    </Box>
  );
}

export default EmptyCard;
