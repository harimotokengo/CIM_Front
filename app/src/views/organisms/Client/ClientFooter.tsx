import { Button } from '../../atoms/Button'
import Flex from '../../atoms/Flex'
import Footer from '../../atoms/Footer'

const ClientFooter = () => (
  <Footer>
    <Flex layout="fill-space-centered" gap="24px">
      <Button variant="secondary" label="キャンセル" />
      <Button variant="primary" label="新規登録" />
    </Flex>
  </Footer>
)

export default ClientFooter
