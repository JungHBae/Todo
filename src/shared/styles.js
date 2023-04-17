import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  *{
    color: ${({ theme }) => theme.textColor};
  }
  a{
    color: ${({ theme }) => theme.textColor};
  }
  input{
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
  }
  textarea {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

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

export const StyledThemeButton = styled.button`
  background-color: transparent;
  padding: 10px;
`;
export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px, rgba(0, 0, 0, 0.1) 0px 6px 6px;
  font-size: 20px;
  padding: 0px 10px;
  width: 90%;
  min-width: 800px;
  max-width: 1200px;
  border-radius: 0 0 5px 5px;
`;
export const lightTheme = {
  backgroundColor: "#fff",
  textColor: "#333",
};

export const darkTheme = {
  backgroundColor: "#2c2c2c",
  textColor: "#fff",
};
