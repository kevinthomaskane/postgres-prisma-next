import { cookies } from 'next/headers';
import Link from 'next/link';
import { verify } from 'jsonwebtoken';

type TokenPayload = { id: number; username: string; email: string };
const JWT_SECRET = process.env.JWT_SECRET!;

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  let username = '';
  if (token) {
    try {
      const decoded = verify(token, JWT_SECRET) as TokenPayload;
      username = decoded.username;
    } catch (err) {
      console.error('Invalid token:', err);
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {username && <h1>HELLO: {username}</h1>}
        <ul>
          <li>
            <Link href="/login">login</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
