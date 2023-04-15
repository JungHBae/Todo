import styled from "styled-components";

// list of Styled components
export const VerticalDivider = styled.div`
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 1px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 0.5px;
`;

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 4px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 2px;
  font-size: 20px;
  padding: 0px 10px;
  width: 100vw;
  min-width: 800px;
  max-width: 1200px;
  border-radius: 0 0 5px 5px;
`;
