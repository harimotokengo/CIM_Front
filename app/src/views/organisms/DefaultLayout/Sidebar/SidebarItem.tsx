import { ReactNode } from 'react'

import { StyledSidebarItem, StyledSidebarItemWrapper } from './Styled'

export interface SidebarItemProps {
  icon: ReactNode
  label: string
  path: string
  isCurrent: boolean
  sub?: boolean
  children?: ReactNode[]
  onClick: (path: string) => void
}

const SidebarItem = ({ icon, label, path, isCurrent, sub, children, onClick }: SidebarItemProps) => (
  <>
    <StyledSidebarItemWrapper className={sub ? 'sidebar-item-sub' : ''}>
      <StyledSidebarItem isCurrent={isCurrent} onClick={() => onClick(path)}>
        {icon}
        <p className="narrow-disable">{label}</p>
      </StyledSidebarItem>
    </StyledSidebarItemWrapper>
    {children}
  </>
)

export default SidebarItem
