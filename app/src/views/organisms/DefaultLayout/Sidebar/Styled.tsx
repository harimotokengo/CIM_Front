import styled from 'styled-components'

interface FlexProps {
  isNarrow: boolean
  showLabel: boolean
}

interface SidebarItemProps {
  isCurrent: boolean
}

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  background-color: white;

  height: 100vh;
  color: #39434d;
  background-color: #ffffff;
  width: ${props => (props.isNarrow ? '70px' : '240px')};
  box-shadow: 8px 0px 19px rgba(0, 0, 0, 0.06);

  .narrow-disable {
    display: ${props => (props.showLabel ? 'block' : 'none')};
  }

  .sidebar-item-sub {
    margin-left: ${props => (!props.isNarrow ? '48px' : '24px')};
  }

  transition: all 0.2s;
`

export const StyledHeader = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const StyledLabel = styled.label`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  color: #f94144;

  cursor: pointer;
`

export const StyledCloseButton = styled.label``

export const StyledSidebarItemWrapper = styled.div`
  margin: 6px 24px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const StyledSidebarItemIndentWrapper = styled.div`
  display: flex;
  width: 24px;
`

export const StyledSidebarItem = styled.label<SidebarItemProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: ${props => (props.isCurrent ? 700 : 400)};
  font-size: 14px;
  line-height: 20px;
  color: #39434d;

  cursor: pointer;
`

export const StyledSidebarSeparatorWrapper = styled.div`
  margin: 10px 0;
  height: 40px;
  display: flex;
  align-items: center;
`

export const StyledSidebarSeparator = styled.div`
  width: 100%;
  border-top: 1px solid rgba(191, 201, 210, 0.2);
`

export const StyledSidebarBottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  padding-bottom: 40px;
`
