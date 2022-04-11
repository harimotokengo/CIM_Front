import { space, SpaceProps } from 'styled-system'

export interface BaseProps extends SpaceProps {
  css?: string
  className?: string
}

/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/explicit-function-return-type */
export const baseStyles = ({ css }: BaseProps) => (css ? `@media { ${css} };` : '')
export const baseSpacing = (props: BaseProps) => space(props)
/* eslint-enable @typescript-eslint/no-unsafe-return, @typescript-eslint/explicit-function-return-type */
