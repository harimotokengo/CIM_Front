import { HTMLAttributes, useState } from 'react'

import { BaseProps } from '../Base'
import { StyledSelect } from './Styled'

export interface SelectProps extends Omit<HTMLAttributes<HTMLSelectElement>, 'css'>, BaseProps {
  value: string
  onValueChange?: (value: string) => void
}

export const Select = (props: SelectProps) => {
  const { value, onValueChange, ...rest } = props

  const [text, setText] = useState<string>(value)

  const onChange = (element: HTMLSelectElement) => {
    setText(element.value)
    if (onValueChange) onValueChange(element.value)
  }

  return <StyledSelect value={text} onChange={e => onChange(e.currentTarget)} {...rest} />
}
