import { ReactNode } from 'react'

import { StyledHeaderAddItem, StyledHeaderAddItemWrapper } from './Styled'

interface HeaderAddItemProps {
  icon: ReactNode
  label: string
}

const HeaderAddItem = (props: HeaderAddItemProps) => {
  const { icon, label } = props

  return (
    <StyledHeaderAddItemWrapper>
      {icon}
      <StyledHeaderAddItem>{label}</StyledHeaderAddItem>
    </StyledHeaderAddItemWrapper>
  )
}

export default HeaderAddItem
