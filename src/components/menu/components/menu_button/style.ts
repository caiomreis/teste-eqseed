import styled from "styled-components";
import testeeqseed_theme from "../../../../style/theme_colors";

export const MenuButton = styled.button<{
  selected: boolean;
}>`
  display: flex;
  height: 44px;
  padding: 0px 16px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  width: 100%;
  color: ${(props) =>
    props.selected
      ? testeeqseed_theme.theme.green?.strong
      : testeeqseed_theme.theme.grey?.strong};
  font-weight: 600;
  border: none;
  background: ${(props) =>
    props.selected ? testeeqseed_theme.theme.green?.light : "transparent"};
  border-radius: 8px;
  cursor: pointer;
  min-width: 200px;
  overflow: hidden;
`;
