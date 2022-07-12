import styled from 'styled-components'

interface InputProps {
  isError: boolean
  height?: string
}
interface BoxLabelProps {
  width: string
}

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledLabel = styled.label`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  color: #39434d;
  margin-bottom: 5px;
`

export const StyledBoxLabel = styled.span<BoxLabelProps>`
  width: ${props => props.width};
  text-align: right;
`
export const StyledBoxSelect = styled.div`
  flex: 1;
`
export const StyledInputLabel = styled.label`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #39434d;
  margin-bottom: 5px;
`

export const StyledInput = styled.input<InputProps>`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #343a40;

  background: #ffffff;
  border: ${props => (props.isError ? '2px solid #ff0000' : '1px solid #dedede')};
  box-sizing: border-box;
  border-radius: 4px;

  padding: 11px 8px;
`
