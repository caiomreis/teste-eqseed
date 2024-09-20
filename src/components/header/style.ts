import styled from "styled-components";
import testeeqseed_theme from "../../style/theme_colors";

export const TesteEqSeedHeaderContent = styled.header`
  background-color: ${testeeqseed_theme.theme.white};
  height: 64px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 0px 24px;
  border-bottom: 1px solid ${testeeqseed_theme.theme.border_grey_light};
  span {
    cursor: pointer;
  }
  box-sizing: border-box;
`;
