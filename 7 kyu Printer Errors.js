function printerError(s) {
  let err = /[n-z]/gi;
  let result = s.split('').filter((el) => el.match(err)).length;
    // your code
    return `${result}/${s.length}`
}
