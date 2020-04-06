import { EOL } from 'universal-eol'
import getFirstNLines from '../../internal/string/get-first-n-lines'

export default numberOfLines => aString => {
  const { lines, moreLinesExist } = getFirstNLines(numberOfLines)(aString)
  if (moreLinesExist) {
    if (numberOfLines === 1) {
      lines[0] += '...'
    } else {
      lines.push('...')
    }
  }

  return lines.join(EOL)
}
