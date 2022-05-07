import { ReactNode } from 'react'

import { StyledSidebarBottom } from './Styled'

interface SidebarBottomProps {
  children: ReactNode | ReactNode[]
}

const SidebarBottom = (props: SidebarBottomProps) => {
  const { children } = props

  return <StyledSidebarBottom>{children}</StyledSidebarBottom>
}

export default SidebarBottom
