/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchClientsRequest } from '../../../store/actions/clientAction'
import { getClientsSelector } from '../../../store/selectors/clientSelector'
import { Table } from '../../atoms/Table'
import { TableBody } from '../../atoms/Table/TableBody'
import { TableCol } from '../../atoms/Table/TableCol'
import { TableHeader } from '../../atoms/Table/TableHeader'
import { TableRow } from '../../atoms/Table/TableRow'
import { MattersNameCell } from '../../molecules/TableCell/MattersNameCell'
import MattersProjectCell, { MattersProjectCellProps } from '../../molecules/TableCell/MattersProjectCell'

const Matters = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const clients = useSelector(getClientsSelector)
  const [matters, setMatters] = useState<((MattersProjectCellProps & { clientId: number }) | null)[]>()

  useEffect(() => {
    dispatch(fetchClientsRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const newMatters = clients
      .map(x =>
        x.matters_attributes?.map(v => ({
          clientId: x.id || 0,
          matterGenreId: v.matter_genre_id,
          name: `${x.name} ${x.first_name}`,
          startDate: v.start_date ? moment(v.start_date).format('YYYY/M/D') : '',
          updateDate: v.updated_at ? moment(v.updated_at).format('YYYY/M/D') : '',
        }))
      )
      .flatMap(x => x || null)
      .filter(x => x !== null)
    setMatters(newMatters)
  }, [clients])

  const handleClick = (id: number) => {
    navigate(`/clients/${id}`)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCol>案件</TableCol>
          <TableCol width="200px">担当者</TableCol>
          <TableCol width="200px">ステータス</TableCol>
        </TableRow>
      </TableHeader>
      <TableBody>
        {matters?.map(x =>
          x ? (
            <TableRow onClick={() => handleClick(x.clientId)}>
              <TableCol>
                <MattersProjectCell
                  matterGenreId={x.matterGenreId}
                  name={x.name}
                  startDate={x.startDate}
                  updateDate={x.updateDate}
                />
              </TableCol>
              <TableCol width="200px">
                <MattersNameCell />
              </TableCol>
              <TableCol width="200px">受任</TableCol>
            </TableRow>
          ) : (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <></>
          )
        )}
      </TableBody>
    </Table>
  )
}

export default Matters
