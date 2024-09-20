import styled from "styled-components";
import testeeqseed_theme from "../../style/theme_colors";

export const IconConteiner = styled.span<{
  $size?: string;
  $color?: string;
}>`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: ${(props) => props.$size ?? "15px"};
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  color: ${(props) => props.$color ?? testeeqseed_theme.theme.black};
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  -moz-osx-font-smoothing: grayscale;

  font-feature-settings: "liga";
`;
