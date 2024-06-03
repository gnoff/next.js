import { Suspense } from 'react'

import { cookies } from 'next/headers'

export default async function Page() {
  await 1
  return (
    <>
      <p>
        This page renders two inner boundaries. One uses `cookies()` and should
        be excluded from the prerender. The other is entirely static. This
        demonstrates that syncronous dynamic APIs deopt to immediately aborting
        which in this case triggers the fallback of the outer boundary. While we
        probably will keep synchronous dynamic APIs we will also ship async
        dynamic APIs that can be instrumented to stall rather than abort so we
        can prerender more of the page
      </p>
      <Suspense fallback="loading outer...">
        <Suspense fallback="loading...">
          <DynamicComponent />
        </Suspense>
        <Suspense fallback="loading...">
          <StaticComponent />
        </Suspense>
      </Suspense>
    </>
  )
}

async function DynamicComponent() {
  cookies()
  return <p>hello dynamic</p>
}

async function StaticComponent() {
  return <p>hello static</p>
}
