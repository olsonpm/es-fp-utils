import getFn from '../internal/get-fn'
import getType from '../internal/get-type'

const groupBy = groupByFn => {
  const type = getType(groupByFn)
  if (type !== 'function')
    throw new Error(`groupBy requires groupByFn to be of type 'function'`)

  return something => {
    const fn = getFn(typeToFn, something, 'groupBy')
    return fn(something, groupByFn)
  }
}

const typeToFn = {
  object: groupBy_object,
}

function groupBy_object(obj, groupByFn) {
  const result = {}

  for (const key of Object.keys(obj)) {
    const val = obj[key],
      group = groupByFn(val, key, obj)

    if (!result[group]) result[group] = []

    result[group].push(obj)
  }

  return result
}

export default groupBy
