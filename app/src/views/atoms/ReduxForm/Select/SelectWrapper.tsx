/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReactNode } from 'react'

import { StyledInputLabel, StyledInputWrapper } from '../Input/Styled'

type SelectWrapperProps = {
  label: string
  children: ReactNode | ReactNode[]
}

export const SelectWrapper = (props: SelectWrapperProps) => {
  const { label, children } = props

  return (
    <StyledInputWrapper>
      <StyledInputLabel>{label}</StyledInputLabel>
      {children}
    </StyledInputWrapper>
  )
}
