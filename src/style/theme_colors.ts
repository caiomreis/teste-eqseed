import { ThemePallete } from "../shared/models/theme_colors.model";

export class ThemeControler {
  theme: ThemePallete = {
    green: {
      light: "#cfe4d5",
      medium: "#009413",
      strong: "#015047",
    },
    grey: {
      light: "#707070",
      medium: "#3b3b3b",
      strong: "#212121",
    },
    background_grey_light: "#f5f7f9",
    background_grey_medium: "#eef2f5",
    border_grey_light: "#dbdfe0",
    white: "#fff",
    black: "#000",
  };
}

const testeeqseed_theme = new ThemeControler();

export default testeeqseed_theme;
