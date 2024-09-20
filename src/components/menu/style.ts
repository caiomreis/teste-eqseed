import styled from "styled-components";
import testeeqseed_theme from "../../style/theme_colors";

export const TesteEqSeedMenuAside = styled.aside<{ $isopen: boolean }>`
  display: flex;
  width: ${(props) => (props.$isopen ? "260px" : "0px")};
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 70vh;
  align-content: center;
  border: ${(props) =>
    props.$isopen
      ? `0.5px solid ${testeeqseed_theme.theme.border_grey_light}`
      : "none"};
  background: ${testeeqseed_theme.theme.background_grey_medium};
  z-index: 99;
  border-radius: 12px;
  transition: 400ms;
  padding: ${(props) => (props.$isopen ? "26px 8px" : "26px 0px")};
  box-sizing: border-box;
`;

export const MenuButton = styled.button<{
  selected: boolean;
}>`
  display: flex;
  height: 64px;
  padding: 8px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  align-self: stretch;
  color: ${(props) =>
    props.selected
      ? testeeqseed_theme.theme.green.medium
      : testeeqseed_theme.theme.green.strong};
  border: none;

  cursor: pointer;
`;
export const SubMenuContent = styled.div`
  width: 100%;
`;

export const SubMenuButton = styled.button<{
  selected: boolean;
}>`
  display: flex;
  padding: 12px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  flex-shrink: 0;
  align-self: stretch;
  overflow: hidden;
  border: none;
  cursor: pointer;
  padding-left: 48px;
  width: 100%;
  min-width: 200px;
  overflow: hidden;
`;
