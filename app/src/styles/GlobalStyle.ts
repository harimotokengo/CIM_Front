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
    font-size: 16px;
    font-family: 'Noto Sans JP', sans-serif;
    background-color: #ffffff;
    color: #343A40;
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
