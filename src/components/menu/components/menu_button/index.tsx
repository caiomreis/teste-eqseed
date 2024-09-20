import React from "react";
import { MenuButton } from "./style";
import TesteIcon from "../../../testeIcons";
import testeeqseed_theme from "../../../../style/theme_colors";

const TesteEqSeedMenuButton: React.FC<{
  isSelected: boolean;
  name: string;
  icon: string;
  click: () => void;
}> = ({ isSelected, name, icon, click }) => {
  return (
    <MenuButton selected={isSelected} onClick={click}>
      <TesteIcon
        icon={icon}
        size={20}
        color={
          isSelected
            ? testeeqseed_theme.theme.green?.strong
            : testeeqseed_theme.theme.grey?.strong
        }
      />

      {name}
    </MenuButton>
  );
};

export default TesteEqSeedMenuButton;
