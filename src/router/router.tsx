import { Routes, Route } from "react-router";
import LiquidationPage from "../view/Liquidation";

export const TesteEqSeedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LiquidationPage />} />
    </Routes>
  );
};
