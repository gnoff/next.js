export default async function Page() {
  if (typeof process !== 'undefined') {
    await new Promise((r) => process.nextTick(r))
  }
  const rand1 = Math.random()
  const rand2 = Math.random()
  return (
    <ul>
      <li>rand1: {rand1}</li>
      <li>rand2: {rand2}</li>
    </ul>
  )
}
