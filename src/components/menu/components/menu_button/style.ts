import styled from "styled-components";
import testeeqseed_theme from "../../../../style/theme_colors";

export const MenuButton = styled.button<{
  selected: boolean;
}>`
  display: flex;
  height: 44px;
  padding: 0px 16px;
  flex-direction: row;
  justify-content: space-between;
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
  .content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .number_content {
    text-align: center;
    background-color: ${testeeqseed_theme.theme.white};
    padding: 1px 16px;
    border-radius: 15px;
    position: relative;
    float: left;
  }
  .number_content::after {
    content: " ";
    background: red;
    width: 10px;
    height: 10px;
    padding: 0.5px;
    position: absolute;
    border-radius: 100%;
    bottom: -2px;
    right: -1px;
  }
`;
