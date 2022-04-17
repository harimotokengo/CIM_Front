import { HTMLAttributes, useState } from 'react'

import { BaseProps } from '../Base'
import { StyledTextArea } from './Styled'

export interface TextAreaProps extends Omit<HTMLAttributes<HTMLTextAreaElement>, 'css'>, BaseProps {
  value: string
  onValueChange?: (value: string) => void
}

export const TextArea = (props: TextAreaProps) => {
  const { value, onValueChange, ...rest } = props

  const [text, setText] = useState<string>(value)

  const onChange = (element: HTMLTextAreaElement) => {
    setText(element.value)
    if (onValueChange) onValueChange(element.value)
  }

  return <StyledTextArea value={text} onChange={e => onChange(e.currentTarget)} {...rest} />
}
