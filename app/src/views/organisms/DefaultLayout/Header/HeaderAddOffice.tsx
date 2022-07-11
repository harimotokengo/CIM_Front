import { ReactNode } from 'react'

import { StyledHeaderAddOffice, StyledHeaderAddOfficeWrapper } from './Styled'

interface HeaderAddOfficeProps {
  icon: ReactNode
  label: string
  onClick: (label: string) => void
}

const HeaderAddOffice = (props: HeaderAddOfficeProps) => {
  const { icon, label, onClick } = props

  return (
    <StyledHeaderAddOfficeWrapper onClick={() => onClick(label)}>
      {icon}
      <StyledHeaderAddOffice>{label}</StyledHeaderAddOffice>
    </StyledHeaderAddOfficeWrapper>
  )
}

export default HeaderAddOffice
