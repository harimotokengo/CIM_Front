import { ReactNode } from 'react'

import { StyledTableHeader } from './Styled'

interface TableHeaderProps {
  children: ReactNode | ReactNode[]
}

export const TableHeader = ({ children }: TableHeaderProps) => <StyledTableHeader>{children}</StyledTableHeader>
