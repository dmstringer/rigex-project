import actionTypes from './actionTypes';

const setLoggedInUser = (user) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_USER, user: { ...user } });

    localStorage.setItem('userId', JSON.stringify(user.id));
  };
};

export const loginActions = {
  setLoggedInUser,
};
