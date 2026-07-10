function filter_list(l) {
  let list = [];
  let num = 1;
  for (let i of l){
    if(typeof i == typeof num){
      list.push(i);      
    }
  }
  return list
}

//Refactor

function filter_list(l) {
    let list = [];
  for (let i of l){
    if(typeof i == 'number'){
      list.push(i);      
    }
  }
  return list
}
