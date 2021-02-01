import React from 'react';
import { Route } from 'react-router-dom';

import routePaths from '../../constants/routePaths';
import { Rig } from '../index';

const Landing = () => {
  return (
    <div>
      <h1>Landing Works!</h1>
      <Route exact path={routePaths.landing + routePaths.rig} component={Rig} />
    </div>
  );
};

export default Landing;
