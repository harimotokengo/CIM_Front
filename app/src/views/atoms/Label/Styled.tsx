import styled, { css } from 'styled-components'

import { baseSpacing, baseStyles } from '../Base'
import { LabelProps } from '.'

export const StyledLabel = styled.label<LabelProps>`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #343a40;

  ${props => props.variant === 'nav' && StyledNavLabel}
  ${props => props.variant === 'icon' && StyledNavItemLabel}

  ${baseSpacing}
  ${baseStyles}
`

const StyledNavLabel = css<LabelProps>`
  > .ch-label {
    color: #343a40;
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
  }
`

const StyledNavItemLabel = css<LabelProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;

  > .ch-label {
    color: #343a40;
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  > .ch-icon {
    width: 21px;
    height: 21px;
    border-radius: 4px;
    margin: 0 8px 0 0;
  }
`
