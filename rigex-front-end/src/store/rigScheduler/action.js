import actionTypes from './actionTypes';

const getAllContentTextsByType = (lists) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GET_ALL_CONTENT_TEXTS_BY_TYPE,
      payload: lists,
    });
  };
};
const getAllTeamResources = (resources) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GET_ALL_TEAM_RESOURCES,
      payload: resources,
    });
  };
};

export const rigSchedulerActions = {
  getAllContentTextsByType,
  getAllTeamResources,
};
