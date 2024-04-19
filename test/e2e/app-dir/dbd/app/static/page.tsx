import { Suspense } from 'react'

export default async function Page() {
  return (
    <Suspense fallback="this fallback was prerendered hopefully">
      <p>hello world</p>
    </Suspense>
  )
}
