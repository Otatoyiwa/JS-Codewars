function solution(str){
  let str2 = '';
  if(str.length > 0){
   str2 = str.split('').reverse().join('') 
 }else{
   str2 = ''
 }
  return str2
}

//Refactor
function solution(str){
 let str2 = '';
  for (let i = str.length - 1 ; i >= 0; i-- ){
    str2 += str[i];
  }
  return str2;
}
