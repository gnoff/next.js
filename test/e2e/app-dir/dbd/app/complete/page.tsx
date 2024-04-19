import { Suspense } from 'react'

export default async function Page() {
  await Promise.resolve()
  return (
    <Suspense fallback="this fallback should never be seen">
      <SomethingMicrotaskAsync>
        <p>
          This resolves after a microtask and should be part of the prerender
        </p>
      </SomethingMicrotaskAsync>
    </Suspense>
  )
}

async function SomethingMicrotaskAsync({ children }) {
  console.log('SomethingMicrotaskAsync')
  await Promise.resolve()
  return children
}
