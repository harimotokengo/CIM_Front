// import moment from 'moment'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import checkImg from '../../../assets/images/check.svg'
import chevronDown from '../../../assets/images/chevron_down.svg'
import filterImg from '../../../assets/images/filter.svg'
import sortImg from '../../../assets/images/sort.svg'
import { fetchClientsRequest } from '../../../store/actions/clientAction'
import { getClientsSelector } from '../../../store/selectors/clientSelector'
import { getFilterSelector } from '../../../store/selectors/filterSelector'
import Flex from '../../atoms/Flex'
import GroupButtonCheck from '../../atoms/GroupButtonCheck'
import { Table } from '../../atoms/Table'
import { TableCol } from '../../atoms/Table/TableCol'
import { TableHeader } from '../../atoms/Table/TableHeader'
import { TableRow } from '../../atoms/Table/TableRow'
import HeaderMenuItem from '../DefaultLayout/HeaderSearchMenu/HeaderMenuItem'
import { StyledHeaderSearchMenuContainer } from '../DefaultLayout/HeaderSearchMenu/Styled'
import ListTask, { Task } from './ListTask'

export interface ListWorksCellProps {
  workTitle: string
  listTask: Task[]
}
const ListWork = () => {
  const dispatch = useDispatch()
  const clients = useSelector(getClientsSelector)
  const filter = useSelector(getFilterSelector)
  const [listWorks, setListWorks] = useState<ListWorksCellProps[]>([])
  const [listWorksShow, setListWorksShow] = useState<ListWorksCellProps[]>([])
  const [actioning, setActioning] = useState(false)
  useEffect(() => {
    dispatch(fetchClientsRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const newListWorks = [
      {
        workTitle: '作業段階のタイトルAA',
        listTask: [
          {
            name: 'タスクタイトル表示A',
            status: false,
            manager: '姓名',
            deadline: '2月28',
            priority: 0,
            timeWork: 60,
          },
          {
            name: 'タスクタイトル表示C',
            status: false,
            manager: '姓名',
            deadline: '2月29',
            priority: 1,
            timeWork: 60,
          },
          {
            name: 'タスクタイトル表示B',
            status: false,
            manager: '姓名',
            deadline: '2月27',
            priority: 2,
            timeWork: 60,
          },
        ],
      },
      {
        workTitle: '作業段階のタイトルBB',
        listTask: [],
      },
    ]
    setListWorks(newListWorks)
    setListWorksShow([...newListWorks])
  }, [clients, filter])

  const chevronDownIcon = <img alt="chevron_down" src={chevronDown} style={{ height: '17px' }} />

  const checkIcon = <img alt="check" src={checkImg} style={{ width: '18px', height: '18px', opacity: 0.5 }} />
  const filterIcon = <img alt="filter" src={filterImg} style={{ width: '18px', height: '18px', opacity: 0.5 }} />
  const sortIcon = <img alt="sort" src={sortImg} style={{ width: '18px', height: '18px', opacity: 0.5 }} />

  // const [filterByTaskName, setFilterByTaskName] = useState(true)
  const listStatusTask = ['すべてのタスク', '未完了のタスク', '完了したタスク']
  const listTypeSearch = ['マイタスクのみ', '今週期限', '来週期限', '期限超過']
  const listTypeSort = ['なし', '期日順', 'あいうえお順', '作成日時']

  const filterTask = (listChecked: boolean[]) => {
    setActioning(true)
    const newListWorkShow: ListWorksCellProps[] = []
    console.log(listChecked)
    listChecked.forEach((el, i) => el && newListWorkShow.push(listWorks[i]))
    setListWorksShow(newListWorkShow)
  }
  const sortTask = (listChecked: boolean[]) => {
    const listTask: Task[] = []
    const indexChecked = listChecked.findIndex(el => !!el)
    switch (listTypeSort[indexChecked]) {
      case 'なし':
        setActioning(false)
        setListWorksShow(listWorks)
        break
      case '期日順':
        setActioning(true)
        listWorksShow.forEach(el => el.listTask.forEach(task => listTask.push(task)))
        listTask.sort((n1, n2) => {
          if (n1.deadline > n2.deadline) return 1
          if (n1.deadline < n2.deadline) return -1
          return 0
        })
        setListWorksShow([{ workTitle: 'listSortTilte', listTask }])
        break
      case 'あいうえお順':
        setActioning(true)
        listWorksShow.forEach(el => el.listTask.forEach(task => listTask.push(task)))
        listTask.sort((n1, n2) => {
          if (n1.name > n2.name) return 1
          if (n1.name < n2.name) return -1
          return 0
        })
        setListWorksShow([{ workTitle: 'listSortTilte', listTask }])
        break
      case '作成日時':
        setActioning(false)

        // setListWorksShow(newListWorkShow)
        break
      default:
    }
  }
  return (
    <div>
      <StyledHeaderSearchMenuContainer>
        <GroupButtonCheck
          label={<HeaderMenuItem id={0} icon={checkIcon} label="すべてのタスク" />}
          type="radio"
          values={listStatusTask}
          onClickOption={(listIndex: boolean[]) => console.log(listIndex)}
        />
        <GroupButtonCheck
          label={<HeaderMenuItem id={2} icon={filterIcon} label="絞り込み" />}
          type="radio"
          values={listTypeSearch}
          onClickOption={(listIndex: boolean[]) => console.log(listIndex)}
        />
        <GroupButtonCheck
          label={<HeaderMenuItem id={3} icon={sortIcon} label="ソート" />}
          type="radio"
          values={listTypeSort}
          onClickOption={(listIndex: boolean[]) => sortTask(listIndex)}
        />
      </StyledHeaderSearchMenuContainer>

      <Table>
        <TableHeader>
          <TableRow>
            <TableCol>
              <Flex alignItems="center" style={{ width: '100%' }} justifyContent="space-between">
                <div>タスク名</div>

                <GroupButtonCheck
                  label={<div>{chevronDownIcon}</div>}
                  type="checkbox"
                  title="すべて表示"
                  values={listWorks?.map(el => el?.workTitle)}
                  onClickOption={(listIndex: boolean[]) => filterTask(listIndex)}
                  defaultValue
                />
                {/* {filterByTaskName && <HeaderSearchBox />} */}
              </Flex>
            </TableCol>
            <TableCol width="200px">担当者</TableCol>
            <TableCol width="200px">期日</TableCol>
            <TableCol width="200px">優先順位</TableCol>
            <TableCol width="200px">作業時間</TableCol>
          </TableRow>
        </TableHeader>
        <div style={{ minHeight: 200 }}>
          {listWorksShow?.map((el, i) => (
            <ListTask
              workTitle={el?.workTitle || ''}
              listTask={el?.listTask || []}
              showTask={!i}
              actioning={actioning}
            />
          ))}
        </div>
      </Table>
    </div>
  )
}
export default ListWork
