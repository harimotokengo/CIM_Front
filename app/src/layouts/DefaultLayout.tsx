import { Outlet } from 'react-router-dom'

import Flex from '../views/atoms/Flex'
import ProjectHeader from '../views/organisms/DefaultLayout/Header'
import ProjectSidebar from '../views/organisms/DefaultLayout/Sidebar'

const DefaultLayout = () => (
  <Flex layout="fill-space" style={{ height: '100vh' }}>
    <ProjectSidebar />
    <Flex layout="stack" flex={1}>
      <ProjectHeader />
      <Outlet />
    </Flex>
  </Flex>
)
export default DefaultLayout
