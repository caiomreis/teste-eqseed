import styled from "styled-components";
import testeeqseed_theme from "../../../../../../style/theme_colors";

export const LiquidationContentHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: start;

  .title_field {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 500px;
  }
  .content_values {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
export const LiquidationHeaderValues = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  border: 0.5px solid ${testeeqseed_theme.theme.border_grey_light};
  border-radius: 12px;
  width: 100%;
  max-width: 450px;
  .values {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    background-color: ${testeeqseed_theme.theme.background_grey_medium};
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  .date {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: ${testeeqseed_theme.theme.green.strong};
    padding: 12px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;
