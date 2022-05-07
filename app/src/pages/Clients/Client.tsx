import Flex from '../../views/atoms/Flex'
import ClientView from '../../views/organisms/Clients/Client'
import ProjectDetailSidebar from '../../views/organisms/DefaultLayout/Contents/Detail/Sidebar'
import ProjectHeaderMenu from '../../views/organisms/DefaultLayout/HeaderMenu'

const Client = () => (
  <>
    <ProjectHeaderMenu />
    <Flex layout="fill-space" style={{ overflowY: 'hidden' }}>
      <ProjectDetailSidebar />
      <Flex layout="stack" flex={1} style={{ height: '100%' }}>
        <ClientView />
      </Flex>
    </Flex>
  </>
)

export default Client
