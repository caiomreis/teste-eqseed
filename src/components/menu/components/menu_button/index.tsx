import React from "react";
import { MenuButton } from "./style";
import TesteIcon from "../../../testeIcons";
import testeeqseed_theme from "../../../../style/theme_colors";
import { Body2 } from "../../../text/body/style";

const TesteEqSeedMenuButton: React.FC<{
  isSelected: boolean;
  name: string;
  icon: string;
  notification_number?: number;
  click: () => void;
}> = ({ isSelected, name, icon, click, notification_number }) => {
  return (
    <MenuButton selected={isSelected} onClick={click}>
      <div className="content">
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
      </div>

      {notification_number && (
        <div className="number_content">
          <Body2 fontWeight={700} color="red">
            {notification_number}
          </Body2>
        </div>
      )}
    </MenuButton>
  );
};

export default TesteEqSeedMenuButton;
