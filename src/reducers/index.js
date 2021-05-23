import { combineReducers } from "redux";

import environment from "./environment";
import boards from "./boards";

const rootReducer = combineReducers({
  environment,
  boards,
});

export default rootReducer;
