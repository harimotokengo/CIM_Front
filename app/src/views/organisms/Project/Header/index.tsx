import group46 from '../../../../assets/images/group_46.svg'
import HeaderAddButton from './HeaderAddButton'
import HeaderCategoryIcon from './HeaderCategory'
import HeaderSearch from './HeaderSearch'
import { StyledHeaderContainer, StyledHeaderLeftContainer, StyledHeaderRightContainer, StyledNameIcon } from './Styled'

const group46Icon = <img alt="chevron_down" src={group46} />

const Header = () => (
  <StyledHeaderContainer>
    <StyledHeaderLeftContainer>
      <HeaderCategoryIcon label="分" name="河内 兼＋分野＋追加" status="受任" />
    </StyledHeaderLeftContainer>
    <StyledHeaderRightContainer>
      {group46Icon}
      <HeaderSearch />
      <HeaderAddButton />
      <StyledNameIcon>
        <p>姓名</p>
      </StyledNameIcon>
    </StyledHeaderRightContainer>
  </StyledHeaderContainer>
)

export default Header
