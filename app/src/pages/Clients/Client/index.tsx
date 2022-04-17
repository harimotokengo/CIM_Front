import React from 'react'

import Flex from '../../../views/atoms/Flex'
import { Main } from '../../../views/atoms/Main'
import ClientBody from '../../../views/organisms/Client/ClientBody'
import ClientFooter from '../../../views/organisms/Client/ClientFooter'

const Client: React.FC = () => (
  <>
    <Main>
      <Flex layout="fill-space-horizontal" justifyContent="center">
        <ClientBody />
      </Flex>
    </Main>
    <ClientFooter />
  </>
)

export default Client
