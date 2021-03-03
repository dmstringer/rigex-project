import actions from './actionTypes';

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return {
        loggedIn: true,
        user: action.user,
      };
    case actions.LOGOUT:
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
