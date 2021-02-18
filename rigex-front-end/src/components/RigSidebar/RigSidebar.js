import React from 'react';
import { IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

import RigList from '../../components/RigSidebar/RigList';
import EmptyCard from '../../components/RigSidebar/EmptyCard';
import './sideBar.scss';

const RigSidebar = ({
  rigList,
  handleRigModalOpen,
  handleRigSelect,
  currentSelection,
}) => {
  return (
    <div className="sideBar">
      <div className="rigsTitle">
        <h2>Rigs</h2>
        <IconButton
          id="sidebarButton"
          onClick={() => handleRigModalOpen('create')}
        >
          <AddBoxIcon fontSize="large" color="primary" />
        </IconButton>
      </div>
      {rigList.length ? (
        <RigList
          rigList={rigList}
          handleRigSelect={handleRigSelect}
          currentSelection={currentSelection}
        />
      ) : (
        <EmptyCard />
      )}
    </div>
  );
};

export default RigSidebar;
