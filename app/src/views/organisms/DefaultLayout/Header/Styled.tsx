import styled from 'styled-components'

export const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;

  filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.06));

  .plus-circle path {
    color: '#F94144';
    background: '#F94144';
    fill: '#F94144';
  }
`

export const StyledHeaderLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
`

export const StyledHeaderRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  gap: 12px;
`

export const StyledCategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  gap: 12px;
`

export const StyledCategoryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 12px;
  background: #c2cfe0;
  border-radius: 2px;

  > p {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: white;
  }
`

export const SyledCategoryName = styled.p`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  display: flex;
  align-items: center;

  color: #39434d;
`

export const StyledStatusWrappr = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  gap: 5px;
`

export const StyledStatus = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #f94144;
`

export const StyledStatusLabel = styled.label`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`

export const StyledNameIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #a167bc;
  border: 1px solid #ffffff;

  > p {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 16px;
    color: white;
  }
`

export const StyledSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 12px;
  padding: 10px 12px;
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 79px;
  gap: 5px;

  position: relative;
`

export const StyledSearchInput = styled.input`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #343a40;
  border: none;

  &:focus {
    outline: 0;
  }
`

export const StyledHeaderSearchBoxWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  /* width: 312px; */
  width: 290px;
  height: 300px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  /* align-items: flex-start;
  justify-content: flex-start; */

  background: #ffffff;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.176);
  border-radius: ${props => props.theme.radii.default};
`

export const StyledHeaderSearchContents = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`

export const StyledHeaderSearchDetail = styled.div`
  height: 40px;
  border-top: 1px solid rgba(191, 201, 210, 0.2);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding-top: 10px;

  * {
    cursor: pointer;
  }
`

export const StyledHeaderSearchItemWrapper = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;

  * {
    cursor: pointer;
  }
`

export const StyledHeaderSearchItem = styled.label`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #343a40;
`

export const StyledHeaderAddButtonWrapper = styled.span`
  position: relative;

`

export const StyledHeaderAddBoxWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: -20px;
  /* width: 312px; */
  width: 180px;
  height: 150px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  /* align-items: flex-start;
  justify-content: flex-start; */

  background: #ffffff;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.176);
  border-radius: ${props => props.theme.radii.default};
`

export const StyledHeaderAddContents = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`

export const StyledHeaderAddItemWrapper = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;

  * {
    cursor: pointer;
  }
`

export const StyledHeaderAddItem = styled.label`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #343a40;
`

export const StyledHeaderAddOfficeWrapper = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;

  * {
    cursor: pointer;
  }
`

export const StyledHeaderAddOffice = styled.label`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #343a40;
`
