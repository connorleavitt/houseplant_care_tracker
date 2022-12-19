// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#e6ffe6",
    100: "#dcffdc",
    200: "#bae4ba",
    300: "#96bf96",
    400: "#7dc67c",
    500: "#679267",
    600: "#488f48",
    700: "#2f802f",
    800: "#226e22",
    900: "#084e08",
  },
  secondary: {
    50: "#ffe9e3",
    100: "#ffd6cb",
    200: "#ffbaa6",
    300: "#fe987b",
    400: "#fe987b",
    500: "#fe987b",
    600: "#fe987b",
    700: "#af2700",
    800: "#6b1800",
    900: "#330b00",
  },
  water: {
    200: "#d4e8fc",
    500: "#879FB7",
    700: "#00509f",
  },
  sunlight: {
    200: "#f9cb9c",
    500: "#fac442",
    700: "#ffb400",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            secondary: {
              dark: colorTokens.secondary[200],
              main: colorTokens.secondary[500],
              light: colorTokens.secondary[700],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
            water: {
              dark: colorTokens.water[200],
              main: colorTokens.water[500],
              light: colorTokens.water[700],
            },
            sunlight: {
              dark: colorTokens.sunlight[200],
              main: colorTokens.sunlight[500],
              light: colorTokens.sunlight[700],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            secondary: {
              dark: colorTokens.secondary[600],
              main: colorTokens.secondary[500],
              light: colorTokens.secondary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[100],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
            water: {
              dark: colorTokens.water[700],
              main: colorTokens.water[500],
              light: colorTokens.water[200],
            },
            sunlight: {
              dark: colorTokens.sunlight[700],
              main: colorTokens.sunlight[500],
              light: colorTokens.sunlight[200],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
