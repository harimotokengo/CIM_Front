/* eslint-disable @typescript-eslint/no-unsafe-return */
import { space, SpaceProps } from 'styled-system'

export interface BaseProps extends SpaceProps {
  id?: string
  tag?: any
  css?: string
  className?: string
}

export const baseStyles = ({ css }: BaseProps) => (css ? `@media { ${css} };` : '')
export const baseSpacing = (props: BaseProps) => space(props)
