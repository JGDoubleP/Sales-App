import { useFonts } from 'expo-font';

const COLORS = {
  Saving_Blue: "#252F9C",
  Saving_Red: "#ED4B49",
  Saving_Green: "#01AB6C",
  Saving_Gray: "#646464",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const FONT = {
  regular: "Proxima Nova Regular",
  header: "DM Sans",
  display: "Roboto",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 17,
  large: 20,
  xLarge: 24,
  xxLarge: 34,
};



const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
