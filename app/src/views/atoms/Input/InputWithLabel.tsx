import { useState } from 'react'

import { InputProps } from '.'
import { InputWrapper } from './InputWrapper'
import { StyledInput } from './Styled'

export interface InputWithLabelProps extends InputProps {
  label: string
}

export const InputWithLabel = (props: InputWithLabelProps) => {
  const { label, value, onValueChange, ...rest } = props

  const [text, setText] = useState<string>(value)

  const onChange = (element: HTMLInputElement) => {
    setText(element.value)
    if (onValueChange) onValueChange(element.value)
  }

  return (
    <InputWrapper label={label}>
      <StyledInput value={text} onChange={e => onChange(e.currentTarget)} {...rest} />
    </InputWrapper>
  )
}
