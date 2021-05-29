import axios from "axios";
import { FETCH_KITS } from "../constants/kits";

export const fetchKits = () => (dispatch) => {
  axios
    .get("http://localhost:4200/kits")
    .then((res) => dispatch({ type: FETCH_KITS, payload: res.data }))
    .catch((err) => console.error(err));
};
