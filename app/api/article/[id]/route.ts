import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params

  const articleData = {
    id,
    title: 'First article',
    description: 'article desc',
  }

  return NextResponse.json(articleData)
}
