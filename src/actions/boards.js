
import axios from "axios";
import { FETCH_BOARDS } from "../constants/boards";


export const fetchBoards = () => (dispatch) => {
  axios
    .get("http://localhost:4200/boards")
    .then((res) => dispatch({ type: FETCH_BOARDS, payload: res.data }));
};
