function sumArray(array) {
  let sum = 0;
  let arr2 = 0;
  if(array == null || array == [ ] || array == '' || array.length < 3){
    return array = 0;
  }
for(let i=0; i<array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[j] > array[j + 1]){
      let temp = array[j];
      array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
    arr2 = array.slice(1, -1);
  for(let k of arr2){
    sum += k;
  }
  return sum
}
