import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchClientRequest } from '../../../store/actions/clientAction'
// import { getErrorSelector, getPendingSelector } from '../../../store/selectors/clientSelector'
import Button from '../../atoms/Button'
import Flex from '../../atoms/Flex'
import Footer from '../../atoms/Footer'
import { Main } from '../../atoms/Main'
import ClientFormEdit from '../../atoms/ReduxForm/Form/ClientFormEdit'
import { ClientEditSubmitButton } from '../../atoms/ReduxForm/Submit/ClientEditSubmit'
import PersonalEditForm from './Personal/ProfileEdit'

const Client = () => {
  const dispatch = useDispatch()
  // const [requesting, setRequesting] = useState(false)
  // const pending = useSelector(getPendingSelector)
  // const error = useSelector(getErrorSelector)

  useEffect(() => {
    dispatch(fetchClientRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect(() => {
  //   if (requesting && error) {
  //     alert('更新に失敗しました！')
  //   } else if (requesting && !pending) {
  //     alert('更新しました！')
  //   }
  //   setRequesting(pending)
  // }, [pending, requesting, error])

  return (
    <ClientFormEdit>
      <Main>
        <Flex layout="fill-space-horizontal" justifyContent="center">
          <Flex container flexDirection="column" mt="20px" mb="20px" gap="20px">
            <PersonalEditForm />
          </Flex>
        </Flex>
      </Main>
      <Footer>
        <Flex layout="fill-space-centered" gap="24px">
          <Button variant="secondary" label="キャンセル" />
          <ClientEditSubmitButton />
        </Flex>
      </Footer>
    </ClientFormEdit>
  )
}

export default Client
