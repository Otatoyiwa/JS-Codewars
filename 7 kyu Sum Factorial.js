function sumFactorial(arr){
  let result = 1;
  let sum = 0;
  for(let i = 0; i<arr.length; i++){
  if(arr == 0 || arr == 1){
    return 1
    }
    for (let k = arr[i] - 1; k >= 1; k--){
    arr[i] *= k
    }
    sum += arr[i]
  }
  return sum
}
