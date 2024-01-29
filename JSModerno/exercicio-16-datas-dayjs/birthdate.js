const dayjs = require("dayjs")

function birthdate(date) {
  const birthdate = dayjs(date)
  
  const today = dayjs()

  const ageInYears = today.diff(birthdate, 'year')
  const nextBday = birthdate.add(ageInYears + 1, 'year')
  const daysToNextBirthday = nextBday.diff(today, 'day') + 1

  console.log(`Idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBday.format('DD/MM/YYYY')}`)
  console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthdate("1995-09-02")