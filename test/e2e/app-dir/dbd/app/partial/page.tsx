import { Suspense } from 'react'

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <Suspense fallback="this fallback was prerendered hopefully">
      <SomethingDynamic>
        <p>hello world</p>
      </SomethingDynamic>
    </Suspense>
  )
}

async function SomethingDynamic({ children }) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return children
}
