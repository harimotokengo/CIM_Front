import { useState } from 'react'

import { InputWrapper } from '../Input/InputWrapper'
import { TextAreaProps } from '.'
import { StyledTextArea } from './Styled'

export interface TextAreaWithLabelProps extends TextAreaProps {
  label: string
}

export const TextAreaWithLabel = (props: TextAreaWithLabelProps) => {
  const { label, value, onValueChange, ...rest } = props

  const [text, setText] = useState<string>(value)

  const onChange = (element: HTMLTextAreaElement) => {
    setText(element.value)
    if (onValueChange) onValueChange(element.value)
  }

  return (
    <InputWrapper label={label}>
      <StyledTextArea value={text} onChange={e => onChange(e.currentTarget)} {...rest} />
    </InputWrapper>
  )
}
