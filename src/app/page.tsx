'use client';

import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-white px-6 text-center relative">
      <img className='absolute top-0 left-0 w-full h-full object-cover z-0' src="/banner.jpg" alt="banner" />
      <div className='bg-[#00000046] w-full h-full absolute top-0 left-0 z-0'></div>
      <div className='z-10'>
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-[#ffdb07]">Abhay Kumar Gupta</span>
      </h1>
    <p className="text-lg sm:text-xl max-w-2xl mb-6">
  A passionate <span className="text-[#ffdb07]">Frontend Developer</span> focused on building responsive, user-friendly web applications using modern technologies like <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>.
</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/portfolio"
          className="bg-[#ffdb07] text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-500 transition"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="border border-[#ffdb07] px-6 py-2 rounded-lg font-semibold hover:bg-[#ffdb07] hover:text-black transition"
        >
          Contact Me
        </Link>
      </div>
      </div>
    </main>
  );
}
