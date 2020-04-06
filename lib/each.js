import getFn from '../internal/get-fn'
import getType from '../internal/get-type'

const each = fn => {
  const type = getType(fn)
  if (type !== 'function')
    throw new Error(
      "each requires fn to be of type 'function'" + `\n  type: ${type}`
    )

  return container => {
    const typedEach = getFn(typeToFn, container, 'each')
    return typedEach(container, fn)
  }
}

const typeToFn = {
  array: each_array,
}

function each_array(arr, fn) {
  for (let i = 0; i < arr.length; i += 1) {
    fn(arr[i], i, arr)
  }

  return arr
}

export default each
