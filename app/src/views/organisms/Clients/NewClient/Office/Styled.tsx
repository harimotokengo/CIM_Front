import styled from 'styled-components'

export const StyledOfficeProfile = styled.div`
  width: 534px;
  marginBottom: 20px;
`

export const StyledP = styled.p` 
  width: 255px;
  height: 18px;

  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;

  color: #39434D;

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const StyledForm = styled.form`
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;

  width: 534px;
  height: 40px;

  /* Global/09. White */
  background: #FFFFFF;

  /* bd.gray */
  border: 1px solid #DEDEDE;
  border-radius: 4px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`
