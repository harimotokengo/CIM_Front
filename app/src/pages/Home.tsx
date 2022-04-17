import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchClientRequest } from '../store/actions/clientAction'
import { getClientSelector } from '../store/selectors/clientSelector'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const client = useSelector(getClientSelector)

  const handleClick = () => {
    dispatch(fetchClientRequest())
  }

  return (
    <>
      <input type="button" onClick={() => handleClick()} />
      <p>{client ? `id:${client.id || ''} name:${client.name}` : 'データがありません'}</p>
    </>
  )
}

export default Home
