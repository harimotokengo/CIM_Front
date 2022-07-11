/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'

import plusCircleFill from '../../../../assets/images/plus_circle_fill.svg'
import SVG from '../../../atoms/SVG'
import HeaderAddBox from './HeaderAddBox'
import { StyledHeaderAddButtonWrapper } from './Styled'

// showAddBoxの初期ステータスは(false)
export const HeaderAddButton = () => {
  const [showAddBox, setShowAddBox] = useState(false)

  // handleClickが起動したら「showAddBox」を現在(false)と逆の値(true)にする
  const handleClick = () => {
    setShowAddBox(!showAddBox)
  }

  // span（赤丸）にonClickを追加・・・span（赤丸）をクリックするとhandleClickが起動→showAddBoxが(true)に変わる
  // {showAddBox && <HeaderAddBox />}・・・showAddBoxが(true)の時に<HeaderAddBox />を表示する
  return (
    <StyledHeaderAddButtonWrapper>
      <span onClick={handleClick}>
        <SVG width="40px" height="40px" src={plusCircleFill} color="#f94144" />
      </span>
      {showAddBox && <HeaderAddBox />}
    </StyledHeaderAddButtonWrapper>
  )
}

export default HeaderAddButton
