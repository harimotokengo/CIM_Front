import React from 'react'
import { useDispatch } from 'react-redux'

import { MATTER_GENRE } from '../../../../constants/matters'
import { setFilter } from '../../../../store/actions/filterAction'
import { SetFilterPayload } from '../../../../store/models/filterModel'
import { StyledHeaderSearchContents } from '../Header/Styled'
import { StyledHeaderSearchBoxWrapper, StyledMatterGenreItem } from './Styled'

export const HeaderSearchBox = () => {
  const dispatch = useDispatch()

  const handleClick = (matterGenreId: number) => {
    const payload: SetFilterPayload = {
      filter: {
        is_filter: true,
        filter_key: 'matter_genre',
        filter_value: matterGenreId,
      },
    }
    dispatch(setFilter(payload))
  }

  return (
    <StyledHeaderSearchBoxWrapper>
      <StyledHeaderSearchContents>
        {MATTER_GENRE.map(x => (
          <StyledMatterGenreItem matterGenreId={x.id} onClick={() => handleClick(x.id)}>
            {x.name}
          </StyledMatterGenreItem>
        ))}
      </StyledHeaderSearchContents>
    </StyledHeaderSearchBoxWrapper>
  )
}

export default HeaderSearchBox
