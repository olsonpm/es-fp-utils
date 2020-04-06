export default (data, fnArray) => {
  return fnArray.reduce((result, fn) => {
    result = fn(result)
    return result
  }, data)
}
