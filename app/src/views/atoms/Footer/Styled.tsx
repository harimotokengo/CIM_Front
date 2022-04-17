import styled from 'styled-components'

import { baseSpacing, baseStyles } from '../Base'
import Flex from '../Flex'
import { FooterProps } from '.'

export const StyledFooter = styled(Flex)<FooterProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.04);
  gap: 24px;

  ${baseStyles}
  ${baseSpacing}
`
