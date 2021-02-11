import actionTypes from './actionTypes';
import { loginActions } from '../login/action';

const setSignedUpUser = (user) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_NEW_USER, user: { ...user } });

    dispatch(loginActions.setLoggedInUser(user));
  };
};

export const signUpActions = {
  setSignedUpUser,
};
