import HeaderMenuItem, { HeaderMenuItemProps } from './HeaderMenuItem'
import { StyledHeaderMenuContainer } from './Styled'

interface HeaderMenuProps {
  // menuItems: Omit<HeaderMenuItemProps, 'onClick'>[]
  items: Omit<HeaderMenuItemProps, 'onClick'>[]
  setItems: (newItems: Omit<HeaderMenuItemProps, 'onClick'>[]) => void
}

const HeaderMenu = (props: HeaderMenuProps) => {
  const { items, setItems } = props
  // const [items, setItems] = useState(menuItems)

  const handleClick = (id: string) => {
    const newItems: typeof items = items.map(item => ({
      ...item,
      isCurrent: item.id === id,
    }))
    setItems(newItems)
  }

  return (
    <StyledHeaderMenuContainer>
      {items.map(item => (
        <HeaderMenuItem
          key={item.id}
          id={item.id}
          label={item.label}
          isCurrent={item.isCurrent}
          onClick={handleClick}
        />
      ))}
    </StyledHeaderMenuContainer>
  )
}

export default HeaderMenu
