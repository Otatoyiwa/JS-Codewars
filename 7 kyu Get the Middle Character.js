function getMiddle(s) {
  let str = s.split('');
  while(str.length > 2){
    str.pop() & str.shift();
  }
  return str.join('')
}
