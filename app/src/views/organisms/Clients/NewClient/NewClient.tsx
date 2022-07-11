import React from 'react'

import Flex from '../../../atoms/Flex'
import MainClient from './MainClient'
import NavClient from './NavClient'

interface NewClientProps {
  onCancel: () => void
}

// NavClientとMainClientをFlexのStyleを反映して表示
// NavClient=左メニュー、MainClient=入力画面
const NewClient = ({ onCancel }: NewClientProps) => (
  <Flex layout="fill">
    <NavClient />
    <Flex layout="stack" flex={1}>
      <MainClient onCancel={onCancel} />
    </Flex>
  </Flex>
)
export default NewClient
