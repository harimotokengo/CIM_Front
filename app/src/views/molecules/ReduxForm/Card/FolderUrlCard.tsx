/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { useState } from 'react'
import { Field, WrappedFieldArrayProps } from 'redux-form'

import plusCircle from '../../../../assets/images/plus_circle.svg'
import { IFolderUrl } from '../../../../store/models/clientModel'
import Button from '../../../atoms/Button'
import { Card } from '../../../atoms/Card'
import Flex from '../../../atoms/Flex'
import { FlexItem } from '../../../atoms/FlexItem'
import Label from '../../../atoms/Label'
import LabelUrl from '../../../atoms/Label/LabelUrl'
import Title from '../../../atoms/Title'
import { ReduxFormInput } from '../Input'

const plusCircleIcon = <img alt="plusCircle" src={plusCircle} style={{ width: '21px', height: '21px' }} />

type FolderUrlCardProps = {
  label: string
}

const FolderUrlCard = ({ label, fields }: WrappedFieldArrayProps<IFolderUrl> & FolderUrlCardProps) => {
  const [isEdit, setIsEdit] = useState(false)

  const handleClose = (index: number) => {
    const field = fields.get(index)
    if (field.id) {
      const newField = fields.get(index)
      newField._destroy = true
      fields.splice(index, 1, newField)
      return
    }
    fields.remove(index)
  }

  return (
    <>
      <Title variant="sub">{label}</Title>
      {fields.map((x, i) =>
        fields.get(i)._destroy ? (
          <></>
        ) : (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={i} closeButton onClosed={() => handleClose(i)}>
            <Flex flexDirection="column" flexWrap="wrap" gap="10px" mb="10px">
              <FlexItem width="auto">
                <Field name={`${x}.name`} label="タイトル" component={ReduxFormInput} />
              </FlexItem>
              <FlexItem width="auto">
                <Flex flexDirection="row" alignItems="end" gap="10px">
                  <FlexItem width="auto">
                    {isEdit ? (
                      <Field name={`${x}.url`} label="URL" component={ReduxFormInput} />
                    ) : (
                      <LabelUrl url={fields.get(i).url}>{fields.get(i).url}</LabelUrl>
                    )}
                  </FlexItem>
                  <FlexItem width="auto" stretch={false}>
                    <Button label="編集" onClick={() => setIsEdit(!isEdit)} />
                  </FlexItem>
                </Flex>
              </FlexItem>
            </Flex>
          </Card>
        )
      )}
      <Label variant="icon" icon={plusCircleIcon} onClick={() => fields.push({ name: '', url: '' })}>
        {label}を追加
      </Label>
    </>
  )
}

export default FolderUrlCard
