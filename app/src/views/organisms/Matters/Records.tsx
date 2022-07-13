// import moment from 'moment'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import circleCheckImg from '../../../assets/images/circle_check.svg'
import plusCircle from '../../../assets/images/plus_circle.svg'
import { fetchClientsRequest } from '../../../store/actions/clientAction'
import { getClientsSelector } from '../../../store/selectors/clientSelector'
import { getFilterSelector } from '../../../store/selectors/filterSelector'
import ButtonSwitch from '../../atoms/Button/buttonSwitch'
import { Drawer } from '../../atoms/Drawer'
import Flex from '../../atoms/Flex'
import Label from '../../atoms/Label'
import Modal, { ModalHandles } from '../../atoms/Modal'
import { Table } from '../../atoms/Table'
import { TableBody } from '../../atoms/Table/TableBody'
import { TableCol } from '../../atoms/Table/TableCol'
import { TableHeader } from '../../atoms/Table/TableHeader'
import { TableRow } from '../../atoms/Table/TableRow'
import { NamePeople } from '../../atoms/TableCell/NamePeple'
import { TimeWorkCell } from '../../atoms/TableCell/TimeWorkCell'
import NewRecord from '../Clients/NewRecord'

export interface Record {
  manager: string
  workDay: string
  content: string
  time: number
  detail: boolean
}
const Records = () => {
  const dispatch = useDispatch()
  const clients = useSelector(getClientsSelector)
  const filter = useSelector(getFilterSelector)
  const [listRecord, setListRecords] = useState<Record[]>([])
  const [showRecordDrawerDetail, setShowRecordDrawerDetail] = useState(-1)
  const [showNewRecordDrawer, setShowNewRecordDrawer] = useState(false)
  const newRecordRef = useRef<ModalHandles>(null)
  const plusCircleIcon = <img alt="plusCircle" src={plusCircle} style={{ width: '21px', height: '21px' }} />
  const circleCheckIcon = <img alt="icon_check" src={circleCheckImg} style={{ width: '18px', height: '18px' }} />

  useEffect(() => {
    dispatch(fetchClientsRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = () => {
    newRecordRef.current?.toggleModal()
    setShowNewRecordDrawer(!showNewRecordDrawer)
  }
  useEffect(() => {
    const newListRecords: Record[] = [
      {
        manager: '姓名1',
        workDay: '2月28',
        content:
          'から文献と前記以下で占めるませところられにて項でき以下応じ表現引用をてん書に、記事をの引用ませあり各の[原則なる科され掲載ただしを明示接触ものの場。',
        time: 60,
        detail: true,
      },
      {
        manager: '姓名2',
        workDay: '2月28',
        content:
          'から文献と前記以下で占めるませところられにて項でき以下応じ表現引用をてん書に、記事をの引用ませあり各の[原則なる科され掲載ただしを明示接触ものの場。',
        time: 60,
        detail: false,
      },
      {
        manager: '姓名1',
        workDay: '2月28',
        content:
          'から文献と前記以下で占めるませところられにて項でき以下応じ表現引用をてん書に、記事をの引用ませあり各の[原則なる科され掲載ただしを明示接触ものの場。',
        time: 60,
        detail: false,
      },
    ]
    setListRecords(newListRecords)
  }, [clients, filter])

  return (
    <div>
      <Label
        variant="icon"
        icon={plusCircleIcon}
        onClick={handleClick}
        style={{ padding: '15px 25px', cursor: 'pointer' }}
      >
        作業記録を追加
      </Label>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCol width="200px">担当者</TableCol>
            <TableCol width="200px">作業日</TableCol>
            <TableCol>作業内容</TableCol>
            <TableCol width="200px">時間</TableCol>
            <TableCol width="200px">明細</TableCol>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listRecord.map((record, index) => (
            <TableRow>
              <TableCol width="200px">
                <NamePeople name={record.manager} />
              </TableCol>
              <TableCol width="200px">
                <span onClick={() => setShowRecordDrawerDetail(index)} aria-hidden="true">
                  {record.workDay}
                </span>
              </TableCol>
              <TableCol>
                <span onClick={() => setShowRecordDrawerDetail(index)} aria-hidden="true">
                  {record.content}
                </span>
              </TableCol>
              <TableCol width="200px">
                <TimeWorkCell timeWork={record.time} showTitle={false} />
              </TableCol>
              <TableCol width="200px">
                <ButtonSwitch status={record.detail} />
              </TableCol>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {showRecordDrawerDetail > -1 && (
        <Drawer onClosed={() => setShowRecordDrawerDetail(-1)}>
          <div style={{ boxShadow: '-15px 0px 17px -15px rgba(0,0,0,0.2)', height: '100%' }}>
            <Label variant="icon" icon={circleCheckIcon} style={{ padding: '18px 14px' }}>
              完了する
            </Label>
            <NewRecord widthLabel="120px" data={listRecord[showRecordDrawerDetail]} />
          </div>
        </Drawer>
      )}

      <Modal ref={newRecordRef}>
        <Flex flexDirection="column" layout="fill" style={{ margin: '5%' }}>
          <div style={{ padding: 30, marginTop: 40 }}>
            <NewRecord widthLabel="120px" />
          </div>
        </Flex>
      </Modal>
    </div>
  )
}
export default Records
