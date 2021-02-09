import actionTypes from './actionTypes';

const getAllRigs = (rigs) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_RIGS, payload: rigs });
  };
};

export const rigActions = {
  getAllRigs,
};
