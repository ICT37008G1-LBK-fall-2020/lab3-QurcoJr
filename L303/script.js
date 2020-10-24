const enteredPrice = prompt('შეიყვანეთ თანხა')

const currency = enteredPrice[0]
const price = +enteredPrice.substr(1)

if (currency === 'L') {
  alert(`$${price / 2.6}`)
} else {
  alert(`L${price * 2.6}`)
}