import React from "react";
import { SubMenuButton } from "../style";
import { Body3 } from "../../text/body/style";
import testeeqseed_theme from "../../../style/theme_colors";

const TesteEqSeedSubMenuButton: React.FC<{
  isSelected: boolean;
  name: string;
  click: () => void;
}> = ({ isSelected, name, click }) => {
  return (
    <SubMenuButton selected={isSelected} onClick={click}>
      <Body3
        fontWeight={isSelected ? 400 : 600}
        color={
          isSelected
            ? testeeqseed_theme.theme.green.medium
            : testeeqseed_theme.theme.green.strong
        }
      >
        {name}
      </Body3>
    </SubMenuButton>
  );
};

export default TesteEqSeedSubMenuButton;
