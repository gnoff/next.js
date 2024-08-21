import { getSentinelValue } from '../../getSentinelValue'

export default async function Page() {
  await 1
  return (
    <>
      <p>
        This page only has microtask async points so it also can render entirely
        statically.
      </p>
      <div id="page">{getSentinelValue()}</div>
    </>
  )
}
