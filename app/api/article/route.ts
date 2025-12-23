import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)
  console.log('QueryParams for article endpoint: ', searchParams)

  return NextResponse.json({
    message: `Searching for article with filters: ${searchParams}`,
  })
}
