import getType from './get-type'

export default (typeToFn, something, utilName) => {
  const type = getType(something),
    fn = typeToFn[type]

  if (!fn)
    throw new Error(`${utilName} doesn't support the data type '${type}'`)

  return fn
}
