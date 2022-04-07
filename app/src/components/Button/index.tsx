import React, { forwardRef, HTMLAttributes } from 'react'

import { BaseProps } from '../Base'
import { StyledButton } from './Styled'

export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'css'>, BaseProps {
  icon?: JSX.Element
  label: string
  variant?: ButtonVariant
  selected?: boolean
  iconSize?: IconSize
  disabled?: boolean
}

export type IconSize = 'sm' | 'md' | 'lg'
export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'icon'

export const Button = forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
  <StyledButton
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className={props.className || ''}
    ref={ref}
    aria-label={props.label}
    disabled={props.disabled}
  >
    {props.icon && <span className="ch-icon">{props.icon}</span>}
    <span className="ch-label">{props.label}</span>
  </StyledButton>
))

Button.defaultProps = {
  icon: undefined,
  variant: 'primary',
  selected: false,
  iconSize: undefined,
  disabled: false,
}

export default Button
