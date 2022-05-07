import { SyntheticEvent, useState } from 'react'

import search from '../../../../assets/images/search.svg'
import SVG from '../../../atoms/SVG'
import HeaderSearchBox from './HeaderSearchBox'
import { StyledSearchInput, StyledSearchWrapper } from './Styled'

const HeaderSearch = () => {
  const [showBox, setShowBox] = useState(false)

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setShowBox(e.currentTarget.value === '')
  }

  const handleClick = (e: SyntheticEvent<HTMLInputElement>) => {
    setShowBox(e.currentTarget.value === '')
  }

  const handleBlur = () => {
    setShowBox(false)
  }

  return (
    <StyledSearchWrapper>
      <SVG width="21px" height="21px" color="#6E6F77" src={search} />
      <StyledSearchInput placeholder="検索" onChange={handleChange} onClick={handleClick} onBlur={handleBlur} />
      {showBox && <HeaderSearchBox />}
    </StyledSearchWrapper>
  )
}

export default HeaderSearch
