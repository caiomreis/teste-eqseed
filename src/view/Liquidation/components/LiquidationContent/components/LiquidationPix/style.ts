import styled from "styled-components";
import testeeqseed_theme from "../../../../../../style/theme_colors";

export const LiquidationPixContent = styled.div<{ $isselected: boolean }>`
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
  .qr_code {
    padding: 22px 12px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    background-color: ${testeeqseed_theme.theme.white};
  }
  .copy_button {
    border: 0.5px solid ${testeeqseed_theme.theme.grey.strong};
    background-color: transparent;
    border-radius: 12px;
    width: 100%;
    padding: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    max-width: 350px;
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
