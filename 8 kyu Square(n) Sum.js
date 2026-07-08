function squareSum(numbers){
  let sumValue = 0;
  for(let i=0; i <= numbers.length - 1; i++){
    sumValue += Math.pow(numbers[i], 2);
  }
  return sumValue
}
