import group46 from '../../../../assets/images/group_46.svg'
import Button from '../../../atoms/Button'
import HeaderAddButton from './HeaderAddButton'
import HeaderAddOfficeButton from './HeaderAddOfficeButton'
import HeaderCategoryIcon from './HeaderCategory'
import HeaderSearch from './HeaderSearch'
import { StyledHeaderContainer, StyledHeaderLeftContainer, StyledHeaderRightContainer, StyledNameIcon } from './Styled'

interface HeaderProps {
  loginClick: () => void
}

const group46Icon = <img alt="chevron_down" src={group46} />

const Header = (props: HeaderProps) => {
  const { loginClick } = props
  return (
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
        <Button label='ログイン' variant='primary-green' onClick={loginClick} />
        <HeaderAddOfficeButton />
      </StyledHeaderRightContainer>
    </StyledHeaderContainer>
  )
}

export default Header
