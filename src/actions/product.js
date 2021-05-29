import axios from "axios";

import { FETCH_PRODUCT } from "../constants/product";

export const fetchProduct = (productName) => (dispatch) => {
  axios
    .get(`http://localhost:4200/${productName}`)
    .then((res) => dispatch({ type: FETCH_PRODUCT, payload: res.data }))
    .catch((error) => console.error(error));
};
