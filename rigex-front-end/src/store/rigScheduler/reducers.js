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
    default:
      return state;
  }
};

export default rigSchedulerReducer;
