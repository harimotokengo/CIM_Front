import styled from 'styled-components'

import { baseSpacing, baseStyles } from '../../../atoms/Base'
import { CardProps } from '.'

export const StyledCard = styled.div<CardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 24px;
  background: #ffffff;
  /* bd.gray-20% */

  border: 1px solid rgba(191, 201, 210, 0.2);
  box-sizing: border-box;
  /* Small shadow */

  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.045);
  border-radius: 4px;

  width: ${props => props.width};
  height: ${props => props.height};

  ${baseSpacing}
  ${baseStyles}

  > .card-close {
    position: absolute;
    right: 5px;
    top: 5px;
  }
`
