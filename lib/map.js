import getFn from '../internal/get-fn'
import getType from '../internal/get-type'

const map = mapperFn => {
  const type = getType(mapperFn)
  if (type !== 'function')
    throw new Error(`map requires mapperFn to be of type 'function'`)

  return something => {
    const fn = getFn(typeToFn, something, 'map')
    return fn(something, mapperFn)
  }
}

const typeToFn = {
  array: map_array,
  object: map_object,
}

function map_array(arr, mapperFn) {
  const result = []

  for (const [idx, el] of arr.entries()) {
    result.push(mapperFn(el, idx, arr))
  }

  return result
}

function map_object(obj, mapperFn) {
  const result = {}

  for (const key of Object.keys(obj)) result[key] = mapperFn(obj[key], key, obj)

  return result
}

export default map
