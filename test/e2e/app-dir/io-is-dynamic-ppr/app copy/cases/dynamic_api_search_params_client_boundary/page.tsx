'use client'

import { Suspense } from 'react'

import { getSentinelValue } from '../../getSentinelValue'

export default function Page({ searchParams }) {
  return (
    <>
      <p>
        This page reads `searchParams.foo` in a client component context. While
        the SSR'd page should not be
      </p>
      <Suspense fallback={<Fallback>loading...</Fallback>}>
        <ComponentOne searchParams={searchParams} />
      </Suspense>
      <Suspense fallback={<Fallback>loading too...</Fallback>}>
        <ComponentTwo />
        <div id="inner">{getSentinelValue()}</div>
      </Suspense>
      <div id="page">{getSentinelValue()}</div>
    </>
  )
}

function ComponentOne({ searchParams }) {
  let sentinelSearch
  try {
    if (searchParams.sentinel) {
      sentinelSearch = searchParams.sentinel
    } else {
      sentinelSearch = '~not-found~'
    }
  } catch (e) {
    sentinelSearch = '~thrown~'
    // swallow any throw. We should still not be static
  }
  return (
    <div>
      This component accessed `searchParams.sentinel`: "
      <span id="value">{sentinelSearch}</span>"
    </div>
  )
}

function ComponentTwo() {
  return <div>This component didn't access any searchParams properties</div>
}

function Fallback({ children }) {
  return children
}
