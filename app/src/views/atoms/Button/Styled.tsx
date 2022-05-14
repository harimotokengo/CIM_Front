import styled, { css } from 'styled-components'

import { baseSpacing, baseStyles } from '../Base'
import { ButtonProps } from '.'

export const StyledButton = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border-color: transparent;
  transition: background-color 0.1s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.radii.default};
  font-size: ${props => (props.large ? props.theme.fontSizes.large.fontSize : props.theme.fontSizes.label.fontSize)};
  line-height: ${props => (props.large ? props.theme.fontSizes.large.fontSize : props.theme.fontSizes.label.fontSize)};

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
  ${props => props.variant === 'primary-red' && StyledPrimaryRedButton}
  ${props => props.variant === 'primary-green' && StyledPrimaryGreenButton}
  ${props => props.variant === 'primary-edit' && StyledPrimaryEditButton}
  ${props => props.variant === 'secondary' && StyledSecondaryButton}

  ${baseSpacing}
  ${baseStyles}
`

export const StyledPrimaryRedButton = css<ButtonProps>`
  color: ${props => props.theme.buttons.primaryRed.color};
  background: ${props => props.theme.buttons.primaryRed.bg};
  box-shadow: ${props => props.theme.buttons.primaryRed.shadow};
`

export const StyledPrimaryGreenButton = css<ButtonProps>`
  color: ${props => props.theme.buttons.primaryGreen.color};
  background: ${props => props.theme.buttons.primaryGreen.bg};
  box-shadow: ${props => props.theme.buttons.primaryGreen.shadow};
`

export const StyledPrimaryEditButton = css<ButtonProps>`
  color: ${props => props.theme.buttons.primaryEdit.color};
  background: ${props => props.theme.buttons.primaryEdit.bg};
  box-shadow: ${props => props.theme.buttons.primaryEdit.shadow};
`

export const StyledSecondaryButton = css<ButtonProps>`
  color: ${props => props.theme.buttons.secondary.color};
  background: ${props => props.theme.buttons.secondary.bg};
  box-shadow: ${props => props.theme.buttons.secondary.shadow};
`
