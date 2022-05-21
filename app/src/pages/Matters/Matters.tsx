import Flex from '../../views/atoms/Flex'
import HeaderSearchMenu from '../../views/organisms/DefaultLayout/HeaderSearchMenu'
import MattersView from '../../views/organisms/Matters/Matters'

const Matters = () => (
  <>
    <HeaderSearchMenu />
    <Flex layout="fill" style={{ overflowY: 'hidden' }}>
      <Flex layout="stack" flex={1} style={{ height: '100%' }}>
        <MattersView />
      </Flex>
    </Flex>
  </>
)

export default Matters
