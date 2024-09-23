import styled from "styled-components";

export const LiquidationContainer = styled.div<{ $isopenmenu: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isopenmenu ? "260px 1fr" : "0px 1fr"};
  grid-template-rows: 1fr;
  align-items: start;
  justify-content: center;
  gap: ${(props) => (props.$isopenmenu ? "24px" : "0px")};
  transition: 400ms;
  justify-items: start;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
