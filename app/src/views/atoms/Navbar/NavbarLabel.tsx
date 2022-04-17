import React, { ReactNode } from 'react'

import Label, { LabelProps } from '../Label'
import { StyledLabelWrapper, StyledNavbarLabel } from './Styled'

export interface NavbarLabelProps extends LabelProps {
  label: string
  children?: ReactNode | ReactNode[]
}

export const NavbarLabel = ({ label, ...rest }: NavbarLabelProps) => (
  <StyledNavbarLabel>
    <StyledLabelWrapper>
      <Label variant="nav" {...rest}>
        {label}
      </Label>
    </StyledLabelWrapper>
  </StyledNavbarLabel>
)

export default NavbarLabel
