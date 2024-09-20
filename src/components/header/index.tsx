import { TesteEqSeedHeaderContent } from "./style";
import React from "react";
import logo from "../../assets/png/logo_eqseed.png";
import testeeqseed_theme from "../../style/theme_colors";
import TesteIcon from "../testeIcons";
import { RootState, useAppDispatch } from "../../store/store";
import { setMenuState } from "../../store/menu_slice";
import { useSelector } from "react-redux";

const TesteEqSeedHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const menu_state = useSelector((state: RootState) => state.menu);
  return (
    <TesteEqSeedHeaderContent>
      <TesteIcon
        icon={`menu`}
        size={32}
        color={testeeqseed_theme.theme.grey?.light}
        onTap={() => {
          dispatch(setMenuState(!menu_state.isOpenMenu));
        }}
      />
      <img src={logo} alt="" />
    </TesteEqSeedHeaderContent>
  );
};

export default TesteEqSeedHeader;
