import styled, { css } from 'styled-components'

import { baseSpacing, baseStyles } from '../Base'
import { FlexProps } from '.'

export const fillSpace = css`
  display: flex;
  width: 100%;
  height: 100%;
`

export const fillSpaceHorizontal = css`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const fillSpaceCentered = css`
  ${fillSpace};
  align-items: center;
  justify-content: center;
`

export const equalColumns = css`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  > * {
    flex-grow: 1;
    flex-basis: 50%;
  }
`

export const stack = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    width: 100%;
  }
`

const layoutMap = {
  'fill-space': fillSpace,
  'fill-space-horizontal': fillSpaceHorizontal,
  'fill-space-centered': fillSpaceCentered,
  'equal-columns': equalColumns,
  stack,
}

export const StyledFlex = styled.div<FlexProps>`
  align-items: ${props => props.alignItems};
  display: ${props => (props.container ? 'flex' : 'block')};
  flex: ${props => props.flex || ''};
  flex-basis: ${props => props.flexBasis};
  flex-direction: ${props => props.flexDirection};
  flex-grow: ${props => props.flexGrow || ''};
  flex-shrink: ${props => props.flexShrink};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
  gap: ${props => props.gap};

  // layout variants
  ${props => !!props.layout && layoutMap[props.layout]}

  ${baseSpacing}
  ${baseStyles}
`
