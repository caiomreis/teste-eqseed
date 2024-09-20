import { useSelector } from "react-redux";
import TesteEqSeedMenu from "../../components/menu";
import useLiquidation from "../../hooks/useLiquidaton";
import { RootState } from "../../store/store";
import LiquidationContent from "./components/LiquidationContent";
import { LiquidationContainer } from "./style";
import React, { useEffect } from "react";

const LiquidationView: React.FC = () => {
  const { getLiquidations } = useLiquidation();
  const menu_state = useSelector((state: RootState) => state.menu);
  useEffect(() => {
    getLiquidations();
  }, []);
  return (
    <LiquidationContainer $isopenmenu={menu_state.isOpenMenu}>
      <TesteEqSeedMenu />
      <LiquidationContent />
    </LiquidationContainer>
  );
};

export default LiquidationView;
