import { getPrettyTime, myCacheLife } from '../../utils'

export default async function Layout() {
  'use cache'
  myCacheLife()
  return <div>first page: {getPrettyTime()}</div>
}
