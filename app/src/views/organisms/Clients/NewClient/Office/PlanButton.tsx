
import { Flex, Form, PlanButton, PlanButtonSubTitle, PlanButtonTitle, PlanHead } from './Styled'

const OfficePlan = () => {

  const a = "無料プラン"
  const b = "スタンダードプラン"
  const c = "ビジネスプラン"

  return (
    <Form>
      <PlanHead>プランを選択</PlanHead>
      <Flex>
        <PlanButton>
          <PlanButtonTitle>{a}</PlanButtonTitle>
          <PlanButtonSubTitle>XX ライセンスサポート</PlanButtonSubTitle>
        </PlanButton>
        <PlanButton>
          <PlanButtonTitle>{b}</PlanButtonTitle>
          <PlanButtonSubTitle>XX ライセンスサポート</PlanButtonSubTitle>
        </PlanButton>
        <PlanButton>
          <PlanButtonTitle>{c}</PlanButtonTitle>
          <PlanButtonSubTitle>XX ライセンスサポート</PlanButtonSubTitle>
        </PlanButton>
      </Flex>
    </Form>
  )
}

export default OfficePlan

