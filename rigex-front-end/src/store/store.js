import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import loginReducer from './login/reducers';
import rigReducer from './rig/reducers';
import serviceReducer from './services/reducers';
import chooseUsReducer from './chooseUs/reducers';
import aboutTextReducer from './aboutText/reducers';
import statisticsReducer from "./statistics/reducers";
import teamReducer from './team/reducers'
import wellReducer from './wells/reducers';
import rigSchedulerReducer from './rigScheduler/reducers';

export const store = createStore(
  combineReducers(
    {
      login: loginReducer,
      rigs: rigReducer,
      aboutText: aboutTextReducer,
      services: serviceReducer,
      chooseUs: chooseUsReducer,
      statistics: statisticsReducer,
      team: teamReducer,
      wells: wellReducer,
      rigScheduler: rigSchedulerReducer,
    },
    composeWithDevTools()
  ),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
