import React, { useEffect, useState } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import { Rig } from '../index';
import NoRigs from '../../components/rigs/noRigs';
import NavBar from '../../components/navBar/NavBar';
import routePaths from '../../constants/routePaths';
import validatePath from '../../utils/validatePath';
import history from '../../utils/history';
import RigSidebar from '../../components/RigSidebar/RigSidebar';
import './landing.scss';
import { GET_ALL_RIGS } from '../../constants/serviceAPI';
import { rigActions } from '../../store/rig/action';
import { wellActions } from '../../store/wells/action' 

const Landing = () => {
  const { pathname } = useLocation();
  if (pathname.includes(routePaths.landing + '/')) {
    const isValidNestedPath = validatePath();
    if (!isValidNestedPath) history.push(routePaths.landing);
  }

  const addWellState = useSelector((state) => state.wells.addSuccess)
  const [wellModalOpen, setWellModalOpen] = useState(false)
  const listOfRigs = useSelector((state) => state.rigs);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [loadRigs, { loading, error, data }] = useLazyQuery(GET_ALL_RIGS);

  const handleWellModalClose = () => {
    setWellModalOpen(false)
  }

  const handleWellModalOpen = () => {
    setWellModalOpen(true)
  }

  useEffect(() => {
    if (addWellState !== "confirmed") {
      loadRigs()
    }
    if (addWellState === true) {
      dispatch(wellActions.clearSuccess())
    }

  }, [addWellState])

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
    if (data) {
      dispatch(rigActions.getAllRigs(data));
    }
  }, [dispatch, error, data, loading]);

  Object.size = function (object) {
    var size = 0,
      key;
    for (key in object) {
      if (object.hasOwnProperty(key)) size++;
    }
    return size;
  };

  var listOfRigsSize = Object.size(listOfRigs);

  const MainWindow = () => (
    <div className="main-window">
      {listOfRigsSize > 0 ? (
        <div className="right-panel">
          <Route exact path={routePaths.landing + routePaths.rig}>
            <Rig 
              listOfRigs={listOfRigs}
              wellModalOpen={wellModalOpen}
              handleWellModalClose={handleWellModalClose}
              handleWellModalOpen={handleWellModalOpen}
            />
          </Route>
        </div>
      ) : (
        <div className="right-panel">
          <NoRigs />
        </div>
      )}
    </div>
  );

  return (
    <div className="landing">
      <NavBar />
      <div className="content">
        <RigSidebar rigList={listOfRigs} />
        <MainWindow />
      </div>
    </div>
  );
};

export default Landing;
