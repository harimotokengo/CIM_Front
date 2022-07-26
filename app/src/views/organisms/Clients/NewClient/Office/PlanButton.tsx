import React, { useState } from 'react';

import { Flex, PlanButton, PlanButtonInput, PlanButtonSubTitle, PlanButtonTitle, SForm, SPlanHead } from './Styled'

const OfficePlan = () => {

  const [state, setState] = useState('Radio 1');

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setState(e.target.value);
    console.log(state);
  }

  return (
    <SForm>
      <SPlanHead>プランを選択</SPlanHead>
      <Flex>
        {/* <PlanButton>
          <PlanButtonTitle>無料プラン</PlanButtonTitle>
          <PlanButtonSubTitle>XX ライセンスサポート</PlanButtonSubTitle>
          <PlanButtonInput type="radio"
            name='radioGroup'
            id='radioGroup1'
            value="Radio 1"
            onChange={handleChange}
            checked={state === 'Radio 1'}
          />
        </PlanButton>
        <PlanButton>プラン２
          <input type="radio"
            name='radioGroup'
            id='radioGroup2'
            value="Radio 2"
            onChange={handleChange}
            checked={state === 'Radio 2'}
          />
        </PlanButton> */}
        <PlanButton>
          <PlanButtonTitle>無料プラン</PlanButtonTitle>
          <PlanButtonSubTitle>XX ライセンスサポート</PlanButtonSubTitle>
        </PlanButton>
        <PlanButton>
          <PlanButtonTitle>スタンダードプラン</PlanButtonTitle>
          <PlanButtonSubTitle>XX ライセンスサポート</PlanButtonSubTitle>
        </PlanButton>
        <PlanButton>
          <PlanButtonTitle>ビジネスプラン</PlanButtonTitle>
          <PlanButtonSubTitle>XX ライセンスサポート</PlanButtonSubTitle>
        </PlanButton>
      </Flex>
    </SForm>
  )
}

export default OfficePlan

