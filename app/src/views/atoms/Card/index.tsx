/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode } from 'react'

import close from '../../../assets/images/close.svg'
import { BaseProps } from '../Base'
import { StyledCard } from './Styled'

const closeIcon = <img alt="plusCircle" src={close} style={{ width: '21px', height: '21px' }} />

export interface CardProps extends BaseProps {
  closeButton?: boolean
  children: ReactNode | ReactNode[]
  onClosed?: () => void
}

export const Card = ({ closeButton = false, children, onClosed, ...rest }: CardProps) => {
  const handleClick = () => {
    if (onClosed) onClosed()
  }

  return (
    <StyledCard {...rest}>
      {children}
      {closeButton && (
        <span className="card-close" onClick={() => handleClick()}>
          {closeIcon}
        </span>
      )}
    </StyledCard>
  )
}
