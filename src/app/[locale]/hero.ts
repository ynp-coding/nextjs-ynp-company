// hero.ts
import { heroui } from "@heroui/react";

export default heroui({
  prefix: "heroui",
  defaultTheme: "light",
  addCommonColors: true,
  themes: {
    light: {
      colors: {
        background: "#FFFFFF",
        foreground: "#11181C",
        primary: {
          foreground: "#FFFFFF",
          DEFAULT: "#006FEE",
        },
      },
    },
    dark: {
      colors: {
        background: "#000000",
        foreground: "#ECEDEE",
        primary: {
          foreground: "#FFFFFF",
          DEFAULT: "#006FEE",
        },
      },
    },
  },
});
