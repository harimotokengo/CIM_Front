import { useState } from 'react'

import HeaderMenuItem, { HeaderMenuItemProps } from './HeaderMenuItem'
import { StyledHeaderMenuContainer } from './Styled'

interface HeaderMenuProps {
  menuItems: Omit<HeaderMenuItemProps, 'onClick'>[]
}

const HeaderMenu = (props: HeaderMenuProps) => {
  const { menuItems } = props
  const [items, setItems] = useState(menuItems)

  const handleClick = (id: string) => {
    const newItems: typeof items = items.map(x => ({
      ...x,
      isCurrent: x.id === id,
    }))
    setItems(newItems)
  }

  return (
    <StyledHeaderMenuContainer>
      {items.map(x => (
        <HeaderMenuItem key={x.id} id={x.id} label={x.label} isCurrent={x.isCurrent} onClick={handleClick} />
      ))}
    </StyledHeaderMenuContainer>
  )
}

export default HeaderMenu
