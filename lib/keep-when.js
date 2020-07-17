import getFn from '../internal/get-fn.js'
import getType from '../internal/get-type.js'

const keepWhen = predicate => {
  const type = getType(predicate)
  if (type !== 'function')
    throw new Error(`keepWhen requires predicate to be of type 'function'`)

  return something => {
    const fn = getFn(typeToFn, something, 'keepWhen')
    return fn(something, predicate)
  }
}

const typeToFn = {
  array: keepWhen_array,
  object: keepWhen_object,
}

function keepWhen_array(arr, predicate) {
  return arr.filter(predicate)
}

function keepWhen_object(obj, predicate) {
  const result = {}

  for (const key of Object.keys(obj)) {
    if (predicate(obj[key], key, obj)) result[key] = obj[key]
  }

  return result
}

export default keepWhen
