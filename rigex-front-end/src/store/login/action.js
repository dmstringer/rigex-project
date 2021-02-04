import actionTypes from './actionTypes';
import routePaths from '../../constants/routePaths';
import history from '../../utils/history';
const setLoggedInUser = (user) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_USER, user: { ...user } });
    localStorage.setItem('userId', JSON.stringify(user.id));
    history.push(routePaths.landing);
  };
};
export const loginActions = {
  setLoggedInUser,
};
