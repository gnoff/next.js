import { Suspense } from 'react'

import Client from './client'

export default async function Page() {
  const message = await someMicrotaskWork()
  return (
    <>
      <p>{message}</p>
      <Suspense fallback="loading...">
        <Client>
          <Message2 />
        </Client>
      </Suspense>
    </>
  )
}

async function Message2() {
  const message2 = await someMacrotaskWork()
  return <p>{message2}</p>
}

async function someMicrotaskWork() {
  console.log('resolving Microtask')
  return Promise.resolve().then(() => {
    return 'hello microtask'
  })
}

async function someMacrotaskWork(): Promise<string> {
  return new Promise((r) =>
    setTimeout(() => {
      console.log('resolving Macrotask')
      r('hello macrotask')
    }, 0)
  )
}
