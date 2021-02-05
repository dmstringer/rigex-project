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

  return (
    <div>
      <NavBar />
      <h1>Landing Works!</h1>
      <Route exact path={routePaths.landing + routePaths.rig} component={Rig} />
    </div>
  );
};

export default Landing;
