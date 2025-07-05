'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#ffffff54] text-white shadow-sm backdrop-blur-[4px] transition-all">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold">Abhay Kumar Gupta</Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 text-lg">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-[#eeee] ${
                pathname === href ? 'text-[#ffdb07] font-semibold' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social Icons (Desktop Only) */}
        <div className="hidden lg:flex gap-4 items-center">
          <Link href="https://github.com/abhay-gupta2" target="_blank">
            <img className="w-6 h-6" src="/icons/github.svg" alt="GitHub" />
          </Link>
          <Link href="https://www.linkedin.com/in/abhay-kumar-gupta-929116308" target="_blank">
            <img className="w-6 h-6" src="/icons/linkedin.svg" alt="LinkedIn" />
          </Link>
          <Link href="mailto:akgupta128125@gmail.com">
            <img className="w-6 h-6" src="/icons/envelope.svg" alt="Email" />
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="transition-transform duration-300 ease-in-out"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? '/icons/cross.svg' : '/icons/hamburger.svg'}
              alt="Menu Icon"
              className={`w-6 h-6 transform transition-transform duration-300 ${
                isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        } bg-[#ffffff54] backdrop-blur-[4px]`}
      >
        <div className="px-6 py-4 space-y-4">
          <nav className="flex flex-col gap-4 text-lg items-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors hover:text-[#ffdb07] ${
                  pathname === href ? 'text-[#ffdb07] font-semibold' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Social Icons */}
          <div className="flex gap-4 mt-4 justify-center">
            <Link href="https://github.com/abhay-gupta2" target="_blank">
              <img className="w-6 h-6" src="/icons/github.svg" alt="GitHub" />
            </Link>
            <Link href="https://www.linkedin.com/in/abhay-kumar-gupta-929116308" target="_blank">
              <img className="w-6 h-6" src="/icons/linkedin.svg" alt="LinkedIn" />
            </Link>
            <Link href="mailto:akgupta128125@gmail.com">
              <img className="w-6 h-6" src="/icons/envelope.svg" alt="Email" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
