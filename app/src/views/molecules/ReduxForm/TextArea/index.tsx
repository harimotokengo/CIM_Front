/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { WrappedFieldProps } from 'redux-form'

import { StyledInputLabel, StyledInputWrapper } from '../Input/Styled'
import { StyledTextArea } from './Styled'

type ReduxFormTextAreaProps = {
  label: string
}

export const ReduxFormTextArea = (props: WrappedFieldProps & ReduxFormTextAreaProps) => {
  const { label, input } = props

  return (
    <StyledInputWrapper>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextArea {...input} />
    </StyledInputWrapper>
  )
}
