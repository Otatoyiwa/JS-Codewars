function positiveSum(arr) {
  let arr1 = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      arr1.push(arr[i]);
    }
  } 
    arr1.forEach(x =>{
      sum += x
    })
  return sum;
}
