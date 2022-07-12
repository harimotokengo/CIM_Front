import React from 'react';

import { DPlan, PlanButton, SForm, SPlanHead } from './Styled'

const OfficePlanButton = () => {

  const a = "無料プラン";
  const b = "スタンダードプラン";
  const c = "ビジネスプラン";

  return (
    <SForm>
      <SPlanHead>プランを選択</SPlanHead>
      <DPlan>
        <PlanButton>{a}</PlanButton>
        <PlanButton>{b}</PlanButton>
        <PlanButton>{c}</PlanButton>
      </DPlan>
    </SForm>
  )
}

export default OfficePlanButton

