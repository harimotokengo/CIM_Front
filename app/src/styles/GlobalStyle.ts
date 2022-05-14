/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createGlobalStyle } from 'styled-components'

import { StyledReset } from './StyledReset'

const GlobalStyles = createGlobalStyle`
  ${StyledReset};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: ${props => props.theme.fontSizes.baseFontSize};
    font-family: ${props => props.theme.fonts.fontFamily};
    background-color: ${props => props.theme.global.bg};
    color: ${props => props.theme.colors.greys.darkest};
    min-height: 100%;
  }
  body {
    overflow-y: hidden;
  }
  li {
    list-style: none;
  }
`

export default GlobalStyles
