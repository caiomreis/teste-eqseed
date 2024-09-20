import styled from "styled-components";
import testeeqseed_theme from "../../../../style/theme_colors";

export const LiquidationContentContainer = styled.div`
  display: flex;
  border: 0.5px solid ${testeeqseed_theme.theme.border_grey_light};
  border-radius: 12px;
  padding: 24px;
  flex-direction: column;
  gap: 24px;
  background-color: ${testeeqseed_theme.theme.background_grey_light};
  background: linear-gradient(
    0deg,
    ${testeeqseed_theme.theme.background_grey_light} 64%,
    ${testeeqseed_theme.theme.white} 65%
  );
  width: 100%;
  box-sizing: border-box;
  .under {
    text-decoration: underline;
  }

  .line {
    border-bottom: 0.5px solid ${testeeqseed_theme.theme.border_grey_light};
    width: 100%;
  }
`;
