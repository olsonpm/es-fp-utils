import getFn from '../internal/get-fn.js'

const keepAll = valuesToKeep => {
  valuesToKeep = new Set(valuesToKeep)

  return something => {
    const fn = getFn(typeToFn, something, 'keepAll')
    return fn(something, valuesToKeep)
  }
}

const typeToFn = {
  array: keepAll_array,
}

function keepAll_array(arr, valuesToKeep) {
  const result = []

  for (const el of arr) {
    if (valuesToKeep.has(el)) {
      result.push(el)
    }
  }

  return result
}

export default keepAll
