import axios from "axios";

import { FETCH_BANNERS } from "../constants/banners";

export const fetchBanners = () => (dispatch) => {
  axios
    .get("http://localhost:4200/banners")
    .then((res) => dispatch({ type: FETCH_BANNERS, payload: res.data }))
    .catch((err) => console.error(err));
};
