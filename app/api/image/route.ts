import { NextResponse, NextRequest } from 'next/server'
import { put } from '@vercel/blob'

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');
  if ( !request.body || !filename) {
    return NextResponse.json({message:"false"});

  }
  const blob = await put(filename, request.body, {
    access: 'public',
    // contentType: 'image/*'
  });

  return NextResponse.json(blob);
}