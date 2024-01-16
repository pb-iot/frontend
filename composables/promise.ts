export const sleep = (ms: number) => new Promise(resolve => useTimeoutFn(resolve, ms))
