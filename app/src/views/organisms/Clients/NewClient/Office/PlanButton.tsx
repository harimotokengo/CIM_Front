import React from 'react';

import { DPlan, PlanButton, PlanButtonTextSub, PlanButtonTextTitle, SForm, SPlanHead } from './Styled'

const OfficePlan = () => {

  const a = "無料プラン";
  const b = "スタンダードプラン";
  const c = "ビジネスプラン";

  return (
    <SForm>
      <SPlanHead>プランを選択</SPlanHead>
      <DPlan>
        <PlanButton>
          <PlanButtonTextTitle>{a}</PlanButtonTextTitle>
          <PlanButtonTextSub>XX ライセンスサポート</PlanButtonTextSub>
        </PlanButton>
        <PlanButton>
          <PlanButtonTextTitle>{b}</PlanButtonTextTitle>
          <PlanButtonTextSub>XX ライセンスサポート</PlanButtonTextSub>
        </PlanButton>
        <PlanButton>
          <PlanButtonTextTitle>{c}</PlanButtonTextTitle>
          <PlanButtonTextSub>XX ライセンスサポート</PlanButtonTextSub>
        </PlanButton>
      </DPlan>
    </SForm>
  )
}

export default OfficePlan

