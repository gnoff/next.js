import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('calling middleware')
  const response = NextResponse.next()
  response.cookies.set('x-sentinel', 'hello', {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  })
  return response
}

// export const config = {
//   matcher: '/',
// }
