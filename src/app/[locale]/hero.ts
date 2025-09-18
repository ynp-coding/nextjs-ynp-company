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
        default: {
          foreground: "#11181C",
        },
      },
    },
    dark: {
      colors: {
        background: "#11181C",
        foreground: "#F5F5F5",
        default: {
          foreground: "#F5F5F5",
        },
      },
    },
    contrast: {
      extend: "dark",
      colors: {
        background: "#000000",
        foreground: "#FFFF00",
        default: {
          foreground: "#FFFF00",
        },
      },
    },
  },
});
