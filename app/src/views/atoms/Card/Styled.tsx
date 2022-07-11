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

  border: 1px solid rgba(191, 201, 210, 0.2);

  box-shadow: ${props => props.theme.card.shadow};
  border-radius: ${props => props.theme.radii.default};

  ${baseSpacing}
  ${baseStyles}

  > .card-close {
    position: absolute;
    right: 5px;
    top: 5px;
  }
`
