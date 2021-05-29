import { FETCH_PRODUCT } from "../constants/product";

const initialState = {
  product: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

export default reducer;
