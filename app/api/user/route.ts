import { getCurrentUser } from '@/lib/dal'
import { NextRequest, NextResponse } from 'next/server'

type Handler = (req: NextRequest) => Promise<NextResponse> | NextResponse
const WithUser = (handler: Handler): Handler => {
  return async (req: NextRequest) => {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.redirect(new URL('/signin', req.url), { status: 401 })
    }

    return handler(req)
  }
}

export const GET = WithUser(async () => {
  return NextResponse.json({ message: 'testing' })
})

// Other HTTP methods you can implement:
// export async function PUT(request: Request) { ... }
// export async function DELETE(request: Request) { ... }
// export async function PATCH(request: Request) { ... }
