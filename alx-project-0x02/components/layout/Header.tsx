import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <h1 className="text-2xl font-semibold">ALX Project 2 Header</h1>
      <nav className="flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/home">/home</Link>
        <Link href="/about">/about</Link>
      </nav>
    </header>
  );
};

export default Header;
