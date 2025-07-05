import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
      <section className='bg-black py-20 px-6 text-white'>
        <div className='max-w-4xl mx-auto'>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
            <Link href='https://itsikshya.netlify.app' target='_blank' className='group'>
              <div className='overflow-hidden'>
                <img className='group-hover:scale-105 transition-all duration-400 w-full h-[203px] object-cover' src="/projects/IT_Sikshya.png" alt="it_sikshya" />
              </div>
              <h2 className='text-2xl font-bold mt-4'>IT Sikshya</h2>
              <p>A React and Tailwind CSS-based educational platform offering hybrid IT training and real-world project experience.</p>
            </Link>

            <Link href='https://itsikshya.netlify.app' target='_blank' className='group'>
              <div className='overflow-hidden'>
                <img
                  className='group-hover:scale-105 transition-all duration-400 w-full h-full object-cover'
                  src="/projects/project-1.jpg"
                  alt="it_sikshya" />
              </div>
              <h2 className='text-2xl font-bold mt-4'>Daraz-Copy(E-commerce)</h2>
              <p>A React-js-based E-commerce platform copy of Daraz using Bootstrap framewrok.</p>
            </Link>

            <Link href='https://itsikshya.netlify.app' target='_blank' className='group'>
              <div className='overflow-hidden'>
                <img
                  className='group-hover:scale-105 transition-all duration-400 w-full h-full object-cover'
                  src="/projects/project-2.png"
                  alt="it_sikshya" />
              </div>
              <h2 className='text-2xl font-bold mt-4'>Daraz-Copy(E-commerce)</h2>
              <p>A Next.js-based E-commerce platform copy of Daraz using Tailwind CSS.</p>
            </Link>

            <Link href='https://itsikshya.netlify.app' target='_blank' className='group'>
              <div className='overflow-hidden'>
                <img
                  className='group-hover:scale-105 transition-all duration-400 w-full h-full object-cover'
                  src="/projects/project-3.jpg"
                  alt="it_sikshya" />
              </div>
              <h2 className='text-2xl font-bold mt-4'>ImageKhabar</h2>
              <p>A React.js and Tailwind CSS-based news portal website.</p>
            </Link>

            <Link href='https://itsikshya.netlify.app' target='_blank' className='group'>
              <div className='overflow-hidden'>
                <img
                  className='group-hover:scale-105 transition-all duration-400 w-full h-full object-cover'
                  src="/projects/project-4.png"
                  alt="it_sikshya" />
              </div>
              <h2 className='text-2xl font-bold mt-4'>ImageKhabar</h2>
              <p>A Next.js and Tailwind CSS-based news portal website.</p>
            </Link>

            <Link href='https://itsikshya.netlify.app' target='_blank' className='group'>
              <div className='overflow-hidden'>
                <img
                  className='group-hover:scale-105 transition-all duration-400 w-full h-full object-cover'
                  src="/projects/project-5.png"
                  alt="it_sikshya" />
              </div>
              <h2 className='text-2xl font-bold mt-4'>Corporate Website</h2>
              <p>A corporate website built with HTML, CSS, and the Bootstrap framework.</p>
            </Link>

          </div>
        </div>
      </section>
    </>
  )
}

export default page
