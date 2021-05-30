import { combineReducers } from "redux";

import environment from "./environment";
import boards from "./boards";
import shields from "./shields";
const rootReducer = combineReducers({
  environment,
  boards,
  shields,
});

export default rootReducer;
