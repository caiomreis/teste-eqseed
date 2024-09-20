import styled from "styled-components";
import testeeqseed_theme from "../../../../../../style/theme_colors";

export const QuestionsAndSuggestionsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .green_card {
    height: 170px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: ${testeeqseed_theme.theme.green.strong};
    border-radius: 12px;
    padding: 15px 20px;
    box-sizing: border-box;
    justify-content: flex-end;
  }
  .green_card a {
    background-color: #34736c;
    padding: 8px 25px;
    box-sizing: border-box;
    border-radius: 24px;
    color: ${testeeqseed_theme.theme.white};
    text-decoration: none;
  }
  .grey_card {
    height: 170px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: ${testeeqseed_theme.theme.white};
    border-radius: 12px;
    padding: 15px 20px;
    box-sizing: border-box;
    justify-content: flex-end;
    border: 1.5px solid ${testeeqseed_theme.theme.border_grey_light};
  }
  .grey_card a {
    background-color: ${testeeqseed_theme.theme.background_grey_medium};
    padding: 8px 20px;
    box-sizing: border-box;
    border-radius: 24px;
    color: ${testeeqseed_theme.theme.green.strong};
    text-decoration: none;
  }

  @media screen and (max-width: 1000px) {
    .content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
    }
  }
`;
