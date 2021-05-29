import axios from "axios";
import { FETCH_ACCESSORIES } from "../constants/accessories";

export const fetchAccessories = () => (dispatch) => {
  axios
    .get("http://localhost:4200/accessories")
    .then((res) => dispatch({ type: FETCH_ACCESSORIES, payload: res.data }))
    .catch((err) => console.error(err));
};
