import React, { useState, useEffect } from 'react';
import { IconButton, Button } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

import RigList from '../../components/RigSidebar/RigList';
import EmptyCard from '../../components/RigSidebar/EmptyCard';
import history from '../../utils/history';
import routePaths from '../../constants/routePaths';
import './sideBar.scss';

const RigSidebar = ({
  rigList,
  handleRigModalOpen,
  handleRigSelect,
  currentSelection,
  currentNestedPath,
}) => {
  const [isMapView, setIsMapView] = useState(false);

  useEffect(() => {
    setIsMapView(currentNestedPath === '/map');
  }, [currentNestedPath]);

  return (
    <div className="sideBar">
      <Button
        className={
          isMapView ? 'input-button button-grey' : 'input-button button-white'
        }
        onClick={() => {
          const nested = isMapView ? '/rig/' : '/map/';
          history.push(routePaths.landing + nested + currentSelection);
        }}
      >
        Map view
      </Button>
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
