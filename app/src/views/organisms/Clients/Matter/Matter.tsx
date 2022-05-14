import { SyntheticEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change, Field, FieldArray, WrappedFieldArrayProps } from 'redux-form'

import { MATTER_GENRE, MATTER_STATUS } from '../../../../constants/matters'
import { IMatter } from '../../../../store/models/clientModel'
import { getUserSelector } from '../../../../store/selectors/sessionSelector'
import Flex from '../../../atoms/Flex'
import { FlexItem } from '../../../atoms/FlexItem'
import FolderUrlCard from '../../../molecules/ReduxForm/Card/FolderUrlCard'
import { ReduxFormInput } from '../../../molecules/ReduxForm/Input'
import { MatterSelect } from '../../../molecules/ReduxForm/Select/MatterSelect'
import MatterJoin from './MatterJoin'

interface MatterStatus {
  index: number
  showStartDate: boolean
  showEndDate: boolean
}

interface MatterProps {
  isEdit?: boolean
}

const Matter = ({ fields, isEdit = false }: WrappedFieldArrayProps<IMatter> & MatterProps) => {
  const dispatch = useDispatch()
  const user = useSelector(getUserSelector)
  const [matterStatuses, setMatterStatuses] = useState<MatterStatus[]>([])

  useEffect(() => {
    fields.forEach((x, i) => {
      if (fields.get(i).user_id !== 0 && isEdit) return
      dispatch(change('client_form', `${x}.user_id`, user.id))
    })
    const newMatterStatuses = fields.map((_, i) => ({
      index: i,
      showStartDate: fields.get(i).matter_status_id === 1,
      showEndDate: fields.get(i).matter_status_id === 5,
    }))
    setMatterStatuses([...matterStatuses, ...newMatterStatuses])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields])

  const handleMatterStatusChange = (e: SyntheticEvent<HTMLSelectElement>, index: number) => {
    const currentMatterStatus: MatterStatus = {
      index,
      showStartDate: e.currentTarget.value === '1',
      showEndDate: e.currentTarget.value === '5',
    }
    if (matterStatuses.find(x => x.index === index)) {
      setMatterStatuses(
        matterStatuses.map(x => ({
          index: x.index,
          showStartDate: x.index === index ? e.currentTarget.value === '1' : x.showStartDate,
          showEndDate: x.index === index ? e.currentTarget.value === '5' : x.showEndDate,
        }))
      )
    } else {
      setMatterStatuses([...matterStatuses, currentMatterStatus])
    }
  }

  return (
    <>
      {fields.map((x, i) => (
        <Flex flexDirection="column" gap="24px" style={{ width: '534px', marginBottom: '20px' }}>
          <FlexItem width="120px" stretch={false}>
            <Field name={`${x}.matter_genre_id`} label="案件区分" category={MATTER_GENRE} component={MatterSelect} />
          </FlexItem>
          <FlexItem width="120px">
            <Field
              name={`${x}.matter_status_id`}
              label="ステータス"
              category={MATTER_STATUS}
              component={MatterSelect}
              onChange={(e: SyntheticEvent<HTMLSelectElement>) => handleMatterStatusChange(e, i)}
            />
          </FlexItem>
          {!!matterStatuses.find(v => v.index === i) &&
            (matterStatuses.find(v => v.index === i)?.showStartDate ||
              matterStatuses.find(v => v.index === i)?.showEndDate) && (
            <FlexItem width="120px">
              {matterStatuses.find(v => v.index === i)?.showStartDate && (
                <Field name={`${x}.start_date`} label="受任日" component={ReduxFormInput} type="date" />
              )}
              {matterStatuses.find(v => v.index === i)?.showEndDate && (
                <Field name={`${x}.finish_date`} label="終了日" component={ReduxFormInput} type="date" />
              )}
            </FlexItem>
          )}
          {/* @ts-ignore */}
          <FieldArray name={`${x}.matter_joins_attributes`} component={MatterJoin} />
          {/* @ts-ignore */}
          <FieldArray label="URL" name={`${x}.folder_urls_attributes`} component={FolderUrlCard} />
        </Flex>
      ))}
    </>
  )
}

export default Matter
