/* eslint-disable */
import React, { FC } from 'react'
import { FlexboxProps } from 'styled-system'

import { BaseProps } from '../Base'
import { StyledFlex } from './Styled'

type Layout = 'fill-space' | 'fill-space-horizontal' | 'fill-space-centered' | 'equal-columns' | 'stack'

export interface FlexProps extends BaseProps, FlexboxProps {
  container?: boolean
  flexShrink?: number
  layout?: Layout
  style?: {}
  gap?: string
}

export const Flex: FC<FlexProps> = ({
  children,
  className,
  tag,
  alignItems = 'stretch',
  container = false,
  flexBasis = 'auto',
  flexDirection = 'row',
  flexShrink = 1,
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
  ...props
}) => (
  <StyledFlex
    alignItems={alignItems}
    container={container}
    flexBasis={flexBasis}
    flexDirection={flexDirection}
    flexShrink={flexShrink}
    flexWrap={flexWrap}
    justifyContent={justifyContent}
    as={tag}
    className={className || ''}
    {...props}
  >
    {children}
  </StyledFlex>
)

export default Flex
