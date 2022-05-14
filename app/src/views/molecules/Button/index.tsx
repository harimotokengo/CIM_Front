import Button, { ButtonProps } from '../../atoms/Button'

type Props = Omit<ButtonProps, 'variant'>

export const PrimaryRedButton = (props: Props) => <Button variant="primary-red" {...props} />
export const PrimaryGreenButton = (props: Props) => <Button variant="primary-green" {...props} />
export const PrimaryEditButton = (props: Props) => <Button variant="primary-edit" {...props} />
export const SecondaryButton = (props: Props) => <Button variant="secondary" {...props} />
