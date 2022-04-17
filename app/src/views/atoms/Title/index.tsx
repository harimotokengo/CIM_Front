import React, { forwardRef, Ref } from 'react'

import { LabelProps } from '../Label'
import { StyledTitle } from './Styled'

export interface TitleProps extends Omit<LabelProps, 'variant'> {
  variant?: TitleVariant
}

export type TitleVariant = 'sub'

export const Title = forwardRef((props: TitleProps, _: Ref<HTMLLabelElement>) => {
  const { className, ...rest } = props

  return (
    <StyledTitle className={className || ''} {...rest}>
      <span className="ch-label">{props.children}</span>
    </StyledTitle>
  )
})

export default Title
