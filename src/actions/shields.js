import axios from "axios";

import { FETCH_SHIELDS } from "../constants/shields";

export const fetchShields = () => (dispatch) => {
    axios
        .get("http://localhost:4200/shields")
        .then((res) => dispatch({ type: FETCH_SHIELDS, payload: res.data }));
};