import { createSlice } from "@reduxjs/toolkit";

export const LIGHT_THEME = "LIGHT_THEME";
export const DARK_THEME = "DARK_THEME";

const lightTheme = {
  backgroundColor: "#fff",
  textColor: "#333",
};
const darkTheme = {
  backgroundColor: "#2c2c2c",
  textColor: "#fff",
};
// const notebookTheme = {
//   backgroundColor: "#F8ECC2",
//   textColor: "#96351e",
// };

// set Dark theme as default
const initialState = {
  theme: lightTheme,
  themeName: LIGHT_THEME,
};

const themeSlice = createSlice({
  name: "themeReducer",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.themeName === LIGHT_THEME) {
        return {
          themeName: DARK_THEME,
          theme: darkTheme,
        };
      } else if (state.themeName === DARK_THEME) {
        return {
          themeName: LIGHT_THEME,
          theme: lightTheme,
        };
      }
      return state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
