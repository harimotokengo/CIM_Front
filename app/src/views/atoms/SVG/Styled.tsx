import SVG from 'react-inlinesvg'
import styled from 'styled-components'

import { SVGProps } from '.'

export const StyledSVG = styled(SVG)<SVGProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  & path {
    fill: ${({ color }) => color};
  }
`
