import { Links } from './components'
import { unstable_cacheLife as cacheLife } from 'next/cache'
import { getPrettyTime } from './utils'

export default async function Root({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <main
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr',
            gap: '1rem',
          }}
        >
          <div>
            {await getValue()}
            {children}
          </div>
          <Links />
        </main>
      </body>
    </html>
  )
}
async function getValue() {
  'use cache'
  cacheLife({
    stale: 5,
    revalidate: 1000,
    expire: 1000,
  })
  return <div>Root layout: {getPrettyTime()}</div>
}
