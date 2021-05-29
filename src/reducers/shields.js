import { FETCH_SHIELDS } from "../constants/shields";

const initialState = {
  shields: [],
  shieldsPromo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHIELDS:
      return {
        ...state,
        shields: action.payload,
        shieldsPromo: action.payload.slice(0, 3),
      };
    default:
      return state;
  }
};

export default reducer;
