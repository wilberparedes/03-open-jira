import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/api/entries/')) {
    const id = req.nextUrl.pathname.replace('/api/entries/', '')
    console.log({ id })
    const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$')
    if (!checkMongoIDRegExp.test(id)) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: `${id} is not a valid MongoID`,
        }),
        { status: 400, headers: { 'content-type': 'application/json' } }
      )
      /**
       * const url = req.nextUrl.clone()
       * url.pathname = '/api/bad-request'
       * url.search = `?message=${id} is not a valid MongoID`
       * return NextResponse.rewrite(url)
       */
      /**
       * return NextResponse.redirect(
       * new URL(
       * `/api/bad-request?message=${id} is not a valid MongoID`,
       * req.url
       * )
       * )
       */
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/api/entries/:path*'],
}
