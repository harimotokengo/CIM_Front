import { StyledSidebarItem, StyledSidebarItemWrapper } from './Styled'

export interface SidebarItemProps {
  label: string
}

const SidebarItem = (props: SidebarItemProps) => {
  const { label } = props

  return (
    <StyledSidebarItemWrapper>
      <StyledSidebarItem>{label}</StyledSidebarItem>
    </StyledSidebarItemWrapper>
  )
}

export default SidebarItem
