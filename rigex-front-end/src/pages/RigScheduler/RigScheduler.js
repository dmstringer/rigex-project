import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import SchedulerHeader from '../../components/rigScheduler/Header';
import SchedulerListBlock from '../../components/rigScheduler/Lists';
import { GET_ALL_CONTENT_TEXTS_BY_TYPE } from '../../constants/serviceAPI';
import { rigSchedulerActions } from '../../store/rigScheduler/action';

const RigScheduler = () => {
  const dispatch = useDispatch();
  const [getContentTextsByType] = useLazyQuery(GET_ALL_CONTENT_TEXTS_BY_TYPE, {
    errorPolicy: 'all',
    onCompleted: (data) => {
      dispatch(rigSchedulerActions.getAllContentTextsByType(data));
    },
  });

  useEffect(() => {
    getContentTextsByType();
  }, [getContentTextsByType]);

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
        />
      ));
    } else {
      return <SchedulerListBlock />;
    }
  };

  return (
    <div>
      <SchedulerHeader />
      <SchedulerLists />
    </div>
  );
};

export default RigScheduler;
