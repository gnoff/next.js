import { getPrettyTime, myCacheLife } from '../../utils'

export default async function Layout() {
  'use cache'
  myCacheLife()
  return <div>second page: {getPrettyTime()}</div>
}
