import getFn from '../internal/get-fn'
import { _typeToMapper } from './is-laden'

export default something => {
  const fn = getFn(_typeToMapper, something, 'isEmpty')
  return !fn(something)
}
