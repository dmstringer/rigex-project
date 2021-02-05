import React from 'react';
import { Route, useLocation } from 'react-router-dom';

import { Rig } from '../index';
import NavBar from '../../components/navBar/NavBar';
import routePaths from '../../constants/routePaths';
import validatePath from '../../utils/validatePath';
import history from '../../utils/history';

const Landing = () => {
  const { pathname } = useLocation();
  if (pathname.includes(routePaths.landing + '/')) {
    const isValidNestedPath = validatePath();
    if (!isValidNestedPath) history.push(routePaths.landing);
  }

  const listOfRigs = [
    {"id": "asbhkjsahb278173",
    "name": "Noble 1",
    "wells": []},
    {"id": "98yqr98gnyaoruy",
    "name": "Noble 2",
    "wells": []},
  ];

  return (
    <div>
      <NavBar />
      <Route exact path={routePaths.landing + routePaths.rig} >
        <Rig listOfRigs={listOfRigs} />
      </Route>
    </div>
  );
};

export default Landing;
