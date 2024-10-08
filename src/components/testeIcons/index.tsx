import React from "react";

import { IconConteiner } from "./style";

const TesteIcon: React.FC<{
  icon?: string;
  size?: number;
  color?: string;
  onTap?: () => void;
}> = ({ icon, size, color, onTap }) => {
  return (
    <IconConteiner
      className="material-icons"
      $size={size + "px"}
      $color={color}
      onClick={() => {
        if (onTap) onTap();
      }}
    >
      {icon}
    </IconConteiner>
  );
};

export default TesteIcon;
