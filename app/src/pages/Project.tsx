import { Outlet } from 'react-router-dom'

import Flex from '../views/atoms/Flex'
import ProjectDetailSidebar from '../views/organisms/Project/Contents/Detail/Sidebar'
import ProjectHeader from '../views/organisms/Project/Header'
import ProjectHeaderMenu from '../views/organisms/Project/HeaderMenu'
import ProjectSidebar from '../views/organisms/Project/Sidebar'

const Project = () => (
  <Flex layout="fill-space" style={{ height: '100vh' }}>
    <ProjectSidebar />
    <Flex layout="stack" flex={1}>
      <ProjectHeader />
      <ProjectHeaderMenu />
      <Flex layout="fill-space" style={{ overflowY: 'hidden' }}>
        <ProjectDetailSidebar />
        <Flex layout="stack" flex={1} style={{ height: '100%' }}>
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
)
export default Project
