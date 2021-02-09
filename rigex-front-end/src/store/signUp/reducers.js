import actions from './actionTypes';

const signUpReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.SET_NEW_USER:
      return {
        loggedIn: true,
        user: action.user,
      };
    default:
      return state;
  }
};

export default signUpReducer;
