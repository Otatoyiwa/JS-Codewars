
function XO(str) {
  let o = str.split('').filter(el => el == 'o' || el == 'O');
  let x = str.split('').filter(el => el == 'x' || el == 'X');
  let result = (o.length == x.length)? true :
  (o.length !== x.length)? false : true
  return result
    //code here
}
