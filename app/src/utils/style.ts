import { css } from 'styled-components'

// use for elements that contain text for screen readers, but need no visual representation
export const visuallyHidden = css`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute !important;
`

export const ellipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const isValidCSSHex = (hex: string): boolean => /^#[0-9A-F]{6}$/i.test(hex)

export const hexTorgba = (hex: string, alpha: number = 1): string => {
  if (!isValidCSSHex(hex)) return ''

  const matchedHex = hex.match(/\w\w/g)
  if (!matchedHex) return ''

  const [r, g, b]: number[] = matchedHex.map(h => parseInt(h, 16))
  return `rgba(${r}, ${g}, ${b}, ${alpha || 1})`
}
