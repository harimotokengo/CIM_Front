import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change } from 'redux-form'

import { getErrorSelector, getPendingSelector } from '../../../../store/selectors/clientSelector'
import Button from '../../../atoms/Button'
import Flex from '../../../atoms/Flex'
import Footer from '../../../atoms/Footer'
import { Main } from '../../../atoms/Main'
import ClientForm from '../../../atoms/ReduxForm/Form/ClientForm'
import { ClientSubmitButton } from '../../../atoms/ReduxForm/Submit/ClientSubmit'
// import Submit from '../../atoms/ReduxForm/Submit'
import Title from '../../../atoms/Title'
import LargeButton from '../../../molecules/Button/LargeButton'
import CorpForm from './Corp/Profile'
import PersonalForm from './Personal/Profile'

interface MainClientProps {
  onCancel: () => void
}

const views = ['個人', '法人', '問い合わせ']

const MainClient = ({ onCancel }: MainClientProps) => {
  const dispatch = useDispatch()
  const [view, setView] = useState(0)
  const [requesting, setRequesting] = useState(false)
  const pending = useSelector(getPendingSelector)
  const error = useSelector(getErrorSelector)

  useEffect(() => {
    if (requesting && error) {
      alert('登録に失敗しました！')
    } else if (requesting && !pending) {
      alert('登録しました！')
    }
    setRequesting(pending)
  }, [pending, requesting, error])

  const CurrentForm = useCallback(() => {
    switch (view) {
      case 0:
        dispatch(change('client_form', 'client_type_id', 1))
        return <PersonalForm />
      case 1:
        dispatch(change('client_form', 'client_type_id', 2))
        return <CorpForm />
      default:
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return <></>
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view])

  const handleCancel = () => {
    onCancel()
  }

  return (
    <ClientForm>
      <Main>
        <Flex layout="fill-space-horizontal" justifyContent="center">
          <Flex container flexDirection="column" mt="20px" mb="20px" gap="20px">
            <Title>クライアント登録</Title>
            <Flex container flexDirection="row" gap="10px">
              {views.map((x, i) => (
                /* eslint-disable react/no-array-index-key */
                <LargeButton
                  key={i}
                  variant={view === i ? 'select' : 'secondary'}
                  label={x}
                  onClick={() => setView(i)}
                />
                /* eslint-enable react/no-array-index-key */
              ))}
            </Flex>
            <CurrentForm />
          </Flex>
        </Flex>
      </Main>
      <Footer>
        <Flex layout="fill-space-centered" gap="24px">
          <Button variant="secondary" label="キャンセル" onClick={handleCancel}/>
          <ClientSubmitButton />
        </Flex>
      </Footer>
    </ClientForm>
  )
}

export default MainClient
