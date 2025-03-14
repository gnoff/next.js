import { getPrettyTime, myCacheLife } from '../utils'

export default async function Layout() {
  'use cache'
  myCacheLife()
  return <div>foo page: {getPrettyTime()}</div>
}
