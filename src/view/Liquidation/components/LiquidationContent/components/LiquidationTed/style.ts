import styled from "styled-components";
import testeeqseed_theme from "../../../../../../style/theme_colors";

export const LiquidationTedContent = styled.div<{ $isselected: boolean }>`
  border-radius: 12px;
  height: 100%;
  border: 0.5px solid
    ${(prorps) =>
      prorps.$isselected
        ? testeeqseed_theme.theme.border_grey_light
        : testeeqseed_theme.theme.grey.medium};
  .content {
    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    width: 100%;
    overflow: hidden;
    height: ${(props) => (props.$isselected ? "252px" : "0px")};
    transition: 400ms;
    background-color: ${testeeqseed_theme.theme.white};
  }

  .header {
    border-radius: ${(props) => (props.$isselected ? "0px" : "12px")};
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    background-color: ${(props) =>
      props.$isselected
        ? testeeqseed_theme.theme.grey.strong
        : testeeqseed_theme.theme.white};

    padding: ${(props) => (props.$isselected ? " 8px 16px" : " 16px 32px")};
    cursor: pointer;
    transition: 400ms;
  }
  .ted_info {
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    background-color: ${testeeqseed_theme.theme.white};
    max-width: 360px;
    margin: 0 auto;
    b {
      color: ${testeeqseed_theme.theme.green.strong};
      font-weight: 600;
      text-decoration: underline;
    }
    ul {
      margin: 0px;
    }
  }

  .paymantInfos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background-color: ${testeeqseed_theme.theme.background_grey_medium};
  }
`;
export const PaymentInfosContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  justify-content: center;
  height: 80px;
  padding: 0px 0px 0px 40px;
`;
