/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'

import plusCircleFill from '../../../../assets/images/plus_circle_fill.svg'
import SVG from '../../../atoms/SVG'
import HeaderAddBox from './HeaderAddBox'
import { StyledHeaderAddButtonWrapper } from './Styled'

export const HeaderAddButton = () => {
  const [showAddBox, setShowAddBox] = useState(false)

  const handleClick = () => {
    setShowAddBox(!showAddBox)
  }

  return (
    <StyledHeaderAddButtonWrapper onClick={handleClick}>
      <SVG width="40px" height="40px" src={plusCircleFill} color="#f94144" />
      {showAddBox && <HeaderAddBox />}
    </StyledHeaderAddButtonWrapper>
  )
}

export default HeaderAddButton
