import { theme as defaultTheme } from "@chakra-ui/core"

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
  },
  fonts: {
    ...defaultTheme.fonts,
    body: "ITC Franklin Gothic Std Book",
    heading: "Franklin Gothic Std Condensed, sans-serif",
  },
}

export default theme
