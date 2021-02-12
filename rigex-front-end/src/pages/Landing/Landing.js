import React, { useEffect, useState } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
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

const Landing = () => {
  const { pathname } = useLocation();
  if (pathname.includes(routePaths.landing + '/')) {
    const isValidNestedPath = validatePath();
    if (!isValidNestedPath) history.push(routePaths.landing);
  }

  const listOfRigs = useSelector((state) => state.rigs);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const { loading, error, data } = useQuery(GET_ALL_RIGS);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
    if (data) {
      dispatch(rigActions.getAllRigs(data));
    }
  }, [dispatch, error, data, loading]);

  const listOfWells = [];

  const MainWindow = () => (
    <div className="main-window">
      {listOfRigs.length > 0 ? (
        <div className="right-panel">
          <Route exact path={routePaths.landing + routePaths.rig}>
            <Rig listOfRigs={listOfRigs} listOfWells={listOfWells} />
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
