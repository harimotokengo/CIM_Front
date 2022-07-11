import React from 'react'

import { BaseProps } from '../Base'
import { FlexProps } from '../Flex'
import { StyledNavbar2 } from './Styled'

export interface NavbarProps2 extends FlexProps, BaseProps {
  children: React.ReactNode
}

export const Navbar2: React.FC<NavbarProps2> = ({ children, className, ...rest }: NavbarProps2) => (
  <StyledNavbar2 {...rest} className={className || ''}>
    {children}
  </StyledNavbar2>
)

export default Navbar2
