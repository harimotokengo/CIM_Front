import styled from 'styled-components'

import { baseSpacing, baseStyles } from '../Base'
import { FlexItemProps } from '.'

export const StyledFlexItem = styled.div<FlexItemProps>`
  flex: auto;
  flex-grow: ${props => (props.stretch ? 1 : 0)};
  flex-shrink: ${props => (props.stretch ? 1 : 0)};
  width: ${props => props.width};
  ${baseStyles};
  ${baseSpacing};
`
