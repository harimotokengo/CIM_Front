import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change, Field, WrappedFieldArrayProps } from 'redux-form'

import { BELONGING_SIDE } from '../../../../constants/matters'
import { IMatterJoin } from '../../../../store/models/clientModel'
import { getUserSelector } from '../../../../store/selectors/sessionSelector'
import Flex from '../../../atoms/Flex'
import { FlexItem } from '../../../atoms/FlexItem'
import { MatterSelect } from '../../../molecules/ReduxForm/Select/MatterSelect'

const MatterJoin = ({ fields }: WrappedFieldArrayProps<IMatterJoin>) => {
  const dispatch = useDispatch()
  const user = useSelector(getUserSelector)

  useEffect(() => {
    fields.forEach((x, i) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const belongSideId = fields.get(i).belong_side_id as any
      if (belongSideId === 1 || belongSideId === '1') {
        console.warn('belongSideId = 1')
        if (fields.get(i).office_id) {
          console.warn('belongSideId = 1 dispatch')
          dispatch(change('client_form', `${x}.office_id`, undefined))
        }
        if (!fields.get(i).user_id) {
          dispatch(change('client_form', `${x}.user_id`, user.id))
        }
      } else if (belongSideId === 2 || belongSideId === '2') {
        console.warn('belongSideId = 2')
        if (fields.get(i).user_id) {
          console.warn('belongSideId = 2 dispatch')
          dispatch(change('client_form', `${x}.user_id`, undefined))
        }
        if (!fields.get(i).office_id) {
          dispatch(change('client_form', `${x}.office_id`, 100))
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields])

  return (
    <>
      {fields.map((x, _) => (
        <Flex container flexDirection="column" gap="24px" style={{ width: '534px', marginBottom: '20px' }}>
          <FlexItem width="120px">
            <Field name={`${x}.belong_side_id`} label="所属" category={BELONGING_SIDE} component={MatterSelect} />
          </FlexItem>
        </Flex>
      ))}
    </>
  )
}

export default MatterJoin
