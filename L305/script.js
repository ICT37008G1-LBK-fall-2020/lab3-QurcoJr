const students = []
const studentCount = +prompt('რამდენი სტუდენტის შეყვანა გსურთ?')

for (let i = 0; i < studentCount; i++) {
  students.push(prompt('შეიყვანეთ სტუდენტი'))
}

students.sort()
alert(students)
