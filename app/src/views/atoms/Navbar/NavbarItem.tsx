import React, { ReactNode } from 'react'

import Label, { LabelProps } from '../Label'
import { StyledLabelWrapper, StyledNavbarItem } from './Styled'

export interface NavbarItemProps extends LabelProps {
  /* As part of IconButtonProps, any icon from the library for button in navbar item */
  icon: JSX.Element
  /* As part of IconButtonProps, The callback fired when the icon is clicked */
  onClick: () => void
  /* As part of IconButtonProps, a label for navbar button */
  label: string
  /* As part of IconButtonProps, an optional flag to notify if the button is in a selected state. */
  selected?: boolean
  /* Including badgeProps will result in the children contents rendering in a PopOver */
  children?: ReactNode | ReactNode[]
}

export const NavbarItem = ({ label, icon, onClick, ...rest }: NavbarItemProps) => (
  <StyledNavbarItem onClick={onClick}>
    <StyledLabelWrapper>
      <Label icon={icon} variant="icon" {...rest}>
        {label}
      </Label>
    </StyledLabelWrapper>
  </StyledNavbarItem>
)

export default NavbarItem
