import getFn from '../internal/get-fn'

const last = something => {
  const fn = getFn(typeToMapper, something, 'last')
  return fn(something)
}

const typeToMapper = {
  arguments: last_hasLength,
  array: last_hasLength,
  string: last_hasLength,
}

function last_hasLength(something) {
  return something[something.length - 1]
}

export default last
