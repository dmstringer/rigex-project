import actions from './actionTypes';

const rigReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_RIGS:
      return [...action.payload.getAllRigs];
    default:
      return state;
  }
};

export default rigReducer;
