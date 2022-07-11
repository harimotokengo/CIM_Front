import { useState } from 'react';

import { StyledOfficeProfile, StyledP } from './Styled'



export const OfficeProfile = () => {

  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [PostCode, setPostCode] = useState("");
  const [Address, setAddress] = useState("");

  return (
    <StyledOfficeProfile>
      <StyledP>事務所名</StyledP>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={Name} onChange={(e) =>setName(e.target.value)} />
      </form>
      <p>電話番号</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={PhoneNumber} onChange={(e) =>setPhoneNumber(e.target.value)} />
      </form>
      <p>郵便番号</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={PostCode} onChange={(e) =>setPostCode(e.target.value)} />
      </form>
      <p>住所</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={Address} onChange={(e) =>setAddress(e.target.value)} />
      </form>
    </StyledOfficeProfile>
  );
};

export default OfficeProfile
