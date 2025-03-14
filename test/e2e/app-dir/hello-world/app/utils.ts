import { unstable_cacheLife as cacheLife } from 'next/cache'

export function getPrettyTime() {
  const now = new Date()
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  return `${minutes}:${seconds}`
}

export function myCacheLife() {
  cacheLife({
    stale: 0,
    revalidate: 1000,
    expire: 1000,
  })
}
