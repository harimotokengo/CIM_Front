
import { Flex, PlanButton, PlanButtonSubTitle, PlanButtonTitle, SForm, SPlanHead } from './Styled'

const OfficePlan = () => {

  const a = "無料プラン"
  const b = "スタンダードプラン"
  const c = "ビジネスプラン"

  return (
    <SForm>
      <SPlanHead>プランを選択</SPlanHead>
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
    </SForm>
  )
}

export default OfficePlan

