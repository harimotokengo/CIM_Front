import styled from 'styled-components'

export const StyledSelect = styled.select`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  /* Global/09. White */
  background: #ffffff;
  /* bd.gray */
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 4px;

  padding: 10px;
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
