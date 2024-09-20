import { SubMenuContent, TesteEqSeedMenuAside } from "./style";
import React from "react";
import TesteEqSeedMenuButton from "./components/menu_button";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import {
  PaymentMethod,
  removeAllProofFiles,
  setliquidationSelected,
  setPaymentMethod,
  setSelectedPage,
} from "../../store/ofertas_slice";
import TesteEqSeedSubMenuButton from "./components/sub_menu_button";

const TesteEqSeedMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.liquidation);
  const menu_state = useSelector((state: RootState) => state.menu);
  return (
    <TesteEqSeedMenuAside $isopen={menu_state.isOpenMenu}>
      <TesteEqSeedMenuButton
        name="Meu portifólio"
        isSelected={"Meu portifólio" === state.selectedPage}
        icon={"savings"}
        click={() => {
          dispatch(setSelectedPage("Meu portifólio"));
        }}
      />
      <TesteEqSeedMenuButton
        name="Liquidação"
        isSelected={"Liquidação" === state.selectedPage}
        icon={"sync"}
        click={() => {
          dispatch(setSelectedPage("Liquidação"));
        }}
      />
      <SubMenuContent>
        {!state.loading &&
          state.state?.map((value, i) => (
            <TesteEqSeedSubMenuButton
              key={i}
              isSelected={
                state.liquidationSelected?.nome_oferta === value.nome_oferta
              }
              name={value.nome_oferta}
              click={() => {
                dispatch(setliquidationSelected(value));
                dispatch(setPaymentMethod(PaymentMethod.pix));
                dispatch(removeAllProofFiles());
              }}
            />
          ))}
      </SubMenuContent>
      <TesteEqSeedMenuButton
        name="Meu perfil"
        isSelected={"Meu perfil" === state.selectedPage}
        icon={"person"}
        click={() => {
          dispatch(setSelectedPage("Meu perfil"));
        }}
      />
    </TesteEqSeedMenuAside>
  );
};

export default TesteEqSeedMenu;
