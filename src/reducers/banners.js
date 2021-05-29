import { FETCH_BANNERS } from "../constants/banners";

const initialState = {
  banners: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BANNERS:
      return { ...state, banners: action.payload };
    default:
      return state;
  }
};

export default reducer;
