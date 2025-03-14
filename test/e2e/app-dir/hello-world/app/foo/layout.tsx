import { getPrettyTime, myCacheLife } from '../utils'

export default async function Layout({ children }) {
  return (
    <>
      {await getValue()}
      {children}
    </>
  )
}

async function getValue() {
  'use cache'
  myCacheLife()

  return <div>foo layout: {getPrettyTime()}</div>
}
