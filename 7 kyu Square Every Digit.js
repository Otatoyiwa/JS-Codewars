function squareDigits(num){
  let num2 = num.toString().split('').map((val) => val * val)
  return +num2.join('')
}
