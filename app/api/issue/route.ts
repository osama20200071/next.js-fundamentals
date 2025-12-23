import { db } from '@/db'
import { issues } from '@/db/schema'
import { NextRequest, NextResponse } from 'next/server'

// get all issues
export async function GET() {
  // todo: check auth

  try {
    const issues = await db.query.issues.findMany()
    return NextResponse.json({ data: issues })
  } catch (e) {
    console.error('Error fetching issues:', e)
    return NextResponse.json(
      { error: 'Failed to fetch issues' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    if (!data.title || !data.userId) {
      return NextResponse.json(
        { error: 'Title and userId are required' },
        { status: 400 }
      )
    }

    const createdIssue = db
      .insert(issues)
      .values({
        title: data.title,
        description: data.description,
        status: data.status || 'backlog',
        priority: data.priority || 'medium',
        userId: data.userId,
      })
      .returning()

    return NextResponse.json(
      { message: 'Issue created successfully', data: createdIssue },
      { status: 201 }
    )
  } catch (e) {
    console.error('Error creating issue:', e)
    return NextResponse.json(
      { error: 'Failed to create issue' },
      { status: 500 }
    )
  }
}
