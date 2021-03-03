import React, { useEffect, useState } from 'react';
import { Route, useLocation, useParams } from 'react-router-dom';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { Rig, RigMap } from '../index';
import NoRigs from '../../components/rigs/noRigs';
import NavBar from '../../components/navBar/NavBar';
import routePaths from '../../constants/routePaths';
import validatePath, { getNestedPath } from '../../utils/validatePath';
import history from '../../utils/history';
import RigSidebar from '../../components/RigSidebar/RigSidebar';
import { rigActions } from '../../store/rig/action';
import { wellActions } from '../../store/wells/action';
import RigModal from '../../components/RigModal/RigModal';
import {
  CREATE_OR_UPDATE_RIG,
  GET_ALL_RIGS,
  UPSERT_WELL,
  DELETE_WELL,
} from '../../constants/serviceAPI';
import './landing.scss';

const Landing = () => {
  const user = useSelector((state) => state.login.user);
  const [userState, setUserState] = useState({});

  useEffect(() => {
    if (user) {
      setUserState(user);
    }
    if (!user) {
      history.replace(routePaths.login);
    }
  }, [user]);

  const { pathname } = useLocation();
  const addWellState = useSelector((state) => state.wells.addSuccess);
  const [rigModalOpen, setRigModalOpen] = useState({
    isOpen: false,
    type: '',
    currentName: '',
    id: '',
  });
  const [currentRigSelection, setCurrentRigSelection] = useState('');
  const [newlyCreatedRig, setNewlyCreated] = useState('');
  const [wellModalInfo, setWellModalInfo] = useState({
    isOpen: false,
    type: '',
    currentName: '',
    currentLatitude: null,
    currentLongitude: null,
    currentStatus: '',
    id: '',
  });
  const [currentNestedPath, setCurrentNestedPath] = useState('/rig');

  const handleWellModalOpen = (
    type,
    currentName,
    currentLatitude,
    currentLongitude,
    currentStatus,
    id
  ) => {
    if (
      currentName &&
      currentLatitude &&
      currentLongitude &&
      id &&
      currentStatus
    ) {
      setWellModalInfo({
        type,
        currentName,
        currentLatitude,
        currentLongitude,
        currentStatus,
        id,
        isOpen: true,
      });
    } else {
      setWellModalInfo((previous) => ({
        ...previous,
        type,
        isOpen: true,
      }));
    }
  };

  const handleWellModalClose = () => {
    setWellModalInfo({
      isOpen: false,
      type: '',
      currentName: '',
      currentLatitude: null,
      currentLongitude: null,
      status: '',
      id: '',
    });
  };

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
    const nestedPathCheck = getNestedPath(pathname);
    if (isValidNestedPath && currentNestedPath !== nestedPathCheck) {
      setCurrentNestedPath(nestedPathCheck);
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
  const [createOrUpdateRig, { createLoading, createError }] = useMutation(
    CREATE_OR_UPDATE_RIG,
    {
      onCompleted: ({ upsertRig: { id } }) => {
        if (id) {
          setRigModalOpen({
            isOpen: false,
            type: '',
            currentName: '',
            id: '',
          });
          setNewlyCreated(id);
          getAllRigs();
        }
      },
    }
  );

  const [upsertWell, { wellLoading, wellError }] = useMutation(UPSERT_WELL, {
    onCompleted: getAllRigs,
  });
  const [deleteWell, { deleteLoading, deleteError }] = useMutation(
    DELETE_WELL,
    {
      onCompleted: getAllRigs,
    }
  );

  const handleRigModalOpen = (type, currentName, id) => {
    if (currentName && id) {
      setRigModalOpen({ type, currentName, isOpen: true, id });
    } else {
      setRigModalOpen({ type, isOpen: true, currentName: '', id: '' });
    }
  };

  const handleRigModalClose = () => {
    setRigModalOpen({ type: '', isOpen: false, currentName: '', id: '' });
  };

  const handleCreateOrUpdate = (name, id) => {
    const rigDetails = id ? { name, id } : { name };
    createOrUpdateRig({
      variables: { rigInput: rigDetails },
    });
  };

  const handleWellDelete = (id) => {
    deleteWell({
      variables: { id },
    });
  };

  const handleRigSelect = (id) => {
    setCurrentRigSelection(id);
    history.push(routePaths.landing + `${currentNestedPath}/${id}`);
  };

  const onDragEnd = async ({ destination, source, draggableId }) => {
    if (!destination) {
      return;
    }

    const oldRigId = source.droppableId.slice(
      0,
      source.droppableId.indexOf(' ')
    );
    if (destination.droppableId !== oldRigId) {
      const oldRig = listOfRigs.find((rig) => rig.id === oldRigId);

      const droppedWell = oldRig.wells.find((well) => well.id === draggableId);

      const newWellDetails = {
        name: droppedWell.name.toString(),
        longitude: parseFloat(droppedWell.longitude),
        latitude: parseFloat(droppedWell.latitude),
        id: droppedWell.id.toString(),
        status: droppedWell.status.toString(),
        rigId: destination.droppableId.toString(),
      };

      await upsertWell({
        variables: { wellInput: newWellDetails },
      });
    }
  };

  useEffect(() => {
    if (pathname === routePaths.landing) {
      getAllRigs();
    }
    if (!currentNestedPath) {
      setCurrentNestedPath('/rig');
    }
  }, [getAllRigs, pathname, currentNestedPath]);

  useEffect(() => {
    if (addWellState !== 'confirmed') {
      getAllRigs();
    }
    if (addWellState === true) {
      dispatch(wellActions.clearSuccess());
    }
  }, [getAllRigs, dispatch, addWellState]);

  useEffect(() => {
    if (newlyCreatedRig.length) {
      handleRigSelect(newlyCreatedRig);
      setNewlyCreated('');
    } else if (listOfRigs.length && !currentRigSelection.length) {
      handleRigSelect(listOfRigs[0].id);
    } else if (listOfRigs.length) {
      handleRigSelect(currentRigSelection);
    }
  }, [listOfRigs, newlyCreatedRig, currentRigSelection]);

  useEffect(() => {
    if (createError) {
      console.log(createError);
    }
  }, [createLoading, createError]);

  useEffect(() => {
    if (wellError) {
      console.log(wellError);
    }
  }, [wellLoading, wellError]);

  useEffect(() => {
    if (deleteError) {
      console.log(deleteError);
    }
  }, [deleteLoading, deleteError]);

  if (getLoading) {
    return 'Loading...';
  }
  if (getError) {
    return `Error! ${getError.message}`;
  }

  const MainWindow = () => (
    <div className="main-window">
      <div className="right-panel">
        <Route exact path={routePaths.landing + routePaths.map}>
          <RigMap
            rig={listOfRigs.find((rig) => rig.id === currentRigSelection)}
          />
        </Route>
        {listOfRigs.length > 0 ? (
          <Route exact path={routePaths.landing + routePaths.rig}>
            <Rig
              handleWellDelete={handleWellDelete}
              listOfRigs={listOfRigs}
              handleRigModalOpen={handleRigModalOpen}
              wellModalInfo={wellModalInfo}
              handleWellModalOpen={handleWellModalOpen}
              handleWellModalClose={handleWellModalClose}
            />
          </Route>
        ) : (
          <NoRigs handleRigModalOpen={handleRigModalOpen} />
        )}
      </div>
    </div>
  );

  return (
    <div className="landing">
      <NavBar
        user={userState}
        rigList={listOfRigs}
        handleRigSelect={handleRigSelect}
      />
      <div className="content">
        <DragDropContext onDragEnd={onDragEnd}>
          <RigSidebar
            rigList={listOfRigs}
            handleRigModalOpen={handleRigModalOpen}
            handleRigSelect={handleRigSelect}
            currentSelection={currentRigSelection}
            currentNestedPath={currentNestedPath}
          />
          <MainWindow />
        </DragDropContext>
      </div>
      <RigModal
        rigDetails={rigModalOpen}
        handleClose={handleRigModalClose}
        handleCreateOrUpdate={handleCreateOrUpdate}
      />
    </div>
  );
};

export default Landing;
