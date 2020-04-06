import getFn from '../internal/get-fn'

const containedIn = container => el => {
  const fn = getFn(typeToFn, container, 'containedIn')
  return fn(el, container)
}

const typeToFn = {
  set: containedIn_set,
}

function containedIn_set(el, aSet) {
  return aSet.has(el)
}

export default containedIn
