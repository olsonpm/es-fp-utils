import getFn from '../internal/get-fn.js'

const reverse = something => {
  const fn = getFn(typeToMapper, something, 'reverse')
  return fn(something)
}

const typeToMapper = {
  array: reverse_array,
}

function reverse_array(arr) {
  const result = []

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    result.push(arr[i])
  }

  return result
}

export default reverse
