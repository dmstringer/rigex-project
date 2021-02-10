import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';

import { Rig } from '../index';
import NavBar from '../../components/navBar/NavBar';
import routePaths from '../../constants/routePaths';
import validatePath from '../../utils/validatePath';
import history from '../../utils/history';
import RigSidebar from '../../components/RigSidebar/RigSidebar';
import '../../styles/styles.scss';
import { GET_ALL_RIGS } from '../../constants/serviceAPI';
import { rigActions } from '../../store/rig/action';

const Landing = () => {
  const { pathname } = useLocation();
  if (pathname.includes(routePaths.landing + '/')) {
    const isValidNestedPath = validatePath();
    if (!isValidNestedPath) history.push(routePaths.landing);
  }

  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_ALL_RIGS, {
    errorPolicy: 'all',
    onCompleted: (data) => {
      dispatch(rigActions.getAllRigs(data));
    },
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const listOfRigs = useSelector((state) => state.rigs);

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
