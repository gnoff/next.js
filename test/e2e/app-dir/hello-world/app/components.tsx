import Link from 'next/link'
import { revalidatePath } from 'next/cache'

export function Links() {
  return (
    <ul>
      <LinkAndRevalidations path="/dynamic" />
      <LinkAndRevalidations path="/dynamic/first" />
      <LinkAndRevalidations path="/dynamic/second" />
      <LinkAndRevalidations path="/foo" />
      <LinkAndRevalidations path="/foo/first" />
      <LinkAndRevalidations path="/foo/second" />
      <LinkAndRevalidations path="/bar" />
      <LinkAndRevalidations path="/" />
    </ul>
  )
}

function LinkAndRevalidations({ path }) {
  const pathLabel = path === '/' ? '/ (root)' : path
  return (
    <li>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Revalidate path={path} />
        <Revalidate path={path} type="page" />
        <Revalidate path={path} type="layout" />
        <Link href={path}>{pathLabel}</Link>
      </div>
    </li>
  )
}

export async function revalidate(formData: FormData) {
  'use server'
  const type = formData.get('type') as string
  const path = formData.get('path') as string
  console.log('path', path)
  if (type === 'layout' || type === 'page') {
    console.log('revalidatePath', path, type)
    revalidatePath(path, type)
  } else {
    console.log('revalidatePath', path)
    revalidatePath(path)
  }
}

export function Revalidate({
  type,
  path,
}: {
  type?: 'layout' | 'page' | undefined
  path: string
}) {
  const label = type || '(default)'
  return (
    <form action={revalidate} style={{ display: 'inline-block' }}>
      <input type="hidden" id="pathInput" name="path" value={path} />
      <input type="hidden" id="typeInput" name="type" value={type || ''} />

      <button type="submit">{label}</button>
    </form>
  )
}
