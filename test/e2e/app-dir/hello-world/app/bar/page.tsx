import { unstable_cacheLife as cacheLife } from 'next/cache'
import { getPrettyTime } from '../utils'

export default async function Layout() {
  'use cache'
  cacheLife({
    stale: 5,
    revalidate: 1000,
    expire: 1000,
  })
  return <div>bar page: {getPrettyTime()}</div>
}
