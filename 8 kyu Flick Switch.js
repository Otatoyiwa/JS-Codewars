function flickSwitch(arr){
  let boolArr = [];
  let Value = true;
  for(let i=0; i<=arr.length - 1; i++){
    if(arr[i] !== 'flick'){
      boolArr.push(Value)
    }else if(arr[i] == 'flick'){
      Value = !Value;
      boolArr.push(Value);
    }
  }
  return boolArr;
}
