import { StyledHeaderMenuItem, StyledHeaderMenuItemWrapper } from './Styled'

export interface HeaderMenuItemProps {
  id: string
  label: string
  isCurrent: boolean
  onClick: (id: string) => void
}

const HeaderMenuItem = (props: HeaderMenuItemProps) => {
  const { id, label, isCurrent, onClick } = props

  return (
    <StyledHeaderMenuItemWrapper>
      <StyledHeaderMenuItem id={id} isCurrent={isCurrent} onClick={() => onClick(id)}>
        {label}
      </StyledHeaderMenuItem>
    </StyledHeaderMenuItemWrapper>
  )
}

export default HeaderMenuItem
