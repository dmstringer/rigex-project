import actionTypes from './actionTypes';

const upsertWell = (well) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.UPSERT_WELL, payload: well });
  };
};

const clearSuccess = () => {
  return (dispatch) => {
    dispatch({ type:actionTypes.CLEAR_SUCCESS, payload: null })
  }
}

export const wellActions = {
  upsertWell,
  clearSuccess
};
