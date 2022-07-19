import { Element as ScrollElement } from 'react-scroll'

// import { getOfficeSelector } from '../../../../store/selectors/officeSelector'
// import { getErrorSelector } from '../../../../store/selectors/sessionSelector'
import Button from '../../../atoms/Button'
import Flex from '../../../atoms/Flex'
import Footer from '../../../atoms/Footer'
import { Main } from '../../../atoms/Main'
// import Title from '../../../atoms/Title'
import ClientForm from '../../../molecules/ReduxForm/Form/ClientForm'
import { OfficeSubmitButton } from '../../../molecules/ReduxForm/Submit/OfficeSubmit'
import OfficePayment from './Office/OfficePayment'
// import { OfficeSubmitButton } from '../../../molecules/ReduxForm/Submit/OfficeSubmit'
import OfficeProfile from './Office/OfficeProfile'
import OfficePlan from './Office/PlanButton'


interface MainOfficeProps {
  onCancel: () => void
}

const MainOffice = ({ onCancel }: MainOfficeProps) => {
  // const [requesting, setRequesting] = useState(false)
  // const pending = useSelector(getOfficeSelector)
  // const error = useSelector(getErrorSelector)

  const handleCancel = () => {
    onCancel()
  }

  return (
    <ClientForm>
      <Main id="client-form-main" saveState>
        <Flex layout="fill-horizontal" justifyContent="center">
          <ScrollElement name="profile" />
          <Flex flexDirection="column" mt="160px" mb="20px" gap="30px">
            <OfficeProfile />
            <ScrollElement name="plan" />
            <OfficePlan />
            <ScrollElement name="payment" />
            <OfficePayment />
          </Flex>
        </Flex>
      </Main>
      <Footer>
        <Flex layout="fill-centered" gap="24px">
          <Button variant="secondary" label="キャンセル" onClick={handleCancel} />
          <OfficeSubmitButton />
        </Flex>
      </Footer>
    </ClientForm>
  )
}

export default MainOffice
