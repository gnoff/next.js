import { unstable_cache as cache } from 'next/cache'

export default async function Page() {
  const rand1 = await getCachedRandom()
  const rand2 = await getCachedRandom()
  return (
    <ul>
      <li>rand1: {rand1}</li>
      <li>rand2: {rand2}</li>
    </ul>
  )
}

const getCachedRandom = cache(async () => {
  return Math.random()
})
