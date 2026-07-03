function solve(st, a, b){
 //..
  let str = st.split('');
  let res = str.slice(a  , b + 1).reverse();

  return (str.slice(0, a) + res + str.slice(b + 1)).split(',').join('')
}
