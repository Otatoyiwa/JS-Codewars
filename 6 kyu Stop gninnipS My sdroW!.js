function spinWords(string){
  let strJ = string.split(' ');
  let result = strJ.map((el) => (el.length >= 5)? el.split('').reverse().join('') : el).join(' ');
  return result
  //TODO Have fun 
}
