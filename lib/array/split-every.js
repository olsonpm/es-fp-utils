export default n => {
  if (!(Number.isInteger(n) && n > 0)) {
    throw new Error('n must be a positive integer' + `\n n: ${n}`)
  }

  return arr => {
    if (!arr.length) return arr

    const numArrays = Math.ceil(arr.length / n),
      res = new Array(numArrays)

    res.fill([])

    for (let i = 0; i < numArrays - 1; i += 1) {
      res[i] = arr.slice(i * n, (i + 1) * n)
    }

    res[numArrays - 1] = arr.slice((numArrays - 1) * n)

    return res
  }
}
