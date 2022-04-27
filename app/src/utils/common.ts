export const getAge = (birthday: string): number | null => {
  const birthdayProperty = getBirthdayProperty(birthday)
  if (!birthdayProperty) return null

  const today = new Date()

  const thisYearsBirthday = new Date(today.getFullYear(), birthdayProperty.month - 1, birthdayProperty.day)

  const age = today.getFullYear() - birthdayProperty.year

  return today < thisYearsBirthday ? age - 1 : age
}

export const getBirthdayProperty = (birthday: string) => {
  const date = birthday.split('-')
  if (date.length < 3) return null

  return {
    year: parseInt(date[0], 10),
    month: parseInt(date[1], 10),
    day: parseInt(date[2], 10),
  }
}
