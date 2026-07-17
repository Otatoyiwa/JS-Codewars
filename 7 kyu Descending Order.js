function descendingOrder(n){
  let dO = [...n.toString()].map(Number);
  dO = dO.sort((a,b) => b - a);
  return +dO.join('')
}
