import getFn from '../internal/get-fn'
import getType from '../internal/get-type'

const any = predicate => {
  const type = getType(predicate)
  if (type !== 'function')
    throw new Error(`any requires predicate to be of type 'function'`)

  return something => {
    const fn = getFn(typeToFn, something, 'any')
    return fn(something, predicate)
  }
}

const typeToFn = {
  array: any_array,
  object: any_object,
}

function any_array(arr, predicate) {
  for (let i = 0; i < arr.length; i += 1) {
    if (predicate(arr[i], i, arr)) return true
  }

  return false
}

function any_object(obj, predicate) {
  for (const key of Object.keys(obj)) {
    if (predicate(obj[key], key, obj)) return true
  }

  return false
}

export default any
