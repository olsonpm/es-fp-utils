import getFn from '../internal/get-fn.js'
import getType from '../internal/get-type.js'

const discardWhen = predicate => {
  const type = getType(predicate)
  if (type !== 'function')
    throw new Error(`discardWhen requires predicate to be of type 'function'`)

  return something => {
    const fn = getFn(typeToFn, something, 'discardWhen')
    return fn(something, predicate)
  }
}

const typeToFn = {
  array: discardWhen_array,
  object: discardWhen_object,
}

function discardWhen_array(arr, predicate) {
  const result = []

  for (let i = 0; i < arr.length; i += 1) {
    if (!predicate(arr[i], i, arr)) result.push(arr[i])
  }

  return result
}

function discardWhen_object(obj, predicate) {
  const result = {}

  for (const key of Object.keys(obj)) {
    if (!predicate(obj[key], key, obj)) result[key] = obj[key]
  }

  return result
}

export default discardWhen
