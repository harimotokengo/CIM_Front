/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from 'react'

import { InputWrapper } from '../Input/InputWrapper'
import { SelectProps } from '.'
import { StyledSelect } from './Styled'

export interface SelectWithLabelProps extends SelectProps {
  label: string
  keys: any[]
  category: { [key: string]: string }
}

export const SelectWithLabel = (props: SelectWithLabelProps) => {
  const { label, value, onValueChange, keys, category, ...rest } = props

  const [text, setText] = useState<string>(value)

  const onChange = (element: HTMLSelectElement) => {
    setText(element.value)
    if (onValueChange) onValueChange(element.value)
  }

  return (
    <InputWrapper label={label}>
      <StyledSelect value={text} onChange={e => onChange(e.currentTarget)} {...rest}>
        {keys.map((x, i) => (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          <option key={x} value={x} hidden={i === 0}>
            {category[x]}
          </option>
        ))}
      </StyledSelect>
    </InputWrapper>
  )
}
