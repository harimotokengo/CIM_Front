import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../components/Button'
import Flex from '../components/Flex'
import { fetchClientRequest } from '../store/actions/clientAction'
import { getClientSelector } from '../store/selectors/clientSelector'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const client = useSelector(getClientSelector)

  const handleClick = () => {
    dispatch(fetchClientRequest())
  }

  return (
    <Flex>
      <Button label="ボタン" onClick={() => handleClick()} />
      <p>{client ? `id:${client.id} name:${client.name}` : 'データがありません'}</p>
    </Flex>
  )
}

export default Home
