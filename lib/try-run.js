import logError from './log-error'

export default async fn => {
  try {
    return await fn()
  } catch (err) {
    logError(err)
  }
}
