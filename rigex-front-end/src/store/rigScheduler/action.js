import actionTypes from './actionTypes';

const getAllContentTextsByType = (lists) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GET_ALL_CONTENT_TEXTS_BY_TYPE,
      payload: lists,
    });
  };
};

export const rigSchedulerActions = {
  getAllContentTextsByType,
};
