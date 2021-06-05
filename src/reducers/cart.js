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

      const newProducts =
        idx === -1
          ? [...products, { ...product, qty: 1 }]
          : [
              ...products.slice(0, idx),
              { ...products[idx], qty: (products[idx].qty += 1) },
              ...products.slice(idx + 1),
            ];
      return { ...state, products: newProducts };
    default:
      return state;
  }
};

export default reducer;
