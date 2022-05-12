import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Element as ScrollElement } from 'react-scroll'
import { FieldArray } from 'redux-form'

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
import MatterForm from '../Matter/Matter'
import CorpForm from './Corp/Profile'
import PersonalForm from './Personal/Profile'

interface MainClientProps {
  onCancel: () => void
}

const views = ['個人', '法人', '問い合わせ']

const MainClient = ({ onCancel }: MainClientProps) => {
  const [view, setView] = useState(0)
  const [requesting, setRequesting] = useState(false)
  const pending = useSelector(getPendingSelector)
  const error = useSelector(getErrorSelector)

  useEffect(
    () => () => {
      setRequesting(false)
    },
    []
  )

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
        return <PersonalForm />
      case 1:
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
      <Main id="client-form-main">
        <Flex layout="fill-space-horizontal" justifyContent="center">
          <Flex container flexDirection="column" mt="20px" mb="20px" gap="20px">
            <ScrollElement name="profile" />
            <Title id="profile">クライアント登録</Title>
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
            <ScrollElement name="matter" />
            <Title id="matter">案件登録</Title>
            {/* @ts-ignore */}
            <FieldArray name="matters_attributes" component={MatterForm} />
          </Flex>
        </Flex>
      </Main>
      <Footer>
        <Flex layout="fill-space-centered" gap="24px">
          <Button variant="secondary" label="キャンセル" onClick={handleCancel} />
          <ClientSubmitButton />
        </Flex>
      </Footer>
    </ClientForm>
  )
}

export default MainClient
