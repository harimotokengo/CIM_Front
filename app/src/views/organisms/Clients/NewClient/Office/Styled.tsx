import styled from 'styled-components'

export const StyledOfficeProfile = styled.div`
  width: 534px;
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

export const Form = styled.form`
  width: 534px;
`
// labelって名前の方が良い
export const FormLabel = styled.div`
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

export const FormInput = styled.input`
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
export const Row = styled.div`
  padding-bottom: 24px;
`

export const PlanButton = styled.label`
  box-sizing: border-box;
  width: 200px;
  height: 59px;
  top: 202px;
  padding: 11px 12px;
  text-align: left;

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

export const PlanButtonTitle = styled.p`
  left: 0px;
  top: 0%;
  bottom: 51.35%;

  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  color: #000000;
`

export const PlanButtonSubTitle = styled.p`
  left: 0px;
  top: 51.35%;
  bottom: 0%;

  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 18px;

  color: #A4A4A4;
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
export const Flex = styled.div`
  width: 40em;
  display: flex;
  justify-content: space-between;
`

export const FormTitle = styled.div`
  width: 255px;
  height: 24px;
  left: 456px;
  top: 301px;
  margin-top: 34px;
  margin-bottom: 34px;

  /* md/Text md Light */
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 24px;

  /* identical to box height, or 150% */

  /* bd.dark */
  color: #39434D;
`
