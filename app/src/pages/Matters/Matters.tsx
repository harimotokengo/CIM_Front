import Flex from '../../views/atoms/Flex'
import HeaderMenu from '../../views/organisms/DefaultLayout/HeaderMenu'
import { HeaderMenuItemProps } from '../../views/organisms/DefaultLayout/HeaderMenu/HeaderMenuItem'
import MattersView from '../../views/organisms/Matters/Matters'

const menuItems: Omit<HeaderMenuItemProps, 'onClick'>[] = [
  { id: 'matters', label: '案件', isCurrent: true },
  { id: 'clients', label: 'クライアント', isCurrent: false },
  { id: 'messages', label: 'メッセージ', isCurrent: false },
  { id: 'records', label: '作業記録', isCurrent: false },
]

const Matters = () => (
  <>
    <HeaderMenu menuItems={menuItems} />
    <Flex layout="fill" style={{ overflowY: 'hidden' }}>
      <Flex layout="stack" flex={1} style={{ height: '100%' }}>
        <MattersView />
      </Flex>
    </Flex>
  </>
)

export default Matters
