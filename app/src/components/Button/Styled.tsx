import styled, { css } from 'styled-components'
import { ButtonProps } from '.'
import { baseSpacing, baseStyles } from '../Base'

export const StyledButton = styled.button<ButtonProps>`
  border-radius: ${props => props.theme.radii};
  font-size: ${props => props.theme.fontSizes.text.fontSize};
  padding: 0.5rem 1rem;
  border-color: transparent;
  transition: background-color 0.1s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  .ch-icon {
    width: ${props => props.theme.iconButtonSizes[props.iconSize || 'sm']};
    height: ${props => props.theme.iconButtonSizes[props.iconSize || 'sm']};
    margin-right: 0.25rem;
  }

  /* variant styles */
  ${props => props.variant === 'primary' && StyledPrimaryButton}

  ${baseSpacing}
  ${baseStyles}
`

export const StyledPrimaryButton = css<ButtonProps>`
  background-color: ${props =>
    props.selected ? props.theme.buttons.primary.selected.bgd : props.theme.buttons.primary.static.bgd};
  color: ${props =>
    props.selected ? props.theme.buttons.primary.selected.text : props.theme.buttons.primary.static.text};
  border: ${props =>
    props.selected ? props.theme.buttons.primary.selected.border : props.theme.buttons.primary.static.border};
  box-shadow: ${props => props.theme.buttons.primary.static.shadow};

  &:focus {
    background-color: ${props => props.theme.buttons.primary.focus.bgd};
    border: ${props => props.theme.buttons.primary.focus.border};
    color: ${props => props.theme.buttons.primary.focus.text};
    box-shadow: ${props => props.theme.buttons.primary.focus.shadow};
  }

  &:hover {
    background-color: ${props => props.theme.buttons.primary.hover.bgd};
    border: ${props => props.theme.buttons.primary.hover.border};
    color: ${props => props.theme.buttons.primary.hover.text};
    box-shadow: ${props => props.theme.buttons.primary.hover.shadow};
  }

  &:focus:hover {
    box-shadow: ${props => props.theme.buttons.primary.focus.shadow};
  }

  &:active {
    background-color: ${props => props.theme.buttons.primary.active.bgd};
    border: ${props => props.theme.buttons.primary.active.border};
    color: ${props => props.theme.buttons.primary.active.text};
    box-shadow: ${props => props.theme.buttons.primary.active.shadow};
  }

  &:disabled {
    background-color: ${props => props.theme.buttons.primary.disabled.bgd};
    border: ${props => props.theme.buttons.primary.disabled.border};
    color: ${props => props.theme.buttons.primary.disabled.text};
    cursor: not-allowed;
  }
`
