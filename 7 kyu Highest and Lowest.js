function highAndLow(numbers){
  let result = numbers.match(/-?\d+(\.\d+)?/g).sort((a, b) => b - a) ;
  let firstI = result.at(0);
  let lastI = result.at(-1);
  let result2 =[];
  result2.push(firstI, lastI);
  return result2.join(' ')

}

//Refactor
function highAndLow(numbers){
  var arr = numbers.split(' ').sort((a, b) => b - a);
  return arr.at(0) + ' ' + arr.at(-1)
}
