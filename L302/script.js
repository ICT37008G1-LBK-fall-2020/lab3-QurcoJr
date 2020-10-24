let enteredWord = prompt('შეიყვანეთ სიტყვა')

if (enteredWord.length > 15) {
  enteredWord = enteredWord.substr(0, 15) + '...'
}

alert(`თვენ შეიყვანეთ ${enteredWord}`)