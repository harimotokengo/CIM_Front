/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MATTER_STATUS } from '../../../constants/matters'
import { fetchClientsRequest } from '../../../store/actions/clientAction'
import { getClientsSelector } from '../../../store/selectors/clientSelector'
import { getFilterSelector } from '../../../store/selectors/filterSelector'
import { Table } from '../../atoms/Table'
import { TableBody } from '../../atoms/Table/TableBody'
import { TableCol } from '../../atoms/Table/TableCol'
import { TableHeader } from '../../atoms/Table/TableHeader'
import { TableRow } from '../../atoms/Table/TableRow'
import { MattersNameCell } from '../../atoms/TableCell/MattersNameCell'
import MattersProjectCell, { MattersProjectCellProps } from '../../atoms/TableCell/MattersProjectCell'

const Matters = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const clients = useSelector(getClientsSelector)
  const filter = useSelector(getFilterSelector)
  const [matters, setMatters] =
    useState<((MattersProjectCellProps & { clientId: number; matterStatus: string }) | null)[]>()

  useEffect(() => {
    dispatch(fetchClientsRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const newMatters = clients
      .map(x =>
        x.matters_attributes
          ?.filter(v =>
            filter.is_filter && filter.filter_key === 'matter_genre' ? v.matter_genre_id === filter.filter_value : true
          )
          .map(v => ({
            clientId: x.id || 0,
            matterGenreId: v.matter_genre_id,
            name: `${x.name} ${x.first_name}`,
            startDate: v.start_date ? moment(v.start_date).format('YYYY/M/D') : '',
            updateDate: v.updated_at ? moment(v.updated_at).format('YYYY/M/D') : '',
            matterStatus: MATTER_STATUS.find(a => a.id === v.matter_status_id)?.name.toString() || '',
          }))
      )
      .flatMap(x => x || null)
      .filter(x => x !== null)
    setMatters(newMatters)
  }, [clients, filter])

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
              <TableCol width="200px">{x.matterStatus}</TableCol>
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
