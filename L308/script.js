const sortDescending  = (a, b) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

const students = []
const studentCount = +prompt('რამდენი სტუდენტის შეყვანა გსურთ?')

for (let i = 0; i < studentCount; i++) {
  students.push(prompt('შეიყვანეთ სტუდენტი'))
}

students.sort(sortDescending)
alert(students)

