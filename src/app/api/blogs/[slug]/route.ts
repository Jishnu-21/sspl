import { NextRequest, NextResponse } from 'next/server';
import { BASE_URL } from '../../../config/endpoint';

export async function GET(req: NextRequest, context: { params: any }) {
  try {
    const { slug } = context.params;
    const backendRes = await fetch(`http://${BASE_URL}/api/blogs/${slug}`);
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

export async function DELETE(req: NextRequest, context: { params: any }) {
  try {
    const { slug } = context.params;
    const backendRes = await fetch(`http://${BASE_URL}/api/blogs/${slug}`, { method: 'DELETE' });
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

export async function PUT(req: NextRequest, context: { params: any }) {
  try {
    const { slug } = context.params;
    const formData = await req.formData();
    const backendRes = await fetch(`http://${BASE_URL}/api/blogs/${slug}`, {
      method: 'PUT',
      body: formData,
    });
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