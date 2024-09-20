import { Action, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import liquidationReducer from "./ofertas_slice";
import menuReducer from "./menu_slice";
export const store = configureStore({
  reducer: { liquidation: liquidationReducer, menu: menuReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
