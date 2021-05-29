import { FETCH_KITS } from "../constants/kits";

const initialState = {
  kits: [],
  kitsPromo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_KITS:
      return {
        ...state,
        kits: action.payload,
        kitsPromo: action.payload.slice(0, 3),
      };
    default:
      return state;
  }
};

export default reducer;
