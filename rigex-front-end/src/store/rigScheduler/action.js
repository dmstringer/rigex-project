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
const getAllInfrastructureRequirements = (InfrastructureRequirements) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GET_ALL_INFRASTRUCTURE_REQUIREMENTS,
      payload: InfrastructureRequirements,
    });
  };
};
const getAllDiskDrives = (diskDrives) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GET_ALL_DISK_DRIVES,
      payload: diskDrives,
    });
  };
};

export const rigSchedulerActions = {
  getAllContentTextsByType,
  getAllTeamResources,
  getAllInfrastructureRequirements,
  getAllDiskDrives,
};
