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
// 以下formの作成案
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

export const SForm = styled.form`
  width: 534px;
  marginBottom: 20px;
`

export const SFormHead = styled.div`
  width: 255px;
  height: 18px;
  margin-bottom: 0.8em;

  /* xs/Text xs Bold */
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;

  /* identical to box height, or 150% */

  /* bd.dark */
  color: #39434D;


  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`

export const SFormInput = styled.input`
  /* _base/Forms/01. Input/01. Small */

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

export const SFormTextArea = styled.textarea`
  border: none;
  width: 100%;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 4px;
  height: 10em;
  transition: 0.3s;

  &:focus {
    outline: none;
    background: #e7e7e7;
    transition: 0.3s;
  }
`
export const OForm = styled.div`
  padding-bottom: 24px;
`

export const PlanButton = styled.button`
  box-sizing: border-box;
  width: 200px;
  height: 59px;
  // left: 455px;
  top: 202px;

  background: #FFFFFF;

  border: 1px solid rgba(191, 201, 210, 0.2);

  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.045);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    border-color: #2070B9;
  }

  &:focus {
    outline: none;
  }

  .ch-icon {
    width: 21px;
    height: 21px;
    margin-right: 0.25rem;
  }
`

export const SPlanHead = styled.div`
  width: 255px;
  height: 18px;
  margin-bottom: 2em;

  /* xs/Text xs Bold */
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;

  /* identical to box height, or 150% */

  /* bd.dark */
  color: #39434D;


  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`
export const DPlan = styled.div`
  // width: 534px;
  width: 40em;
  marginBottom: 20px;
  display: flex;
  justify-content: space-between;
`
