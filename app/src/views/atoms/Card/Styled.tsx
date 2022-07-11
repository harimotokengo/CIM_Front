import styled from 'styled-components'

import { baseSpacing, baseStyles } from '../Base'
import { CardProps } from '.'

export const StyledCard = styled.div<CardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 24px;
  background: ${props => props.theme.card.bg};
  width: ${props => props.width};

  border: 1px solid rgba(191, 201, 210, 0.2);

  box-shadow: ${props => props.theme.card.shadow};
  border-radius: ${props => props.theme.radii.default};

  ${baseSpacing}
  ${baseStyles}

  > .card-close {
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
  }
`
