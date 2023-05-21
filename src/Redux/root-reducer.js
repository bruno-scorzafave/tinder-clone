import { combineReducers } from "redux";

import pageReducer from './Page/reducer'
import messageReducer from './Message/reducer'

const rootReducer = combineReducers({ pageReducer, messageReducer });

export default rootReducer;
