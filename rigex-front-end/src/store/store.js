import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import loginReducer from './login/reducers';
import rigReducer from './rig/reducers';
import aboutTextReducer from './aboutText/reducers';
import wellReducer from './wells/reducers'

export const store = createStore(
  combineReducers(
    {
      login: loginReducer,
      rigs: rigReducer,
      aboutText: aboutTextReducer,
      wells: wellReducer,
    },
    composeWithDevTools()
  ),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
