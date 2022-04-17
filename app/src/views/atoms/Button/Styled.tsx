import styled, { css } from 'styled-components'

import { baseSpacing, baseStyles } from '../Base'
import { ButtonProps } from '.'

export const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  padding: 0.5rem 1rem;
  border-color: transparent;
  transition: background-color 0.1s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.045);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  .ch-icon {
    width: 21px;
    height: 21px;
    margin-right: 0.25rem;
  }

  /* variant styles */
  ${props => props.variant === 'primary' && StyledPrimaryButton}
  ${props => props.variant === 'secondary' && StyledSecondaryButton}
  ${props => props.variant === 'select' && StyledGreenButton}

  ${baseSpacing}
  ${baseStyles}
`

export const StyledPrimaryButton = css<ButtonProps>`
  color: #ffffff;
  background: #f94144;
`

export const StyledSecondaryButton = css<ButtonProps>`
  color: #ffffff;
  background: #dedede;
`

export const StyledGreenButton = css<ButtonProps>`
  color: #ffffff;
  background: #17a2b8;
`
