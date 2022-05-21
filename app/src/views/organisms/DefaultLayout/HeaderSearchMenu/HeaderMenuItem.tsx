/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode, useState } from 'react'

import { HeaderSearchBox } from './HeaderSearchBox'
import { StyledHeaderMenuItem, StyledHeaderMenuItemWrapper } from './Styled'

export interface HeaderMenuItemProps {
  id: number
  icon: ReactNode
  label: string
}

const HeaderMenuItem = (props: HeaderMenuItemProps) => {
  const { id, icon, label } = props
  const [showBox, setShowBox] = useState(false)

  const handleClick = (currentId: number) => {
    if (currentId === 1) {
      setShowBox(!showBox)
    }
  }

  return (
    <StyledHeaderMenuItemWrapper onClick={() => handleClick(id)}>
      {icon}
      <StyledHeaderMenuItem>{label}</StyledHeaderMenuItem>
      {showBox && <HeaderSearchBox />}
    </StyledHeaderMenuItemWrapper>
  )
}

export default HeaderMenuItem
