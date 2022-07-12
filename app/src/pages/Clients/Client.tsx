import { useState } from 'react'

// import Flex from '../../views/atoms/Flex'
// import ClientView from '../../views/organisms/Clients/Client'
import ClientDetail from '../../views/organisms/Clients/Client/ClientDetail'
// import ProjectDetailSidebar from '../../views/organisms/DefaultLayout/Contents/Detail/Sidebar'
import HeaderMenu from '../../views/organisms/DefaultLayout/HeaderMenu'
import { HeaderMenuItemProps } from '../../views/organisms/DefaultLayout/HeaderMenu/HeaderMenuItem'
import ClientList from '../../views/organisms/Matters/ListWork'
import Records from '../../views/organisms/Matters/Records'

const menuItems: Omit<HeaderMenuItemProps, 'onClick'>[] = [
  { id: 'detail', label: '詳細情報', isCurrent: true },
  { id: 'list', label: 'リスト表示', isCurrent: false },
  { id: 'board', label: 'ボード表示', isCurrent: false },
  { id: 'timeline', label: 'タイムライン', isCurrent: false },
  { id: 'calendar', label: 'カレンダー', isCurrent: false },
  { id: 'message', label: 'メッセージ・記録', isCurrent: false },
  { id: 'file', label: 'ファイル', isCurrent: false },
]

const Client = () => {
  const [items, setItems] = useState(menuItems)

  return (
    <>
      <HeaderMenu items={items} setItems={setItems} />
      {items[0].isCurrent && <ClientDetail />}
      {items[1].isCurrent && <ClientList />}
      {items[5].isCurrent && <Records />}
    </>
  )
}

export default Client
