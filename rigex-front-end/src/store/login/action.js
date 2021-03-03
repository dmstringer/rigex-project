import actionTypes from './actionTypes';
import routePaths from '../../constants/routePaths';
import history from '../../utils/history';

const setLoggedInUser = (user) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_USER, user: { ...user } });
    localStorage.setItem('userId', JSON.stringify(user.id));

    history.replace(routePaths.landing);
  };
};

const logout = () => {
  return (dispatch) => {
    // history.replace(routePaths.login);
    dispatch({ type: actionTypes.LOGOUT });
    localStorage.removeItem('userId');
  };
};

export const loginActions = {
  setLoggedInUser,
  logout,
};
