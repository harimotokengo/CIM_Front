import { ReactNode } from 'react'

import { StyledHeaderAddItem, StyledHeaderAddItemWrapper } from './Styled'

interface HeaderAddItemProps {
  icon: ReactNode
  label: string
  onClick: (label: string) => void
}

const HeaderAddItem = (props: HeaderAddItemProps) => {
  const { icon, label, onClick } = props

  return (
    <StyledHeaderAddItemWrapper onClick={() => onClick(label)}>
      {icon}
      <StyledHeaderAddItem>{label}</StyledHeaderAddItem>
    </StyledHeaderAddItemWrapper>
  )
}

export default HeaderAddItem
