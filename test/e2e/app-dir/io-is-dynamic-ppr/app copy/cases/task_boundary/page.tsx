import { Suspense } from 'react'

import { getSentinelValue } from '../../getSentinelValue'

export default async function Page() {
  await 1
  return (
    <>
      <p>
        This page renders a component that requires async IO. It is simulated
        using setTimeout(f, 1000). This simulated IO is inside a Suspense
        boundary so we can statically render a fallback and dynamically stream
        in the content later.
      </p>
      <Suspense fallback="loading...">
        <ComponentWithIO />
        <div id="inner">{getSentinelValue()}</div>
      </Suspense>
      <div id="page">{getSentinelValue()}</div>
    </>
  )
}

async function ComponentWithIO() {
  await new Promise<void>((r) => setTimeout(r, 1000))
  return <p>hello IO</p>
}
