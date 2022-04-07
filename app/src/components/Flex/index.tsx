import React, { FC } from 'react'

import { BaseProps } from '../Base'
import { StyledFlex } from './Styled'

type AlignItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'inherit' | 'initial' | 'stretch'

type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit'

type Layout = 'fill-space' | 'fill-space-centered' | 'equal-columns' | 'stack'

type FlexDirection = 'row' | 'column'
type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse'

export interface FlexProps extends BaseProps {
  alignItems?: AlignItems
  container?: boolean
  flexDirection?: FlexDirection
  flexWrap?: FlexWrap
  flex?: string
  flexBasis?: number
  flexGrow?: number
  flexShrink?: number
  justifyContent?: JustifyContent
  layout?: Layout
  style?: {} // eslint-disable-line @typescript-eslint/ban-types
}

export const Flex: FC<FlexProps> = ({
  children,
  className,
  alignItems = 'stretch',
  container = false,
  flex = 'auto',
  flexBasis = 1,
  flexDirection = 'row',
  flexShrink = 1,
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
  ...props
}) => (
  <StyledFlex
    alignItems={alignItems}
    container={container}
    flex={flex}
    flexBasis={flexBasis}
    flexDirection={flexDirection}
    flexShrink={flexShrink}
    flexWrap={flexWrap}
    justifyContent={justifyContent}
    data-testid="flex"
    className={className || ''}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </StyledFlex>
)

Flex.defaultProps = {
  alignItems: 'stretch',
  container: false,
  flexDirection: 'row',
  flexWrap: 'nowrap',
  flex: 'auto',
  flexBasis: 1,
  flexGrow: 1,
  flexShrink: 1,
  justifyContent: 'flex-start',
  layout: 'fill-space',
  style: {},
}

export default Flex
