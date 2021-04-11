import { LOGIN, LOGOUT } from "../constants/environment";

const initialState = {
  isLoggedIn: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };

    case LOGOUT:
      return { ...state, isLoggedIn: false };

    default:
      return state;
  }
};

export default reducer;
