import getFn from '../internal/get-fn.js'
import getType from '../internal/get-type.js'

const reduce = (reducerFn, initial) => {
  const type = getType(reducerFn)
  if (type !== 'function')
    throw new Error(`reduce requires reducerFn to be of type 'function'`)

  return something => {
    const fn = getFn(typeToFn, something, 'reduce')
    return fn(something, reducerFn, initial)
  }
}

const typeToFn = {
  array: reduce_array,
  object: reduce_object,
}

function reduce_array(arr, reducerFn, initial) {
  return arr.reduce(reducerFn, initial)
}

function reduce_object(obj, reducerFn, initial) {
  let result = initial

  for (const key of Object.keys(obj)) {
    result = reducerFn(result, obj[key], key, obj)
  }

  return result
}

export default reduce
