import { FETCH_BOARDS } from "../constants/boards";

const initialState = {
  boards: [],
  boardsPromo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      return {
        ...state,
        boards: action.payload,
        boardsPromo: action.payload.slice(0, 3),
      };
    default:
      return state;
  }
};

export default reducer;
