import { NextRequest, NextResponse } from 'next/server';
import { BASE_URL } from '../../../config/endpoint';

export async function GET(req: NextRequest, { params }: { params: { key: string } }) {
  try {
    const { key } = params;
    const backendRes = await fetch(`http://${BASE_URL}/api/banners/${key}`);
    const data = await backendRes.json();
    return new NextResponse(JSON.stringify(data), {
      status: backendRes.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new NextResponse(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 