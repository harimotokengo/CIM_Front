import Flex from '../../views/atoms/Flex'
import ClientView from '../../views/organisms/Clients/Client'
import ProjectDetailSidebar from '../../views/organisms/DefaultLayout/Contents/Detail/Sidebar'
import HeaderMenu from '../../views/organisms/DefaultLayout/HeaderMenu'
import { HeaderMenuItemProps } from '../../views/organisms/DefaultLayout/HeaderMenu/HeaderMenuItem'

const menuItems: Omit<HeaderMenuItemProps, 'onClick'>[] = [
  { id: 'detail', label: '詳細情報', isCurrent: true },
  { id: 'list', label: 'リスト表示', isCurrent: false },
  { id: 'board', label: 'ボード表示', isCurrent: false },
  { id: 'timeline', label: 'タイムライン', isCurrent: false },
  { id: 'calendar', label: 'カレンダー', isCurrent: false },
  { id: 'message', label: 'メッセージ・記録', isCurrent: false },
  { id: 'file', label: 'ファイル', isCurrent: false },
]

const Client = () => (
  <>
    <HeaderMenu menuItems={menuItems} />
    <Flex layout="fill-space" style={{ overflowY: 'hidden' }}>
      <ProjectDetailSidebar />
      <Flex layout="stack" flex={1} style={{ height: '100%' }}>
        <ClientView />
      </Flex>
    </Flex>
  </>
)

export default Client
