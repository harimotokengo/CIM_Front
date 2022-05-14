import styled from 'styled-components'

import { baseSpacing, baseStyles } from '../Base'

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledInputLabel = styled.label`
  font-weight: ${props => props.theme.fontSizes.label.fontWeight};
  font-size: ${props => props.theme.fontSizes.label.fontSize};
  line-height: ${props => props.theme.fontSizes.label.lineHeight};
  color: ${props => props.theme.label.color};
  background: ${props => props.theme.label.bg};

  margin-bottom: 5px;

  ${baseSpacing}
  ${baseStyles}
`

export const StyledInput = styled.input`
  font-weight: ${props => props.theme.fontSizes.input.fontWeight};
  font-size: ${props => props.theme.fontSizes.input.fontSize};
  line-height: ${props => props.theme.fontSizes.input.lineHeight};
  color: ${props => props.theme.input.color};
  background: ${props => props.theme.input.bg};
  border: ${props => props.theme.input.border};
  border-radius: ${props => props.theme.radii.default};

  padding: 11px 8px;

  ${baseSpacing}
  ${baseStyles}
`
