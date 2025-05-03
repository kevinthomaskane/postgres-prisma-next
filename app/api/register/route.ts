import { PrismaClient } from '@/app/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, username, password, name } = await req.json();

  if (!email || !username || !password) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 },
    );
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { username }],
    },
  });

  if (existingUser) {
    return NextResponse.json(
      { error: 'Email or username already exists' },
      { status: 400 },
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      username,
      name,
      password: hashedPassword,
    },
  });

  return NextResponse.json({
    message: 'User registered successfully',
    user: { id: user.id, email: user.email, username: user.username },
  });
}
