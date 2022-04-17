import { ReactNode } from 'react'

import { BaseProps } from '../Base'
import { StyledCard } from './Styled'

export interface CardProps extends BaseProps {
  width?: string
  height?: string
  children: ReactNode | ReactNode[]
}

export const Card = (props: CardProps) => {
  const { children, ...rest } = props

  return <StyledCard {...rest}>{children}</StyledCard>
}
