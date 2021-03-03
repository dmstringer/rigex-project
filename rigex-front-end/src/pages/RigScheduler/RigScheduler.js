import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import SchedulerHeader from '../../components/rigScheduler/Header';
import SchedulerListBlock from '../../components/rigScheduler/Lists';
import {
  GET_ALL_CONTENT_TEXTS_BY_TYPE,
  GET_ALL_TEAM_RESOURCES,
} from '../../constants/serviceAPI';
import CustomerTeamResources from '../../components/rigScheduler/CustomerTeamResources';
import { rigSchedulerActions } from '../../store/rigScheduler/action';

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

  useEffect(() => {
    getAllTeamResources();
    getContentTextsByType();
  }, [getAllTeamResources, getContentTextsByType]);

  return (
    <div>
      <SchedulerHeader />
      <SchedulerLists />
      <CustomerTeamResources
        customerTeamResources={teamResourcesContentState}
      />
    </div>
  );
};

export default RigScheduler;
