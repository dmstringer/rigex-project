import React, { useEffect, useState } from 'react';
import { Route, useLocation, useParams } from 'react-router-dom';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import { Rig } from '../index';
import NoRigs from '../../components/rigs/noRigs';
import NavBar from '../../components/navBar/NavBar';
import routePaths from '../../constants/routePaths';
import validatePath from '../../utils/validatePath';
import history from '../../utils/history';
import RigSidebar from '../../components/RigSidebar/RigSidebar';
import { GET_ALL_RIGS } from '../../constants/serviceAPI';
import { rigActions } from '../../store/rig/action';
import CreateRig from '../../components/createRig/CreateRig';
import { CREATE_RIG } from '../../constants/serviceAPI';
import './landing.scss';

const Landing = () => {
  const { pathname } = useLocation();
  const [newRigOpen, setNewRigOpen] = useState(false);
  const [currentRigSelection, setCurrentRigSelection] = useState('');
  const [newlyCreatedRig, setNewlyCreated] = useState('');
  const { pathId } = useParams();
  const listOfRigs = useSelector((state) => {
    return state.rigs.sort((a, b) => (a.name > b.name ? 1 : -1));
  });

  if (pathname.includes(routePaths.landing + '/')) {
    const isValidNestedPath = validatePath();

    let rigExists = false;

    for (let rig in listOfRigs) {
      if (rig.id === pathId) {
        rigExists = true;
        break;
      }
    }
    if (!isValidNestedPath || !rigExists) {
      history.push(routePaths.landing);
    }
  }

  const dispatch = useDispatch();
  const [getAllRigs, { getLoading, getError }] = useLazyQuery(GET_ALL_RIGS, {
    errorPolicy: 'all',
    onCompleted: (data) => {
      dispatch(rigActions.getAllRigs(data));
    },
  });
  const [createNewRig, { createLoading, createError }] = useMutation(
    CREATE_RIG,
    {
      onCompleted: ({ upsertRig: { id } }) => {
        if (id) {
          setNewRigOpen(false);
          setNewlyCreated(id);
          getAllRigs();
        }
      },
    }
  );

  const listOfWells = [];

  const handleNewRigOpen = () => {
    setNewRigOpen(true);
  };

  const handleNewRigClose = () => {
    setNewRigOpen(false);
  };

  const handleCreate = (rigName) => {
    createNewRig({
      variables: { rigInput: { name: rigName } },
    });
  };

  const handleRigSelect = (id) => {
    setCurrentRigSelection(id);
    history.push(routePaths.landing + `/rig/${id}`);
  };

  useEffect(() => {
    if (pathname === routePaths.landing) {
      getAllRigs();
    }
  }, [pathname]);

  useEffect(() => {
    if (newlyCreatedRig.length) {
      handleRigSelect(newlyCreatedRig);
    } else if (listOfRigs.length) {
      handleRigSelect(listOfRigs[0].id);
    }
  }, [listOfRigs, newlyCreatedRig]);

  useEffect(() => {
    if (createError) {
      console.log(createError);
    }
  }, [createLoading, createError]);

  if (getLoading) {
    return 'Loading...';
  }
  if (getError) {
    return `Error! ${getError.message}`;
  }

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
          <NoRigs handleNewRigOpen={handleNewRigOpen} />
        </div>
      )}
    </div>
  );

  return (
    <div className="landing">
      <NavBar />
      <div className="content">
        <RigSidebar
          rigList={listOfRigs}
          handleNewRigOpen={handleNewRigOpen}
          handleRigSelect={handleRigSelect}
          currentSelection={currentRigSelection}
        />
        <MainWindow />
      </div>
      <CreateRig
        isOpen={newRigOpen}
        handleClose={handleNewRigClose}
        handleCreate={handleCreate}
      />
    </div>
  );
};

export default Landing;
