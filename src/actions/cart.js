import { ADD_TO_CART } from "../constants/cart";

export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
