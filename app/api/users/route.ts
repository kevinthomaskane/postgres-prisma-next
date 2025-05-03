import { PrismaClient } from '@/app/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email } = data;

  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: `Failed to create user: ${err}` },
      { status: 500 },
    );
  }
}
