import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenMenu: true,
};

const menu_slice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuState(state, action: PayloadAction<boolean>) {
      state.isOpenMenu = action.payload;
    },
  },
});

export const { setMenuState } = menu_slice.actions;
export default menu_slice.reducer;
