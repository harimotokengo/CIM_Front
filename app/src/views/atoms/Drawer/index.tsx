/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode } from 'react'

import close from '../../../assets/images/close.svg'
import { StyledDrawer } from './Styled'

const closeIcon = <img alt="plusCircle" src={close} style={{ width: '21px', height: '21px' }} />

export interface DrawerProps {
  width?: string
  children: ReactNode | ReactNode[]
  onClosed?: () => void
}

export const Drawer = ({ children, onClosed, ...rest }: DrawerProps) => {
  const handleClick = () => {
    if (onClosed) onClosed()
  }

  return (
    <StyledDrawer {...rest}>
      {children}
      <span className="card-close" onClick={() => handleClick()}>
        {closeIcon}
      </span>
    </StyledDrawer>
  )
}
