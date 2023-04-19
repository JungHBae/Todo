export const LIGHT_THEME = "LIGHT_THEME";
export const DARK_THEME = "DARK_THEME";
export const TOGGLE_THEME = "TOGGLE_THEME";

const lightTheme = {
  backgroundColor: "#fff",
  textColor: "#333",
};
const darkTheme = {
  backgroundColor: "#2c2c2c",
  textColor: "#fff",
};
const notebookTheme = {
  backgroundColor: "#F8ECC2",
  textColor: "#fff",
};

// set Dark theme as default
const initialTheme = {
  theme: lightTheme,
  themeName: LIGHT_THEME,
};

// toggle Light/Dark mode on call
export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  };
};

//Theme reducer to toggle light and dark mode
function themeReducer({ theme, themeName } = initialTheme, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      if (themeName === LIGHT_THEME) {
        return {
          themeName: DARK_THEME,
          theme: darkTheme,
        };
      } else if (themeName === DARK_THEME) {
        return {
          themeName: LIGHT_THEME,
          theme: lightTheme,
        };
      }
      return { theme, themeName };

    default:
      return { theme, themeName };
  }
}

export default themeReducer;
