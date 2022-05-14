/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'

import { setScrollPosition } from '../../../store/actions/scrollAction'
import { SetScrollPayload } from '../../../store/models/scrollModel'
import { StyledMain } from './Styled'

interface MainProps {
  id?: string
  saveState?: boolean
  children: ReactNode
}

export const Main = ({ id, children, saveState = false }: MainProps) => {
  const dispatch = useDispatch()

  const handleScroll = (event: SyntheticEvent<HTMLDivElement>) => {
    const { clientHeight, scrollHeight, scrollTop } = event.currentTarget
    const position = ((scrollTop + clientHeight) / scrollHeight) * 100
    const payload: SetScrollPayload = { scroll: { position } }
    dispatch(setScrollPosition(payload))
  }

  return (
    <StyledMain
      id={id}
      onScroll={event => {
        if (saveState) handleScroll(event)
      }}
    >
      {children}
    </StyledMain>
  )
}
