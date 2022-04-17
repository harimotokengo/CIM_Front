import React from 'react'

import { BaseProps } from '../Base'
import { FlexProps } from '../Flex'
import { StyledNavbar } from './Styled'

export interface NavbarProps extends FlexProps, BaseProps {
  children: React.ReactNode
}

export const Navbar: React.FC<NavbarProps> = ({ children, className, ...rest }: NavbarProps) => (
  <StyledNavbar {...rest} className={className || ''}>
    {children}
  </StyledNavbar>
)

export default Navbar
