import { ADD_TO_CART } from "../constants/cart";
const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const cloneState = { ...state };
      const product = action.payload;

      const products = cloneState.products;

      const idx = products.findIndex((item) => item.id === product.id);

      if (idx === -1) {
        product.qty = 1;
        products.push(product);
      } else {
        products.map((el, i) =>
          i === idx ? { ...el, qty: (el.qty += 1) } : el
        );
      }

      return { ...state, products };
    default:
      return state;
  }
};

export default reducer;
