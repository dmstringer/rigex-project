import actions from './actionTypes';

const rigSchedulerReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_ALL_CONTENT_TEXTS_BY_TYPE:
      return { content: [...action.payload.getAllContentTextsByType] };
    default:
      return state;
  }
};

export default rigSchedulerReducer;
