import styled, { css } from 'styled-components'

import { baseSpacing, baseStyles } from '../Base'
import { FlexProps } from '.'

// 縦横いっぱい
export const fill = css`
  display: flex;
  width: 100%;
  height: 100%;
`

// 縦横いっぱい中央揃え
export const fillCentered = css`
  ${fill};
  align-items: center;
  justify-content: center;
`

// 横いっぱい
export const fillHorizontal = css`
  display: flex;
  width: 100%;
`

// 横いっぱい中央揃え
export const fillHorizontalCentered = css`
  ${fillHorizontal};
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
  fill,
  'fill-centered': fillCentered,
  'fill-horizontal': fillHorizontal,
  'fill-horizontal-centered': fillHorizontalCentered,
  'equal-columns': equalColumns,
  stack,
}

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex: ${props => props.flex || ''};
  flex-basis: ${props => props.flexBasis};
  flex-direction: ${props => props.flexDirection};
  flex-grow: ${props => props.flexGrow || ''};
  flex-shrink: ${props => props.flexShrink};
  flex-wrap: ${props => props.flexWrap};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  gap: ${props => props.gap};

  // layout variants
  ${props => !!props.layout && layoutMap[props.layout]}

  ${baseSpacing}
  ${baseStyles}

  &.flex-hide-scrollbar {
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`
