import { headers } from 'next/headers'
import { getPrettyTime, myCacheLife } from '../../utils'

export default async function Page() {
  await headers()
  return getValue()
}

async function getValue() {
  'use cache'
  myCacheLife()
  return <div>dynamic first page: {getPrettyTime()}</div>
}
