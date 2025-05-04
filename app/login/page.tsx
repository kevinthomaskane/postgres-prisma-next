'use client';

import { LoginError } from '@/types/api';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const { error }: LoginError = await res.json();
      setMessage(error);
      return;
    }

    window.location.href = '/';
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="block">email</label>
        <input
          value={email}
          className="bg-gray-100"
          placeholder="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block">password</label>
        <input
          value={password}
          className="bg-gray-100"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
      <p>
        Dont have an account? <Link href="/register">Register</Link>
      </p>
      {message && <p>{message}</p>}
    </>
  );
}
