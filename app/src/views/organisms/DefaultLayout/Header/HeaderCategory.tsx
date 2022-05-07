import chevronDown from '../../../../assets/images/chevron_down.svg'
import star from '../../../../assets/images/star.svg'
import {
  StyledCategoryIcon,
  StyledCategoryWrapper,
  StyledStatus,
  StyledStatusLabel,
  StyledStatusWrappr,
  SyledCategoryName,
} from './Styled'

const chevronDownIcon = <img alt="chevron_down" src={chevronDown} style={{ width: '24px', height: '24px' }} />
const starIcon = <img alt="star" src={star} style={{ width: '24px', height: '24px' }} />

interface HeaderCategoryProps {
  label: string
  name: string
  status: string
}

const HeaderCategory = (props: HeaderCategoryProps) => {
  const { label, name, status } = props

  return (
    <StyledCategoryWrapper>
      <StyledCategoryIcon>
        <p>{label}</p>
      </StyledCategoryIcon>
      <SyledCategoryName>{name}</SyledCategoryName>
      {chevronDownIcon}
      {starIcon}
      <StyledStatusWrappr>
        <StyledStatus />
        <StyledStatusLabel>{status}</StyledStatusLabel>
      </StyledStatusWrappr>
    </StyledCategoryWrapper>
  )
}

export default HeaderCategory
