import styled from 'styled-components'

import { DrawerProps } from '.'

export const StyledDrawer = styled.div<DrawerProps>`
  position: absolute;
  height: 100vh;
  width: ${props => (props.width ? props.width : '500px')};
  right: 0;
  top: 0;
  box-shadow: -15px 0px 17px -15px rgba(0, 0, 0, 0.2);
  background-color: white;
  > .card-close {
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
  }
`
