import React, { forwardRef, LabelHTMLAttributes, Ref } from 'react'

import { BaseProps } from '../Base'
import { StyledLabel } from './Styled'

export interface LabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'css'>, BaseProps {
  icon?: JSX.Element
  variant?: LabelVariant
}

export type LabelVariant = 'nav' | 'icon'

export const Label = forwardRef((props: LabelProps, _: Ref<HTMLLabelElement>) => {
  const { className, ...rest } = props

  return (
    <StyledLabel className={className || ''} {...rest}>
      {props.icon && <span className="ch-icon">{props.icon}</span>}
      <span className="ch-label">{props.children}</span>
    </StyledLabel>
  )
})

export default Label
