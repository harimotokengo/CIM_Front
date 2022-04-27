import SidebarItem from './SidebarItem'
import { StyledSidebarContainer } from './Styled'

const Sidebar = () => (
  <StyledSidebarContainer>
    <SidebarItem label="案件概要" />
    <SidebarItem label="クライアント" />
    <SidebarItem label="関係者等" />
    <SidebarItem label="報酬等" />
    <SidebarItem label="明細管理" />
    <SidebarItem label="オプション" />
  </StyledSidebarContainer>
)

export default Sidebar
