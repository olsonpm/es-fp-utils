import getFn from '../internal/get-fn'

const getLast = something => {
  const fn = getFn(typeToFn, something, 'getLast')
  return fn(something)
}

const typeToFn = {
  array: getLast_hasLength,
  string: getLast_hasLength,
}

function getLast_hasLength(something) {
  return something[something.length - 1]
}

export default getLast
