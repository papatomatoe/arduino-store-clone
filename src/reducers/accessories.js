import { FETCH_ACCESSORIES } from "../constants/accessories";

const initialState = {
  accessories: [],
  accessoriesPromo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCESSORIES:
      return {
        ...state,
        accessories: action.payload,
        accessoriesPromo: action.payload.slice(0, 3),
      };
    default:
      return state;
  }
};

export default reducer;
