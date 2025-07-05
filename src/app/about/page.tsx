'use client';

import React, { useEffect, useState } from 'react';

const skills = [
  { name: 'HTML', level: 85 },
  { name: 'CSS', level: 75 },
  { name: 'JavaScript', level: 60 },
  { name: 'React', level: 75 },
  { name: 'Next.js', level: 60 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Bootstrap', level: 75 },
  { name: 'Git & GitHub', level: 75 },
  { name: 'Figma', level: 50 },
];

export default function AboutPage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#ffdb07] mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm <span className="text-[#ffdb07] font-medium">Abhay Kumar Gupta</span>, a front-end developer passionate about crafting visually appealing, responsive, and user-friendly web applications. I specialize in building modern interfaces using technologies like <strong>React.js</strong>, <strong>Next.js</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>.
            <br /><br />
            I hold a <strong>Diploma in Computer Engineering</strong> and have further strengthened my practical knowledge through a <strong>Front-End Development Training</strong> at <strong>Broadway Infosys</strong>. This combination of academic foundation and industry-focused training has helped me build real-world skills.
            <br /><br />
            During my internship at <strong>SRIYOG Consulting Pvt. Ltd.</strong>, I contributed to multiple web projects including e-commerce platforms and news portals. I’m skilled in semantic HTML, modular CSS/SASS, and responsive UI development with frameworks like Tailwind and Bootstrap.
            <br /><br />
            I'm also familiar with UI/UX tools like <strong>Figma</strong> and version control systems like <strong>Git & GitHub</strong>. Currently, I'm focused on improving my full-stack capabilities while building fast, scalable, and SEO-friendly applications using <strong>Next.js</strong>.
          </p>
        </div>



        {/* Skills Section */}
        <div className="text-center mb-10 fade">
          <h3 className="text-3xl font-semibold text-[#ffdb07] mb-4">My Skills</h3>
          <p className="text-gray-400 text-lg">
            Here’s how proficient I am with each technology I use.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1 text-sm sm:text-base">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden">
                <div
                  className="bg-[#ffdb07] h-4 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: animate ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
