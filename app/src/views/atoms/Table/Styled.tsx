import styled from 'styled-components'

import { TableColProps } from './TableCol'

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  border-top: 1px solid #dedede;
`

export const StyledTableHeader = styled.div`
  * {
    &:hover {
      cursor: unset !important;
      background: unset !important;
    }

    &:focus {
      cursor: unset !important;
      background: unset !important;
    }

    &:active {
      cursor: unset !important;
      background: unset !important;
    }
  }
`

export const StyledTableBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  /* IE, Edge 対応 */
  -ms-overflow-style: none;
  /* Firefox 対応 */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledTableRow = styled.div`
  display: flex;
  flex-direction: row;

  &:hover {
    cursor: pointer;
    background: #bfc9d233;
  }

  &:focus {
    background: #bfc9d233;
  }

  &:active {
    background: #bfc9d233;
  }
`

export const StyledTableCol = styled.div<Omit<TableColProps, 'children'>>`
  display: flex;
  flex-direction: column;
  flex: auto;
  justify-content: center;
  align-items: start;
  padding: 5px 24px;
  min-height: 60px;

  border-right: 1px solid #dedede;
  border-bottom: 1px solid #dedede;

  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;

  flex: auto;
  ${props => props.width && { width: props.width, flexGrow: 0, flexShrink: 0 }};
`

export const StyledCell = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
