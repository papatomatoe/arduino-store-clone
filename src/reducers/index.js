import { combineReducers } from "redux";

import environment from "./environment";
import banners from "./banners";
import boards from "./boards";
import shields from "./shields";
import kits from "./kits";
import accessories from "./accessories";
import product from "./product";
import cart from "./cart";

const rootReducer = combineReducers({
  environment,
  banners,
  boards,
  shields,
  kits,
  accessories,
  product,
  cart,
});

export default rootReducer;
