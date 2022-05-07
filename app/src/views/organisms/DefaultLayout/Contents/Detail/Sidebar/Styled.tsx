import styled from 'styled-components'

export const StyledSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  padding-top: 80px;
  color: #39434d;
  box-shadow: 8px 0px 19px rgba(0, 0, 0, 0.06);

  > :first-child {
    border-top: 1px solid rgba(191, 201, 210, 0.2);
  }
`

export const StyledSidebarItemWrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid rgba(191, 201, 210, 0.2);
  cursor: pointer;
`

export const StyledSidebarItem = styled.label`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #39434d;

  margin-left: 24px;
`
