'use client';

import React from 'react';

export default function page() {
  return (
    <main className="bg-black text-white py-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-[#ffdb07] mb-8">Resume</h1>

        {/* Download Button */}
        <div className="text-center mb-12">
          <a
            href="/Abhay Kumar Gupta.pdf" // Make sure this file is in your /public folder
            download
            className="inline-block border border-[#ffdb07] px-6 py-2 rounded-lg font-semibold text-[#ffdb07] hover:bg-[#ffdb07] hover:text-black transition"
          >
            Download Resume
          </a>
        </div>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#ffdb07] mb-4">Education</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Diploma in Computer Engineering</strong><br />
              Janjyoti Secondary School, Lalbandi, Sarlahi (2021–2024)
            </li>
          </ul>
        </section>

        {/* Training */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#ffdb07] mb-4">Training</h2>
          <p className="text-gray-300">
            <strong>Front-End Development Training</strong> <br />
            Broadway Infosys Nepal <br />
            September 2024 – November 2024
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#ffdb07] mb-4">Experience</h2>
          <p className="text-gray-300">
            <strong>React.js Intern</strong> <br />
            SRIYOG Consulting Pvt. Ltd. <br />
            February 2025 – May 2025
          </p>
        </section>

        
      </div>
    </main>
  );
}
