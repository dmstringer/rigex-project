import actions from './actionTypes';

const wellReducer = (state = {addSuccess: null}, action) => {
  switch (action.type) {
    case actions.UPSERT_WELL:
      return { ...state, addSuccess: true };
    case actions.CLEAR_SUCCESS:
      return { ...state, addSuccess: "confirmed" }
    default:
      return { addSuccess: "none" };
  }
};

export default wellReducer;
