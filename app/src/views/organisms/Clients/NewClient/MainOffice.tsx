import Button from '../../../atoms/Button'
import Flex from '../../../atoms/Flex'
import Footer from '../../../atoms/Footer'
import { Main } from '../../../atoms/Main'
// import Title from '../../../atoms/Title'
import ClientForm from '../../../molecules/ReduxForm/Form/ClientForm'
// import { OfficeSubmitButton } from '../../../molecules/ReduxForm/Submit/OfficeSubmit'
import OfficeProfile from './Office/OfficeProfile'
import OfficePlanButton from './Office/PlanButton'


interface MainClientProps {
  onCancel: () => void
}

const MainOffice = ({ onCancel }: MainClientProps) => {

  const handleCancel = () => {
    onCancel()
  }

  return (
    <ClientForm>
      <Main id="client-form-main" saveState>
        <Flex layout="fill-horizontal" justifyContent="center">
          <Flex flexDirection="column" mt="160px" mb="20px" gap="20px">
            <OfficeProfile />
            <br />
            <OfficePlanButton />
          </Flex>
        </Flex>
      </Main>
      <Footer>
        <Flex layout="fill-centered" gap="24px">
          <Button variant="secondary" label="キャンセル" onClick={handleCancel} />
          {/* <OfficeSubmitButton /> */}
        </Flex>
      </Footer>
    </ClientForm>
  )
}

export default MainOffice
