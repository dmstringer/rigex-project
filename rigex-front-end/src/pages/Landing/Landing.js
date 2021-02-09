import React from 'react';
import { Route, useLocation } from 'react-router-dom';

import { Rig } from '../index';
import NavBar from '../../components/navBar/NavBar';
import routePaths from '../../constants/routePaths';
import validatePath from '../../utils/validatePath';
import history from '../../utils/history';
import RigSidebar from '../../components/RigSidebar/RigSidebar';
import '../../styles/styles.scss';

let listOfRigs = [];

const Landing = () => {
  const { pathname } = useLocation();
  if (pathname.includes(routePaths.landing + '/')) {
    const isValidNestedPath = validatePath();
    if (!isValidNestedPath) history.push(routePaths.landing);
  }

  return (
    <div className='landing'>
      <NavBar />
      <div className='content'>
        <RigSidebar rigList={listOfRigs} />
        <Route exact path={routePaths.landing + routePaths.rig} component={Rig} />
      </div>
    </div>
  );
};

export default Landing;
