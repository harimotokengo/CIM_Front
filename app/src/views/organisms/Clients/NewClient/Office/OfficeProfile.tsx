import { useDispatch } from 'react-redux';

import { addOfficeAction } from '../../../../../store/actions/officeAction';
import { Row, SForm, SFormHead, SFormInput } from './Styled'

// 型定義
// interface OfficeProps {
//   name: string
//   phone: string
//   postcode: string
//   address: string
// }
export const OfficeProfile = () => {
  const dispatch = useDispatch();
  // const [officeValue, setOfficeValues] = useState<OfficeProps>({
  //   name: '',
  //   phone: '',
  //   postcode: '',
  //   address: ''
  // });
  const ChangeOfficeValue = () => {
    dispatch(addOfficeAction);
  };
  // const ChangeOfficeValue = (event: { target: HTMLInputElement }) => {
  //   setOfficeValues({ ...officeValue, [event.target.name]: event.target.value });
  // };
  return (
    <SForm>
      <Row>
        <SFormHead>事務所名</SFormHead>
        <SFormInput type="text" name="name"  onChange={ChangeOfficeValue} />
      </Row>
      {/* <Row>
        <SFormHead>電話番号</SFormHead>
        <SFormInput type="text" name="phone" value={officeValue.phone} onChange={ChangeOfficeValue} />
      </Row>
      <Row>
        <SFormHead>郵便番号</SFormHead>
        <SFormInput type="text" name="postcode" value={officeValue.postcode} onChange={ChangeOfficeValue} />
      </Row>
      <Row>
        <SFormHead>住所</SFormHead>
        <SFormInput type="text" name="address" value={officeValue.address} onChange={ChangeOfficeValue} />
      </Row> */}
    </SForm>
  )
}

export default OfficeProfile
