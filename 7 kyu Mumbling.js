function accum(s) {
  let result = [...s].map((el, index) => el.toUpperCase() + el.toLowerCase().repeat(index))
  return result.join('-')
}
