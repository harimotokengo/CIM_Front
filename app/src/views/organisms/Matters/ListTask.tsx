import { useState } from 'react'

import caretDown from '../../../assets/images/caret_down.svg'
import caretRight from '../../../assets/images/caret_right.svg'
import circleCheckImg from '../../../assets/images/circle_check.svg'
import plusCircle from '../../../assets/images/plus_circle.svg'
import { Drawer } from '../../atoms/Drawer'
import Label from '../../atoms/Label'
import { Table } from '../../atoms/Table'
import { TableBody } from '../../atoms/Table/TableBody'
import { TableCol } from '../../atoms/Table/TableCol'
import { TableRow } from '../../atoms/Table/TableRow'
import { ClientListTaskCell } from '../../atoms/TableCell/ClientListTaskCell'
import { NamePeople } from '../../atoms/TableCell/NamePeple'
import { PriorityTaskCell } from '../../atoms/TableCell/PriorityTaskCell'
import { TimeWorkCell } from '../../atoms/TableCell/TimeWorkCell'
// import NewTask from '../Clients/NewTask'
import DetailTask from '../Clients/NewTask/DetailTask'
import { ListWorksCellProps } from './ListWork'

// eslint-disable-next-line no-shadow
export enum TaskPriority {
  High = 0,
  Medium = 1,
  Low = 2,
}
export interface Task {
  name: string
  status: boolean
  manager: string
  deadline: string
  priority: TaskPriority
  timeWork: number
}

export const boxTaskPriority = [
  { id: 0, value: '高い', color: '#FF7070' },
  { id: 1, value: '中', color: '#FFC93D' },
  { id: 2, value: '低い', color: '#55C6BF' },
]
const ListTask = ({
  workTitle,
  listTask,
  showTask = false,
  actioning = false,
}: ListWorksCellProps & { showTask: boolean; actioning: boolean }) => {
  const caretDownIcon = <img alt="caret_down" src={caretDown} style={{ margin: '0 5px' }} />
  const caretRightIcon = <img alt="caret_right" src={caretRight} style={{ margin: '0 5px' }} />
  const plusCircleIcon = <img alt="plusCircle" src={plusCircle} style={{ width: '21px', height: '21px' }} />
  const circleCheckIcon = <img alt="icon_check" src={circleCheckImg} style={{ width: '18px', height: '18px' }} />
  const [showListTask, setShowListTask] = useState(showTask)
  const [showTaskDrawer, setShowTaskDrawer] = useState(false)
  const [dataDetail, setDataDetail] = useState<Task>()

  return (
    <div>
      {!actioning && (
        <h3
          style={{ padding: '20px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => setShowListTask(!showListTask)}
          aria-hidden="true"
        >
          <span>{showListTask ? caretDownIcon : caretRightIcon}</span>
          {workTitle}
        </h3>
      )}

      {showListTask &&
        listTask?.map(
          task =>
            task && (
              <Table>
                <TableBody>
                  <TableRow
                    onClick={() => {
                      setShowTaskDrawer(!showTaskDrawer)
                      setDataDetail(task)
                    }}
                  >
                    <TableCol>
                      <ClientListTaskCell name={task.name} />
                    </TableCol>
                    <TableCol width="200px">
                      <NamePeople />
                    </TableCol>
                    <TableCol width="200px">{task.deadline}</TableCol>
                    <TableCol width="200px">
                      <PriorityTaskCell
                        value={boxTaskPriority[task.priority].value}
                        color={boxTaskPriority[task.priority].color}
                      />
                    </TableCol>
                    <TableCol width="200px">
                      <TimeWorkCell timeWork={task.timeWork} showTitle />
                    </TableCol>
                  </TableRow>
                </TableBody>
              </Table>
            )
        )}
      {!actioning && (
        <Label
          variant="icon"
          icon={plusCircleIcon}
          onClick={() => setShowTaskDrawer(!showTaskDrawer)}
          style={{ padding: '15px 25px', cursor: 'pointer' }}
        >
          タスクを追加
        </Label>
      )}

      {showTaskDrawer && (
        <Drawer onClosed={() => setShowTaskDrawer(false)} width="456px">
          <div style={{ boxShadow: '-15px 0px 17px -15px rgba(0,0,0,0.2)', height: '100%' }}>
            <Label variant="icon" icon={circleCheckIcon} style={{ padding: '18px 14px' }}>
              完了する
            </Label>
            <div style={{ padding: '26px 40px' }}>
              <DetailTask widthLabel="60px" dataDetail={dataDetail} />
            </div>
          </div>
        </Drawer>
      )}
    </div>
  )
}
export default ListTask
