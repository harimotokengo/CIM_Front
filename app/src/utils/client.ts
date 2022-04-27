import { IClient } from '../store/models/clientModel'

/* eslint-disable camelcase */
export const clientFormToClient = (client: IClient, clientForm: { [fieldName: string]: any }) => {
  if (!client.id) {
    return { client: { ...client, ...clientForm } }
  }
  const contact_emails_attributes = convertDestroyFlg(
    client.contact_emails_attributes || null,
    clientForm.contact_emails_attributes as any[]
  )
  const contact_phone_numbers_attributes = convertDestroyFlg(
    client.contact_phone_numbers_attributes || null,
    clientForm.contact_phone_numbers_attributes as any[]
  )
  const contact_addresses_attributes = convertDestroyFlg(
    client.contact_addresses_attributes || null,
    clientForm.contact_addresses_attributes as any[]
  )

  return {
    client: {
      ...client,
      ...clientForm,
      contact_emails_attributes,
      contact_phone_numbers_attributes,
      contact_addresses_attributes,
    },
  }
}
/* eslint-enable camelcase */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const convertDestroyFlg = (elements: any[] | null, formElements: any[]) => {
  if (elements) {
    return elements.map(x => {
      const found = formElements.find((y: any) => y.id === x.id)
      if (found) {
        return found
      }
      x._destroy = true
      return x
    })
  }
  return elements
}
/* eslint-enable @typescript-eslint/no-unsafe-assignment */
/* eslint-enable @typescript-eslint/no-unsafe-member-access */
/* eslint-enable @typescript-eslint/no-unsafe-call */
/* eslint-enable @typescript-eslint/no-unsafe-return */
/* eslint-enable no-underscore-dangle */
/* eslint-enable no-param-reassign */
