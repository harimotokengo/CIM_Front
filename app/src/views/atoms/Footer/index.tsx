import React from 'react'

import { BaseProps } from '../Base'
import { StyledFooter } from './Styled'

export interface FooterProps extends BaseProps {
  children: React.ReactNode
}

export const Footer: React.FC<FooterProps> = ({ children, className, ...rest }: FooterProps) => (
  <StyledFooter {...rest} className={className || ''}>
    {children}
  </StyledFooter>
)

export default Footer
