import React from 'react'

import { BaseProps } from '../Base'
import { StyledFooter } from './Styled'

export interface FooterProps extends BaseProps {
  children: React.ReactNode
}

export const Footer: React.FC<FooterProps> = ({ children, className, ...rest }: FooterProps) => (
  <StyledFooter layout="fill-horizontal-centered" gap="24px" className={className || ''} {...rest}>
    {children}
  </StyledFooter>
)

export default Footer
