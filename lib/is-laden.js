import getFn from '../internal/get-fn'

const isLaden = something => {
  const fn = getFn(typeToMapper, something, 'isLaden')
  return fn(something)
}

const typeToMapper = {
  arguments: isLaden_hasLength,
  array: isLaden_hasLength,
  map: isLaden_hasSize,
  null: isLaden_isFalsey,
  object: isLaden_object,
  set: isLaden_hasSize,
  string: isLaden_hasLength,
  undefined: isLaden_isFalsey,
}

function isLaden_isFalsey() {
  return false
}

function isLaden_hasSize(something) {
  return something.size !== 0
}

function isLaden_hasLength(something) {
  return something.length !== 0
}

function isLaden_object(obj) {
  return Object.keys(obj).length !== 0
}

export { typeToMapper as _typeToMapper }
export default isLaden
