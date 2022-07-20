import { HTMLAttributes, useState } from 'react'

import { BaseProps } from '../Base'
import { StyledInput } from './Styled'

export interface InputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'css'>, BaseProps {
  value: string
  onValueChange?: (value: string) => void
}

export const Input = (props: InputProps) => {
  const { value, onValueChange, ...rest } = props

  const [text, setText] = useState<string>(value)

  const onChange = (element: HTMLInputElement) => {
    setText(element.value)
    if (onValueChange) onValueChange(element.value)
  }

  return <StyledInput value={text} onChange={e => onChange(e.currentTarget)} {...rest} />
}
