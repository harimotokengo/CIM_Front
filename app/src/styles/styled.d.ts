interface TextType {
  fontSize: string
  fontWeight?: string
  lineHeight: string
}

interface HeadingType extends TextType {
  mobile: TextType
}

interface ButtonType {
  color: string
  bg: string
  shadow: string
}

interface LabelType {
  color: string
  bg?: string
  border?: string
}

interface CardType {
  color: string
  bg: string
  shadow: string
}

export interface Breakpoints extends Array<string> {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    radii: {
      default: string
      circle: string
    }
    zIndex: {
      navigation: number
      controlMenu: number
      modal: number
    }
    fonts: {
      fontFamily: string
    }
    fontSizes: {
      baseFontSize: string
      fontWeight: string
      h1: HeadingType
      h2: HeadingType
      h3: HeadingType
      h4: HeadingType
      h5: HeadingType
      h6: HeadingType
      large: TextType
      label: TextType
      input: TextType
      note: TextType
    }
    breakpoints: Breakpoints
    mediaQueries: {
      min: BreakpointSizes
      max: BreakpointSizes
    }
    modalSizes: {
      md: {
        width: string
        height: string
      }
      lg: {
        width: string
        height: string
      }
      fullscreen: {
        width: string
        height: string
      }
    }
    matterGenreLabels: {
      0: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
      9: string
      10: string
      11: string
    }
    colors: {
      red: string
      purple: string
      green: string
      greys: {
        black: string
        darkest: string
        darker: string
        dark: string
        main: string
        light: string
        lighter: string
        white: string
      }
      categories: string[]
    }
    global: {
      bg: string
      text: string
      fontSize: string
    }
    shadows: {
      none: string
      small: string
      small2: string
      medium: string
      button: string
      card: string
    }
    icons: {
      cim: LabelType
      name: LabelType
      matterGenre: {
        color: string
        genres: {
          0: Required<Omit<LabelType, 'color' | 'border'>>
          1: Required<Omit<LabelType, 'color' | 'border'>>
          2: Required<Omit<LabelType, 'color' | 'border'>>
          3: Required<Omit<LabelType, 'color' | 'border'>>
          4: Required<Omit<LabelType, 'color' | 'border'>>
          5: Required<Omit<LabelType, 'color' | 'border'>>
          6: Required<Omit<LabelType, 'color' | 'border'>>
          7: Required<Omit<LabelType, 'color' | 'border'>>
          8: Required<Omit<LabelType, 'color' | 'border'>>
          9: Required<Omit<LabelType, 'color' | 'border'>>
          10: Required<Omit<LabelType, 'color' | 'border'>>
          11: Required<Omit<LabelType, 'color' | 'border'>>
        }
      }
    }
    buttons: {
      primaryRed: ButtonType
      primaryGreen: ButtonType
      primaryEdit: ButtonType
      secondary: ButtonType
    }
    card: CardType
    label: LabelType
    input: LabelType
  }
}
