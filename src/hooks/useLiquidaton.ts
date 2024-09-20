import { useAppDispatch } from "../store/store";
import { Liquidation_Http_Client } from "../gateways/repo/liquidation_htto_client";
import {
  setliquidationSelected,
  setLiquidationState,
  setLoading,
} from "../store/ofertas_slice";

const useLiquidation = () => {
  const dispatch = useAppDispatch();
  const liquidationHtto = new Liquidation_Http_Client();
  const getLiquidations = async () => {
    dispatch(setLoading(true));
    try {
      const response = await liquidationHtto.getListContratada();
      dispatch(setLiquidationState(response));
      dispatch(setliquidationSelected(response[0]));
    } catch (e) {
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    getLiquidations,
  };
};
export default useLiquidation;
