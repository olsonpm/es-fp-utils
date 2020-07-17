import getFn from '../internal/get-fn.js'
import getType from '../internal/get-type.js'

const find = predicate => {
  const type = getType(predicate)
  if (type !== 'function')
    throw new Error(`find requires predicate to be of type 'function'`)

  return something => {
    const fn = getFn(typeToFn, something, 'find')
    return fn(something, predicate)
  }
}

const typeToFn = {
  array: find_array,
}

function find_array(arr, predicate) {
  return arr.find(predicate)
}

export default find
