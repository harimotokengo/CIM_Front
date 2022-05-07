import styled from 'styled-components'

interface HeaderMenuProps {
  isCurrent: boolean
}

export const StyledHeaderMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 25px;

  border-bottom: 1px solid rgba(191, 201, 210, 0.2);
`

export const StyledHeaderMenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

export const StyledHeaderMenuItem = styled.div<HeaderMenuProps>`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  padding: 0 12px;

  font-size: ${props => (props.isCurrent ? '14px' : '13px')};
  color: ${props => (props.isCurrent ? '#39434D' : '#a4a4a4')};
  border-bottom: ${props => (props.isCurrent ? 'solid 2px #39434D' : 'none')};
`
