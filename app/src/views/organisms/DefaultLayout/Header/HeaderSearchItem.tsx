import { ReactNode } from 'react'

import { StyledHeaderSearchItem, StyledHeaderSearchItemWrapper } from './Styled'

interface HeaderSearchItemProps {
  icon: ReactNode
  label: string
}

export const HeaderSearchItem = (props: HeaderSearchItemProps) => {
  const { icon, label } = props

  return (
    <StyledHeaderSearchItemWrapper>
      {icon}
      <StyledHeaderSearchItem>{label}</StyledHeaderSearchItem>
    </StyledHeaderSearchItemWrapper>
  )
}

export default HeaderSearchItem
