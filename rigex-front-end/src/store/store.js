import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import loginReducer from './login/reducers';
import signUpReducer from './signUp/reducers';
import rigReducer from './rig/reducers';
import wellReducer from './wells/reducers'

export const store = createStore(
  combineReducers(
    {
      login: loginReducer,
      signUp: signUpReducer,
      rigs: rigReducer,
      wells: wellReducer
    },
    composeWithDevTools()
  ),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
