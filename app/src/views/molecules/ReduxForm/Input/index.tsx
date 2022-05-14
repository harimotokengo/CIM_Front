/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { WrappedFieldProps } from 'redux-form'

import { StyledInput, StyledInputLabel, StyledInputWrapper } from './Styled'

type ReduxFormInputProps = {
  label: string
}

export const ReduxFormInput = (props: WrappedFieldProps & ReduxFormInputProps) => {
  const {
    label,
    input,
    meta: { touched, error },
    ...rest
  } = props

  return (
    <StyledInputWrapper>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInput isError={touched && error} {...input} {...rest} />
    </StyledInputWrapper>
  )
}
