import React from 'react';
import { IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

import RigList from '../../components/RigSidebar/RigList';
import EmptyCard from '../../components/RigSidebar/EmptyCard';
import './sideBar.scss';

const RigSidebar = ({ rigList }) => {
  return (
    <div className='sideBar'>
      <div className='rigsTitle'>
        <h2>Rigs</h2>
        <IconButton
          id='sidebarButton'
          onClick={() => {
            alert('TEST');
          }}
        >
          <AddBoxIcon fontSize='large' color='primary' />
        </IconButton>
      </div>
      {rigList.length ? <RigList rigList={rigList} /> : <EmptyCard />}
    </div>
  );
};

export default RigSidebar;
