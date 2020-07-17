import logError from './log-error.js'

export default async fn => {
  try {
    return await fn()
  } catch (err) {
    logError(err)
  }
}
