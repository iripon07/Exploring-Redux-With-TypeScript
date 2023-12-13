import { IProduct } from '@/types/globalTypes';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
}
const initialState: ICart = {
  products: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.products.find((product)  => product._id === action.payload._id)
      if(existingProduct){
        existingProduct.quantity = existingProduct.quantity! +1
console.log('Testing for existing product');
      }else{
      state.products.push({...action.payload, quantity: 1});
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
