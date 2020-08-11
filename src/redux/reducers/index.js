import { combineReducers } from "redux";
import {
  initialState as authInitialState,
  reducer as auth,
  authenticate,
  unauthenticate,
  setAccessToken
} from './auth'

import {
  initialState as playlistInitialState,
  reducer as playlist,
} from './playlist'

const combinedReducers = combineReducers({
  auth,
  playlist,
});

const initialState = {
  auth: {
    ...authInitialState
  },
  playlist: {
    ...playlistInitialState
  }
}

export {
  combinedReducers,
  initialState,
  authenticate,
  unauthenticate,
  setAccessToken,
}