const forbiddenWords = ['რეკლამა', 'მარკეტინგი', 'ვირუსი']

const enteredWord = prompt('შეიყვანეთ სიტყვა')

forbiddenWords.forEach(word => {
  if (enteredWord.includes(word)) {
    alert('აკრძალული სიტყვა')
    return
  }
})