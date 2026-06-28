export default function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs = 5000
): Promise<T | undefined> {
  const timeout = new Promise<undefined>(resolve => {
    setTimeout(() => resolve(undefined), timeoutMs)
  })

  return Promise.race([
    promise,
    timeout,
  ])
}
