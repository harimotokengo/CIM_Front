import { hexTorgba } from '../utils/style'
import defaultTheme from './default'

const colors = {
  red: '#F94144',
  purple: '#A167BC',
  green: '#17A2B8',
  greys: {
    black: '#000000',
    darkest: '#343A40',
    darker: '#39434D',
    dark: '#A4A4A4',
    main: '#BFC9D23',
    light: '#C2CFE0',
    lighter: '#DEDEDE',
    white: '#ffffff',
  },
  categories: [
    '#C2CFE0', // 分
    '#FF7070', // 離
    '#FC693B', // 労
    '#2070B9', // 刑
    '#FFC93D', // 債
    '#55C6BF', // 交
    '#3ABD96', // 相
    '#21928E', // 民
    '#026088', // 顧
    '#026088', // 法
    '#FFC93D', // 知
    '#026088', // 個
  ],
}

const global = {
  bg: colors.greys.white,
  text: colors.greys.darkest,
  fontSize: defaultTheme.fontSizes.baseFontSize,
}

const shadows = {
  none: 'none',
  small: `0 -4px 8px ${hexTorgba(colors.greys.black, 0.04)}`,
  small2: `8px 0 19px ${hexTorgba(colors.greys.black, 0.06)}`,
  medium: `0 16px 48px ${hexTorgba(colors.greys.black, 0.176)}`,
  button: `2px 2px 10px ${hexTorgba(colors.greys.black, 0.045)}`,
  card: `2px 2px 10px ${hexTorgba(colors.greys.black, 0.045)}`,
}

const icons = {
  cim: {
    color: colors.red,
  },
  name: {
    color: colors.greys.white,
    bg: colors.purple,
  },
  matterGenre: {
    color: colors.greys.white,
    genres: {
      0: {
        bg: colors.categories[0],
      },
      1: {
        bg: colors.categories[1],
      },
      2: {
        bg: colors.categories[2],
      },
      3: {
        bg: colors.categories[3],
      },
      4: {
        bg: colors.categories[4],
      },
      5: {
        bg: colors.categories[5],
      },
      6: {
        bg: colors.categories[6],
      },
      7: {
        bg: colors.categories[7],
      },
      8: {
        bg: colors.categories[8],
      },
      9: {
        bg: colors.categories[9],
      },
      10: {
        bg: colors.categories[10],
      },
      11: {
        bg: colors.categories[11],
      },
    },
  },
}

const buttons = {
  primaryRed: {
    color: colors.greys.white,
    bg: colors.red,
    shadow: shadows.button,
  },
  primaryGreen: {
    color: colors.greys.white,
    bg: colors.green,
    shadow: shadows.button,
  },
  primaryEdit: {
    color: colors.greys.white,
    bg: colors.greys.light,
    shadow: shadows.button,
  },
  secondary: {
    color: colors.greys.white,
    bg: colors.greys.lighter,
    shadow: shadows.button,
  },
}

const card = {
  color: colors.greys.darkest,
  bg: colors.greys.white,
  shadow: shadows.card,
}

const label = {
  color: colors.greys.darker,
}

const input = {
  color: colors.greys.darkest,
  border: `1px solid ${colors.greys.lighter}`,
}

export const lightTheme = {
  name: 'Light Theme',
  shadows,
  colors,
  global,
  icons,
  buttons,
  card,
  label,
  input,
  ...defaultTheme,
}

export default lightTheme
