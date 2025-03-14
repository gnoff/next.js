import { unstable_cacheLife as cacheLife } from 'next/cache'
import { getPrettyTime } from '../utils'

export default async function Layout({ children }) {
  return (
    <>
      {await getValue()}
      {children}
    </>
  )
}

async function getValue() {
  'use cache'
  cacheLife({
    stale: 5,
    revalidate: 1000,
    expire: 1000,
  })
  return <div>bar layout: {getPrettyTime()}</div>
}
