import Flex from '../../../atoms/Flex'
import ProjectDetailSidebar from '../../DefaultLayout/Contents/Detail/Sidebar'
import ClientView from '.'

const ClientDetail = () => (
  <Flex layout="fill" style={{ overflowY: 'hidden' }}>
    <ProjectDetailSidebar />
    <Flex layout="stack" flex={1} style={{ height: '100%' }}>
      <ClientView />
    </Flex>
  </Flex>
)

export default ClientDetail
