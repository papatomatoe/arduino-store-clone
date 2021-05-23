import { FETCH_BOARDS } from "../constants/boards";

const initialState = {
  boards: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      const boards = action.payload.map((board) => ({
        id: board.id,
        title: board.title,
        description: board.description,
        image: board.images.list,
        price: board.price,
        link: board.link || "boards",
      }));

      return { ...state, boards };
    default:
      return state;
  }
};

export default reducer;
