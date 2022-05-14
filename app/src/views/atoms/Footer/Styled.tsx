import styled from 'styled-components'

import Flex from '../Flex'
import { FooterProps } from '.'

export const StyledFooter = styled(Flex)<FooterProps>`
  height: 120px;
  background: ${props => props.theme.global.bg};
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.04);
`
