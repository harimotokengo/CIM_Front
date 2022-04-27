import { ReactNode, useEffect, useState } from 'react'

import { StyledFlex } from './Styled'

interface SidebarContainerProps {
  headerComponent: ReactNode
  children: ReactNode | ReactNode[]
  isNarrow: boolean
}

const SidebarContainer = (props: SidebarContainerProps) => {
  const { isNarrow, headerComponent, children } = props
  const [showLabel, setShowLabel] = useState(false)

  useEffect(() => {
    if (isNarrow) {
      setShowLabel(!isNarrow)
    } else {
      setTimeout(() => {
        setShowLabel(!isNarrow)
      }, 200)
    }
  }, [isNarrow])

  return (
    <StyledFlex isNarrow={isNarrow} showLabel={showLabel}>
      {headerComponent}
      {children}
    </StyledFlex>
  )
}

export default SidebarContainer
