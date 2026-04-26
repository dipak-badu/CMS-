import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../lib/reducers/cart-reducer";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
