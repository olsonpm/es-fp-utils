const getValueAtPath = path => {
  if (!Array.isArray(path))
    throw new Error(`getValueAtPath requires path be an array`)

  return something => {
    if (!path.length || something === undefined || something === null) {
      return
    }

    let value = something[path[0]]
    if (value === undefined) return

    for (const key of path.slice(1)) {
      value = value[key]

      if (value === undefined) return
    }

    return value
  }
}

export default getValueAtPath
