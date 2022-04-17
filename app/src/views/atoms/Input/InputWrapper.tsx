import { ReactNode } from 'react'

import { StyledInputLabel, StyledInputWrapper } from './Styled'

export interface InputWrapperProps {
  label: string
  children: ReactNode | ReactNode[]
}

export const InputWrapper = (props: InputWrapperProps) => {
  const { label, children } = props

  return (
    <StyledInputWrapper>
      <StyledInputLabel>{label}</StyledInputLabel>
      {children}
    </StyledInputWrapper>
  )
}
