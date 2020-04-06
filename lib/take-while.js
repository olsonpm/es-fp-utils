import getFn from '../internal/get-fn'
import getType from '../internal/get-type'

const takeWhile = predicate => {
  const type = getType(predicate)
  if (type !== 'function')
    throw new Error(`takeWhile requires predicate to be of type 'function'`)

  return something => {
    const fn = getFn(typeToFn, something, 'takeWhile')
    return fn(something, predicate)
  }
}

const typeToFn = {
  array: takeWhile_array,
}

function takeWhile_array(arr, predicate) {
  let i = 0

  while (predicate(arr[i], i, arr)) {
    i += 1
  }

  return arr.slice(0, i)
}

export default takeWhile
