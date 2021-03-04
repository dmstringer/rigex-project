import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import './rigSchedulerStyles.scss';
import SchedulerHeader from '../../components/rigScheduler/Header';
import SchedulerListBlock from '../../components/rigScheduler/Lists';
import SchedulerInfrastructureBlock from '../../components/rigScheduler/Infrastructure';
import {
  GET_ALL_CONTENT_TEXTS_BY_TYPE,
  GET_ALL_TEAM_RESOURCES,
  GET_ALL_INFRASTRUCTURE_REQUIREMENTS,
  GET_ALL_DISK_DRIVES,
  GET_ALL_DELIVERY_PHASES,
} from '../../constants/serviceAPI';
import CustomerTeamResources from '../../components/rigScheduler/CustomerTeamResources';
import { rigSchedulerActions } from '../../store/rigScheduler/action';
import ImplementationTimeline from '../../components/rigScheduler/ImplementationTimeline';

const RigScheduler = () => {
  const dispatch = useDispatch();
  const [getContentTextsByType] = useLazyQuery(GET_ALL_CONTENT_TEXTS_BY_TYPE, {
    errorPolicy: 'all',
    onCompleted: (data) => {
      dispatch(rigSchedulerActions.getAllContentTextsByType(data));
    },
  });

  const listsSectionState = useSelector((state) => state.rigScheduler.content);
  const SchedulerLists = () => {
    if (listsSectionState) {
      const listsArray = listsSectionState.filter(
        (listItem) => listItem.section === 'list'
      );
      return listsArray.map((element) => (
        <SchedulerListBlock
          key={element.name}
          ListHeading={element.name}
          ListContent={element.content}
          ListHeadingColor={element.titleColor}
          ListBackgroundColor={element.backgroundColor}
        />
      ));
    } else {
      return <SchedulerListBlock />;
    }
  };

  const [getAllTeamResources] = useLazyQuery(GET_ALL_TEAM_RESOURCES, {
    errorPolicy: 'all',
    onCompleted: (resources) => {
      dispatch(rigSchedulerActions.getAllTeamResources(resources));
    },
  });

  const teamResourcesContentState = useSelector(
    (state) => state.rigScheduler.resources
  );

  const [getAllInfrastructureRequirements] = useLazyQuery(
    GET_ALL_INFRASTRUCTURE_REQUIREMENTS,
    {
      errorPolicy: 'all',
      onCompleted: (InfrastructureRequirements) => {
        dispatch(
          rigSchedulerActions.getAllInfrastructureRequirements(
            InfrastructureRequirements
          )
        );
      },
    }
  );

  const infrastructureRequirementsState = useSelector(
    (state) => state.rigScheduler.infrastructureRequirements
  );

  const [getAllDiskDrives] = useLazyQuery(GET_ALL_DISK_DRIVES, {
    errorPolicy: 'all',
    onCompleted: (diskDrives) => {
      dispatch(rigSchedulerActions.getAllDiskDrives(diskDrives));
    },
  });

  const diskDriveState = useSelector((state) => state.rigScheduler.diskDrives);

  const SchedulerInfrastructure = () => {
    if (infrastructureRequirementsState) {
      const infrastructureTitleArray = infrastructureRequirementsState;
      return infrastructureTitleArray.map((element) => (
        <SchedulerInfrastructureBlock
          key={element.name}
          InfrastructureHeadings={element.name}
          InfrastructureContent={element.content}
          DiskDrives={diskDriveState}
        />
      ));
    } else {
      return <SchedulerInfrastructureBlock />;
    }
  };
  const [getAllDeliveryPhases] = useLazyQuery(GET_ALL_DELIVERY_PHASES, {
    errorPolicy: 'all',
    onCompleted: (phases) => {
      dispatch(rigSchedulerActions.getAllDeliveryPhases(phases));
    },
  });

  const deliveryPhasesContentState = useSelector(
    (state) => state.rigScheduler.deliveryPhases
  );

  useEffect(() => {
    getAllTeamResources();
    getContentTextsByType();
    getAllInfrastructureRequirements();
    getAllDiskDrives();
  }, [
    getAllTeamResources,
    getContentTextsByType,
    getAllInfrastructureRequirements,
    getAllDiskDrives,
  ]);

  useEffect(() => {
    getAllDeliveryPhases();
  }, [getAllTeamResources, getContentTextsByType, getAllDeliveryPhases]);

  return (
    <div>
      <SchedulerHeader />
      <SchedulerLists />
      <CustomerTeamResources
        customerTeamResources={teamResourcesContentState}
      />
      <ImplementationTimeline deliveryPhases={deliveryPhasesContentState} />
      <div className="infrastructure-section-title">
        <span className="infrastructure-section-title-text">
          Infrastructure Requirements
        </span>
      </div>
      <div className="infrastructure-section-content">
        <SchedulerInfrastructure />
      </div>
      <div className="infrastructure-section-note">
        <span>
          <em>
            <strong>NOTE: </strong>
            Requirements above are for production environment. Development and
            Test environments are expected to have similar or lesser
            requirements. Cloud options also available upon request.
          </em>
        </span>
      </div>
    </div>
  );
};

export default RigScheduler;
