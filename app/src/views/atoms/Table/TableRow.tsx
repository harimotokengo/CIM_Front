import { ReactNode } from 'react'

import { StyledTableRow } from './Styled'

interface TableRowProps {
  children: ReactNode[]
  onClick?: () => void
}

export const TableRow = ({ children, onClick }: TableRowProps) => (
  <StyledTableRow onClick={() => onClick && onClick()}>{children}</StyledTableRow>
)
