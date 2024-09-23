import styled from "styled-components";
import testeeqseed_theme from "../../../../../../style/theme_colors";

export const PaymentProofContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
  .div_input {
    background-color: ${testeeqseed_theme.theme.white};
    border: solid 1px ${testeeqseed_theme.theme.green.strong};
    border-radius: 12px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    min-height: 300px;
  }
  @media screen and (max-width: 1000px) {
  }
`;

export const NoFileDropedContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  padding: 12px;
  box-sizing: border-box;
  .text_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }
  .no_file_text {
    text-align: center;
  }
  button {
    background-color: ${testeeqseed_theme.theme.green.strong};
    border: none;
    border-radius: 12px;
    width: 250px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    height: 50px;
    gap: 12px;
  }
  @media screen and (max-width: 1000px) {
    .text_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      justify-content: center;
    }
  }
`;
export const LeaveFileContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  .text_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }
  .drop_file_text {
    text-align: center;
  }

  @media screen and (max-width: 1000px) {
  }
`;
export const WithFileContent = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 40px;
  padding: 16px;
  box-sizing: border-box;
  width: 100%;

  .header {
    display: flex;
    flex-direction: column;
  }
  .file_content {
    display: flex;
    gap: 8px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
  }
  .drop_file_text {
    text-align: center;
  }
  .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 19px;
  }

  button.green {
    background-color: ${testeeqseed_theme.theme.green.strong};
    border: none;
    border-radius: 12px;
    width: 250px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    height: 50px;
    gap: 12px;
    cursor: pointer;
  }
  button.grey {
    background-color: ${testeeqseed_theme.theme.background_grey_medium};
    border: none;
    border-radius: 12px;
    width: 250px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    height: 50px;
    gap: 12px;
    border: solid 1px ${testeeqseed_theme.theme.green.strong};
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    .buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex-wrap: nowrap;
      gap: 19px;
    }
  }
`;

export const FileCardContet = styled.div`
  width: 100%;

  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 4px;
  padding: 2px 8px;
  box-sizing: border-box;
  flex-wrap: nowrap;
  cursor: pointer;
  background-color: ${testeeqseed_theme.theme.background_grey_medium};
  border: solid 1px ${testeeqseed_theme.theme.border_grey_light};
  .text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
`;
