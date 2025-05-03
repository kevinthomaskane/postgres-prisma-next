'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>Login</h1>
      <form>
        <label>username</label>
        <input
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>password</label>
        <input
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <p>
        Dont have an account? <Link href="/register">Register</Link>
      </p>
    </>
  );
}
