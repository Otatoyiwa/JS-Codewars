function getCount(str) {
  let str2 = [];
  for(let i of str){
    switch(i){
        case 'a':
        str2.push(i)
        break;
          case 'e':
        str2.push(i)
        break;
          case 'i':
        str2.push(i)
        break;
          case 'o':
        str2.push(i)
        break;
          case 'u':
        str2.push(i)
        break;
    }
  }
  return str2.length;
}
