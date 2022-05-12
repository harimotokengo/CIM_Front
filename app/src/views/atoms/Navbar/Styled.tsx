import styled from 'styled-components'

import { baseSpacing, baseStyles } from '../Base'
import Flex from '../Flex'
import { NavbarProps } from '.'
import { NavbarItemProps } from './NavbarItem'

export const StyledNavbar = styled(Flex)<NavbarProps>`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  color: #39434d;
  background-color: #ffffff;
  width: 279px;
  padding-top: 1rem;
  box-shadow: 8px 0px 19px rgba(0, 0, 0, 0.06);

  ${baseStyles}
  ${baseSpacing}
`

export const StyledNavbarItem = styled.div<Partial<NavbarItemProps>>`
  position: relative;
  width: 240px;
  min-height: 67px;
  border-top: 1px solid rgba(191, 201, 210, 0.2);
  border-bottom: 1px solid rgba(191, 201, 210, 0.2);
  background: ${props => (props.selected ? '#bfc9d233' : '#ffffff')};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:focus {
    background: #bfc9d233;
  }

  &:hover {
    background: #bfc9d233;
  }

  &:active {
    background: #bfc9d233;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const StyledNavbarLabel = styled.div<Partial<NavbarItemProps>>`
  position: relative;
  width: 240px;
  min-height: 30px;
`

export const StyledLabelWrapper = styled.div`
  position: absolute;
  width: 125px;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
`
