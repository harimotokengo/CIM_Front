import styled from 'styled-components'

interface InputSelectProps {
  width?: string
}

interface StatusProps {
  color: string
  width?: string
  height?: string
}

export const StyledSelect = styled.select<InputSelectProps>`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  width: ${props => (props.width ? props.width : '100%')};

  /* Global/09. White */
  background: #ffffff;
  /* bd.gray */
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 4px;

  padding: 7px;
  color: #343a40;

  option {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;

    background: #ffffff;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`
export const StyledSelectStatus = styled.select<StatusProps>`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  width: ${props => props.width};

  /* Global/09. White */
  background: #ffffff;
  /* bd.gray */
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 4px;

  padding: 7px;
  color: white;
  background-color: ${props => props.color};
  &:focus-visible {
    outline: none;
  }
  text-align: center;
  option {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: left;

    background: #ffffff;
    color: black;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`
