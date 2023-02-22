import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ENTRIESAPI_ENDPOINTS } from './apis'

const headers = { 'content-type': 'application/json' }
const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$')

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith(ENTRIESAPI_ENDPOINTS.entries.url)) {
    const id = req.nextUrl.pathname.replace(
      ENTRIESAPI_ENDPOINTS.entries.url,
      ''
    )
    if (!checkMongoIDRegExp.test(id)) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: `${id} is not a valid MongoID`,
        }),
        { status: 400, headers }
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
