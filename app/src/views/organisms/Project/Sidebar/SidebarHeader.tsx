import close from '../../../../assets/images/menu_close.svg'
import { StyledCloseButton, StyledHeader, StyledLabel } from './Styled'

const closeIcon = <img alt="close" src={close} style={{ width: '24px', height: '24px' }} />

interface SidebarHeaderProps {
  onClick: () => void
}

const SidebarHeader = ({ onClick }: SidebarHeaderProps) => (
  <StyledHeader>
    <StyledLabel className="narrow-disable">CIM</StyledLabel>
    <StyledCloseButton onClick={onClick}>{closeIcon}</StyledCloseButton>
  </StyledHeader>
)

export default SidebarHeader
