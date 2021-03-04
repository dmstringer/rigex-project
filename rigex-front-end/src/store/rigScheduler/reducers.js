import actions from './actionTypes';

const rigSchedulerReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_ALL_CONTENT_TEXTS_BY_TYPE:
      return {
        ...state,
        content: [...action.payload.getAllContentTextsByType],
      };
    case actions.GET_ALL_TEAM_RESOURCES:
      return { ...state, resources: [...action.payload.getAllTeamResources] };
    case actions.GET_ALL_INFRASTRUCTURE_REQUIREMENTS:
      return {
        ...state,
        infrastructureRequirements: [
          ...action.payload.getAllInfrastructureRequirements,
        ],
      };
    case actions.GET_ALL_DISK_DRIVES:
      return {
        ...state,
        diskDrives: [...action.payload.getAllDiskDrives],
      };
    case actions.GET_ALL_DELIVERY_PHASES:
      return {
        ...state,
        deliveryPhases: action.payload.getAllDeliveryPhases,
      };
    default:
      return state;
  }
};

export default rigSchedulerReducer;
