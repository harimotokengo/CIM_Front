import { useState } from 'react'

import HeaderMenuItem, { HeaderMenuItemProps } from './HeaderMenuItem'
import { StyledHeaderMenuContainer } from './Styled'

const defaultHeaderItems: Omit<HeaderMenuItemProps, 'onClick'>[] = [
  { id: 'detail', label: '詳細情報', isCurrent: true },
  { id: 'list', label: 'リスト表示', isCurrent: false },
  { id: 'board', label: 'ボード表示', isCurrent: false },
  { id: 'timeline', label: 'タイムライン', isCurrent: false },
  { id: 'calendar', label: 'カレンダー', isCurrent: false },
  { id: 'message', label: 'メッセージ・記録', isCurrent: false },
  { id: 'file', label: 'ファイル', isCurrent: false },
]

const HeaderMenu = () => {
  const [items, setItems] = useState(defaultHeaderItems)

  const handleClick = (id: string) => {
    const newItems: typeof items = items.map(x => ({
      ...x,
      isCurrent: x.id === id,
    }))
    setItems(newItems)
  }

  return (
    <StyledHeaderMenuContainer>
      {items.map(x => (
        <HeaderMenuItem key={x.id} id={x.id} label={x.label} isCurrent={x.isCurrent} onClick={handleClick} />
      ))}
    </StyledHeaderMenuContainer>
  )
}

export default HeaderMenu
