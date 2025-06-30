import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/">
          <span className="font-bold text-xl tracking-wide">privator.id</span>
        </Link>
        {/* Burger icon for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-opacity ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Desktop nav */}
        <nav className="space-x-4 hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
          <Link href="/profile">Profile</Link>
        </nav>
      </div>
      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-primary text-white px-4 pb-4 flex flex-col space-y-2 animate-fade-in">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
          <Link href="/signup" onClick={() => setOpen(false)}>Signup</Link>
          <Link href="/profile" onClick={() => setOpen(false)}>Profile</Link>
        </nav>
      )}
    </header>
  );
};

export default Header; 