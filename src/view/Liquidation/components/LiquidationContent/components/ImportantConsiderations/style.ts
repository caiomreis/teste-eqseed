import styled from "styled-components";

export const ImportantConsiderationsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 0px;
  align-items: start;

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 50px;
    align-items: start;
  }
`;

export const ConsiderationsContent = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  max-width: 260px;
`;
