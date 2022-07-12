/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react'
import { WrappedFieldProps } from 'redux-form'

import Flex from '../../../atoms/Flex'
import { ReduxFormInputProps } from '../Input/InputWithLabel'
import { StyledBoxLabel, StyledBoxSelect, StyledLabel } from '../Input/Styled'
import { StyledSelectStatus } from './Styled'

type TypeCategory = {
  id: number
  value: string
  color: string
}

type SelectStatusProps = {
  category: TypeCategory[]
  gap?: string
  width?: string
}

export const SelectStatus = (props: WrappedFieldProps & ReduxFormInputProps & SelectStatusProps) => {
  const { label, widthLabel, category, gap, ...rest } = props
  const [colorCurrent, setColorCurrent] = useState(category[0].color)

  return (
    <Flex flexWrap="wrap" gap={gap || '50px'} alignItems="center" margin="5px 0px" style={{ width: '100%' }}>
      <StyledBoxLabel width={widthLabel}>
        <StyledLabel>{label}</StyledLabel>
      </StyledBoxLabel>
      <StyledBoxSelect>
        <StyledSelectStatus
          {...rest}
          color={colorCurrent}
          style={{ background: colorCurrent }}
          onChange={e => setColorCurrent(e.currentTarget.value)}
        >
          {category.map(x => (
            <option key={x.value} value={x.color} onClick={() => setColorCurrent(x.color)}>
              {x.value}
            </option>
          ))}
        </StyledSelectStatus>
      </StyledBoxSelect>
    </Flex>
  )
}
