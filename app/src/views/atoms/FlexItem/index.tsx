import { ReactNode } from 'react'
import { FlexboxProps } from 'styled-system'

import { BaseProps } from '../Base'
import { StyledFlexItem } from './Styled'

export interface FlexItemProps extends Omit<FlexboxProps, 'flexBasis'>, BaseProps {
  stretch?: boolean
  width: string
  children: ReactNode
}

export const FlexItem = ({ stretch = true, children, ...rest }: FlexItemProps) => (
  <StyledFlexItem stretch={stretch} {...rest}>
    {children}
  </StyledFlexItem>
)
