import { ReactNode } from 'react'

import { StyledMain } from './Styled'

interface MainProps {
  children: ReactNode
}

export const Main = ({ children }: MainProps) => <StyledMain>{children}</StyledMain>
