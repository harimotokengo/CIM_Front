import { StyledSVG } from './Styled'

export interface SVGProps {
  src: string
  color: string
  width: string
  height: string
}

const SVG = (props: SVGProps) => <StyledSVG {...props} />

export default SVG
