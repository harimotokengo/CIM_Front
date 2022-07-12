import { StyledNameIcon } from './Styled'

export const NamePeople = ({ name = '' }) => (
  <StyledNameIcon>
    <p>{name || '姓名'}</p>
  </StyledNameIcon>
)
