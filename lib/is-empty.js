import getFn from '../internal/get-fn.js'
import { _typeToMapper } from './is-laden.js'

export default something => {
  const fn = getFn(_typeToMapper, something, 'isEmpty')
  return !fn(something)
}
