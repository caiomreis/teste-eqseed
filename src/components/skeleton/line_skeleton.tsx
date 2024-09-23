import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import testeeqseed_theme from "../../style/theme_colors";
const LineSkeleton: React.FC<{
  width: number | string;
  height: number;
}> = ({ width, height }) => {
  return (
    <Skeleton
      height={height}
      width={width}
      baseColor={testeeqseed_theme.theme.green.light}
      highlightColor={testeeqseed_theme.theme.green.strong}
    />
  );
};

export default LineSkeleton;
