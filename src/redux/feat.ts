const initialCartState = {
  noOfItemInCart: 0,
  cart: [],
};

// NOTE:
// It is important to pass an initial state as default to
// the state parameter to handle the case of calling
// the reducers for the first time when the
// state might be undefined

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        noOfItemInCart: state.noOfItemInCart + 1,
        cart: [...state.cart, action.payload],
      };
    case 'DELETE_ITEM_FROM_CART':
      return {
        // Remaining logic
      };
    default:
      return state;
  } // Important to handle the default behaviour
}; // either by returning the whole state as it is
// or by performing any required logic
