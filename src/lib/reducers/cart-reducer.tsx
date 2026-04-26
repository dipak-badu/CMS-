import { createSlice } from "@reduxjs/toolkit";

const CartSlicer = createSlice({
  name: "cart",
  initialState: {
    cartDetail: null,
  } as { cartDetail: null | Array<{ proudctId: number; quantity: number }> },
  reducers: {
    // actions , methods , functions
    // cannot create async function  so no await
  },
});

export const {} = CartSlicer.actions;

export default CartSlicer.reducer;
