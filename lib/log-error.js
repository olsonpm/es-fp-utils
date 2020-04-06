import jstring from './jstring'

// eslint-disable-next-line no-console
const _logError = something => console.error(something)

//
// axios errors don't always have the full request/response info
// https://github.com/axios/axios#handling-errors
//
export default err => {
  const { message, response: res, request: req } = err

  if (res) {
    _logError('data: ' + jstring(res.data))
    _logError('status: ' + res.status)
    _logError('headers: ' + jstring(res.headers))
  } else if (req) {
    const opts = req._options,
      port = opts.port ? `:${opts.port}` : ''

    _logError('a request was sent but no response was received')
    _logError('message: ' + message)
    _logError(
      `${opts.method} ${opts.protocol}//${opts.hostname}${port}${opts.path}`
    )
    _logError(`headers: ${jstring(opts.headers)}`)
  } else {
    _logError(err)
  }
}
