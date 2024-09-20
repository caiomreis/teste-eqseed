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
  files: FilesModel[];
}
export interface FilesModel {
  path: string;
  name: string;
  lastModified: number;
  lastModifiedDate: string;
  webkitRelativePath: string;
  type: string;
  size: number;
}

const initialState: LiquidationSliceType = {
  loading: true,
  selectedPage: "Liquidação",
  paymentMethod: PaymentMethod.pix,
  files: [],
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
    setProofFiles(state, action: PayloadAction<FilesModel>) {
      if (
        state.files.filter((el) => action.payload.name === el.name).length === 0
      ) {
        state.files.push(action.payload);
      }
    },
    removeProofFiles(state, action: PayloadAction<string>) {
      state.files = state.files.filter((el) => action.payload !== el.name);
    },
    removeAllProofFiles(state) {
      state.files = [];
    },
  },
});

export const {
  setSelectedPage,
  setLoading,
  setLiquidationState,
  setliquidationSelected,
  setPaymentMethod,
  setProofFiles,
  removeProofFiles,
  removeAllProofFiles,
} = liquidation_slice.actions;
export default liquidation_slice.reducer;
