/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { WrappedFieldProps } from 'redux-form'

import Flex from '../../../atoms/Flex'
import { ReduxFormInputProps } from '../Input/InputWithLabel'
import { StyledBoxLabel, StyledBoxSelect, StyledLabel } from '../Input/Styled'
import { ReduxFormSelectProps, Select } from './Select'

export const SelectWithLabel = (props: WrappedFieldProps & ReduxFormInputProps & ReduxFormSelectProps) => {
  const { label, gap, widthLabel, category, ...rest } = props
  return (
    <Flex flexWrap="wrap" gap={gap || '50px'} alignItems="center" margin="5px 0px" style={{ width: '100%' }}>
      <StyledBoxLabel width={widthLabel}>
        <StyledLabel>{label}</StyledLabel>
      </StyledBoxLabel>
      <StyledBoxSelect>
        <Select category={category} {...rest} />
      </StyledBoxSelect>
    </Flex>
  )
}
