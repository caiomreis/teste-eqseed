import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OfertasModelResponse } from "../shared/models/ofertas_response.model";

export enum PaymentMethod {
  pix = "Pix",
  ted = "Ted",
}
export interface LiquidationSliceType {
  loading: boolean;
  selectedPage: string;
  state?: OfertasModelResponse[];
  paymentMethod: PaymentMethod;
  liquidationSelected?: OfertasModelResponse;
}

const initialState: LiquidationSliceType = {
  loading: true,
  selectedPage: "Liquidação",
  paymentMethod: PaymentMethod.pix,
};

const liquidation_slice = createSlice({
  name: "liquidation",
  initialState,
  reducers: {
    setSelectedPage(state, action: PayloadAction<string>) {
      state.selectedPage = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setLiquidationState(state, action: PayloadAction<OfertasModelResponse[]>) {
      state.state = action.payload;
    },
    setPaymentMethod(state, action: PayloadAction<PaymentMethod>) {
      state.paymentMethod = action.payload;
    },
    setliquidationSelected(state, action: PayloadAction<OfertasModelResponse>) {
      state.liquidationSelected = action.payload;
    },
  },
});

export const {
  setSelectedPage,
  setLoading,
  setLiquidationState,
  setliquidationSelected,
  setPaymentMethod,
} = liquidation_slice.actions;
export default liquidation_slice.reducer;
