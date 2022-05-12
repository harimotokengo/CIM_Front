import React, { forwardRef, LabelHTMLAttributes, Ref } from 'react'

import { BaseProps } from '../Base'
import { StyledLabel } from './Styled'

export interface LabelUrlProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'css'>, BaseProps {
  url: string
}

export const LabelUrl = forwardRef((props: LabelUrlProps, _: Ref<HTMLLabelElement>) => {
  const { className, url, ...rest } = props

  return (
    <StyledLabel className={className || ''} {...rest}>
      <span className="ch-label">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      </span>
    </StyledLabel>
  )
})

export default LabelUrl
