/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { WrappedFieldProps } from 'redux-form'

import Flex from '../../../atoms/Flex'
import { StyledBoxLabel, StyledInput, StyledLabel } from './Styled'

export type ReduxFormInputProps = {
  label: string
  widthLabel: string
  gap?: string
  valueDefault?: string
}

export const InputWithLabel = (props: WrappedFieldProps & ReduxFormInputProps) => {
  const {
    label,
    gap,
    input,
    widthLabel,
    valueDefault,
    meta: { touched, error },
    ...rest
  } = props

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
      <StyledInput
        isError={touched && error}
        {...input}
        {...rest}
        style={{ padding: 7, flexGrow: 1 }}
        value={valueDefault}
      />
    </Flex>
  )
}
