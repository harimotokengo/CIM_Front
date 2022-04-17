import React from 'react'
import { Outlet } from 'react-router-dom'

import Flex from '../../views/atoms/Flex'
import ClientNav from '../../views/organisms/Client/ClientNav'

const Clients: React.FC = () => (
  <Flex layout="fill-space" style={{ height: '100vh' }}>
    <ClientNav />
    <Flex layout="stack" flex={1}>
      <Outlet />
    </Flex>
  </Flex>
)
export default Clients
