import React from 'react'

import Flex from '../../../atoms/Flex'
import MainOffice from './MainOffice'
import NavOffice from './NavOffice'

interface AddOfficeProps {
  onCancel: () => void
}

const AddOffice = ({ onCancel }: AddOfficeProps) => (
  <Flex layout="fill">
    <NavOffice />
    <Flex layout="stack" flex={1}>
      <MainOffice onCancel={onCancel} />
    </Flex>
  </Flex>
)
export default AddOffice
