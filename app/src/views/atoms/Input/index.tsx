import { HTMLAttributes, useState } from 'react'

import { BaseProps } from '../Base'
import { StyledInput, StyledInputLabel, StyledInputWrapper } from './Styled'

export interface InputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'css'>, BaseProps {
  label: string
  value: string
  onValueChange?: (value: string) => void
}

export const Input = (props: InputProps) => {
  const { label, value, onValueChange, ...rest } = props

  const [text, setText] = useState<string>(value)

  const onChange = (element: HTMLInputElement) => {
    setText(element.value)
    if (onValueChange) onValueChange(element.value)
  }

  return (
    <StyledInputWrapper>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInput value={text} onChange={e => onChange(e.currentTarget)} {...rest} />
    </StyledInputWrapper>
  )
}
