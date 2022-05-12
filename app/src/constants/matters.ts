export const MATTER_GENRE = [
  { id: 1, name: '離婚' },
  { id: 2, name: '労働' },
  { id: 3, name: '刑事' },
  { id: 4, name: '債務整理' },
  { id: 5, name: '交通事故' },
  { id: 6, name: '相続' },
  { id: 7, name: 'その他民事' },
  { id: 8, name: '顧問' },
  { id: 9, name: 'その他法人' },
  { id: 10, name: '知財' },
] as const

export const MATTER_STATUS = [
  { id: 1, name: '受任' },
  { id: 2, name: '先方検討中' },
  { id: 3, name: '当方準備中' },
  { id: 4, name: '相談のみ' },
  { id: 5, name: '終了' },
] as const

export const BELONGING_SIDE = [
  { id: 1, name: '個人' },
  { id: 2, name: '法人' },
] as const
