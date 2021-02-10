import React from 'react';
import { IconButton, Typography } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

import RigList from '../../components/RigSidebar/RigList';
import EmptyCard from '../../components/RigSidebar/EmptyCard';
import './sideBar.scss';

const RigSidebar = ({ rigList }) => {
  return (
    <div className='sideBar'>
      <div className='rigsTitle'>
        <Typography variant='h6'>Rigs</Typography>
        <IconButton
          id='sidebarButton'
          onClick={() => {
            alert('TEST');
          }}
          color='primary'
        >
          <AddBoxIcon fontSize='large' />
        </IconButton>
      </div>
      {rigList.length ? <RigList rigList={rigList} /> : <EmptyCard />}
    </div>
  );
};

export default RigSidebar;
