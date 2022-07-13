/* eslint-disable */
import React, { FC, ReactNode } from 'react'
import { FlexboxProps } from 'styled-system'

import { BaseProps } from '../Base'
import { StyledFlex } from './Styled'

type Layout = 'fill' | 'fill-centered' | 'fill-horizontal' | 'fill-horizontal-centered' | 'equal-columns' | 'stack'

export interface FlexProps extends BaseProps, FlexboxProps {
  children: ReactNode
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
  flexBasis = 'auto',
  flexDirection = 'row',
  flexShrink = 1,
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
  gap,
  ...props
}) => (
  <StyledFlex
    alignItems={alignItems}
    flexBasis={flexBasis}
    flexDirection={flexDirection}
    flexShrink={flexShrink}
    flexWrap={flexWrap}
    justifyContent={justifyContent}
    as={tag}
    className={className || ''}
    gap={gap}
    {...props}
  >
    {children}
  </StyledFlex>
)

export default Flex
