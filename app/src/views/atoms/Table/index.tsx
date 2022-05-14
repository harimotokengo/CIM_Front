import { ReactNode } from 'react'

import { BaseProps } from '../Base'
import { StyledTable } from './Styled'

interface TableProps extends BaseProps {
  children: ReactNode | ReactNode[]
}

export const Table = ({ children, ...rest }: TableProps) => <StyledTable {...rest}>{children}</StyledTable>
