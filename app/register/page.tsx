'use client';

import { useState } from 'react';
import { RegisterError, RegisterSuccess } from '@/types/api';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password }),
    });

    if (!res.ok) {
      const { error }: RegisterError = await res.json();
      setMessage(error);
      return;
    }

    const { message }: RegisterSuccess = await res.json();
    setMessage(message);
  };
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="block">email</label>
        <input
          value={email}
          className="bg-gray-100"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block">username</label>
        <input
          value={username}
          className="bg-gray-100"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="block">password</label>
        <input
          value={password}
          className="bg-gray-100"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="block bg-gray-300">
          submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}
