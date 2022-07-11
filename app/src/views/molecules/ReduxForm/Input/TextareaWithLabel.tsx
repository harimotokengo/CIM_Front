/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { WrappedFieldProps } from 'redux-form'

import Flex from '../../../atoms/Flex'
import { StyledTextArea } from '../TextArea/Styled'
import { StyledBoxLabel, StyledLabel } from './Styled'

export type ReduxFormTextAreaInputProps = {
  label: string
  widthLabel: string
  valueDefault?: string
  gap?: string
}

export const TextareaWithLabel = (props: WrappedFieldProps & ReduxFormTextAreaInputProps) => {
  const { label, gap, input, widthLabel, valueDefault, ...rest } = props

  return (
    <Flex
      flexWrap="wrap"
      gap={gap || '50px'}
      alignItems="center"
      margin="5px 0px"
      justifyContent="center"
      style={{ width: '100%' }}
    >
      <StyledBoxLabel width={widthLabel}>
        <StyledLabel>{label}</StyledLabel>
      </StyledBoxLabel>
      <StyledTextArea {...input} {...rest} style={{ padding: 7, flexGrow: 1 }} value={valueDefault} />
    </Flex>
  )
}
