import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  // prevent jumping scrollbar
  html { margin-left: calc(100vw - 100%); } 

  // Apply global theme
  
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    transition: background-color 0.3s ease, color 0.5s ease;
  }
  body {
  transition: all 0.5s ease;
}

  a{
    color: ${({ theme }) => theme.textColor};
  }
  input{
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.3s ease, color 0.5s ease;
  }
  textarea {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.3s ease, color 0.5s ease;
  }
  header{
    background-color: ${({ theme }) => theme.headerColor};
    
    transition: background-color 0.3s ease;
  }
  .taskcard li {
    background-color: ${({ theme }) => theme.cardColor};
  }
  .addtask{
    background-color: ${({ theme }) => theme.dropdownField};
  }
  .header-style h3{
    color: #fff;
  }
  .dropdown-trigger{
    background-color:  ${({ theme }) => theme.dropdownButton};
    color: ${({ theme }) => theme.textColor};
  }
  .details-taskcard{
    background-color: ${({ theme }) => theme.cardColor};
  }
  .details .status{
    color: ${({ theme }) => theme.textColor};
    font-weight: 500;

  }

  // global button settings
  button {
    padding: 5px 10px;
    border: 0px;
    border-radius: 5px;
    color: #ffffff;
    transition: filter 0.15s ease-in-out;
  }
  button:hover {
    filter: brightness(120%);
  }

  // basic css reset
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  input:focus {
    outline: none;
  }
  span {
  font-size: 20px;
  font-weight: bold;
}


// scrollbar style edit
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}

`;

// list of Styled components
// column dividing line
export const VerticalDivider = styled.div`
  margin: 10px;
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 1px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 0.5px; */
`;

//Layout wrapper
export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

// dark/light theme button
export const StyledThemeButton = styled.button`
  position: absolute;
  background-color: transparent;
  left: 20px;
  top: 15px;
  z-index: 99;
`;
export const StyledReusableButton = styled.button`
  padding: 5px 10px;
  border: 0px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  transition: filter 0.15s ease-in-out 0s;
  background-color: ${({ btnColor }) => btnColor};
`;
// Header styled-component
export const StyledHeader = styled.header`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 5px;
  padding: 0px 10px;
  font-size: 20px;
  height: 70px;
  width: 95vw;
  top: 0;
  max-width: 1200px;
  min-width: 800px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px, rgba(0, 0, 0, 0.1) 0px 6px 6px;
  z-index: 9;
`;
