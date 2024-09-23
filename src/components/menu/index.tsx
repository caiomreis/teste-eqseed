import { SubMenuContent, TesteEqSeedMenuAside } from "./style";
import React, { useEffect } from "react";
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
import useViewSize from "../../hooks/useViewSize";
import { setMenuState } from "../../store/menu_slice";

const TesteEqSeedMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.liquidation);
  const menu_state = useSelector((state: RootState) => state.menu);
  const { dimensions } = useViewSize();

  useEffect(() => {
    if (dimensions.width < 1000) dispatch(setMenuState(false));
  }, [dimensions]);

  return (
    <TesteEqSeedMenuAside $isopen={menu_state.isOpenMenu}>
      <TesteEqSeedMenuButton
        name="Meu portifólio"
        isSelected={"Meu portifólio" === state.selectedPage}
        icon={"savings"}
        click={() => {
          alert("Não disponivel");
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
          alert("Não disponivel");
        }}
      />
    </TesteEqSeedMenuAside>
  );
};

export default TesteEqSeedMenu;
