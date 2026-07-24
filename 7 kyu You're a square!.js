let isSquare = function(n){
  let result = (n < 0)?  false :
                (n == 0)? true :
              ( n % Math.sqrt(n) === 0 )?  true : false;
  return result
}
