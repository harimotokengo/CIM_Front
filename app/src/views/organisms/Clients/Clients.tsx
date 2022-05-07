/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchClientsRequest } from "../../../store/actions/clientAction"
import { getClientsSelector } from "../../../store/selectors/clientSelector"

const Clients = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const clients = useSelector(getClientsSelector)

  useEffect(() => {
    dispatch(fetchClientsRequest())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = (id: number) => {
    navigate(`/clients/${id}`)
  }

  return (
    <ul>
      {clients.map(x =>
        <li style={{margin: '20px', cursor: 'pointer'}} onClick={() => handleClick(x.id!)}>{x.name} {x.first_name}</li>
      )}
    </ul>
  )
}

export default Clients
