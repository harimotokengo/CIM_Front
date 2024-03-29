/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { HTMLAttributes } from 'react'

import { BaseProps } from '../Base'
import { StyledButton } from './Styled'

export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'css'>, BaseProps {
  icon?: JSX.Element
  label: string
  variant?: ButtonVariant
  selected?: boolean
  disabled?: boolean
  large?: boolean
}

export type ButtonVariant = 'default' | 'primary-red' | 'primary-green' | 'primary-edit' | 'secondary' | 'icon'

export const Button = (props: ButtonProps) => {
  const { className, tag, icon, label, disabled, ...rest } = props

  return (
    <StyledButton className={className || ''} as={tag} aria-label={label} disabled={disabled} type="button" {...rest}>
      {icon && <span className="ch-icon">{icon}</span>}
      <span className="ch-label">{label}</span>
    </StyledButton>
  )
}

export default Button
