'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const skills = [
    { name: 'HTML & CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React & Next.js', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Node.js & Express', level: 'Intermediate' },
    { name: 'UI/UX Design', level: 'Advanced' },
  ];

  return (
    <div className="bg-black text-white min-h-screen w-full scroll-smooth">
      {/* ===== HEADER ===== */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 
                         bg-white/10 backdrop-blur-md text-white px-6 md:px-8 py-3 
                         rounded-full shadow-lg flex items-center justify-between gap-6 
                         w-[90%] max-w-6xl">
        <Link href="/" aria-label="Home" className="flex items-center gap-2">
          <img src="/images/profile.jpg" alt="Fayz" className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"/>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-20 text-lg text-gray-400">
          <Link href="#projects" className="hover:text-white transition">Projects</Link>
          <Link href="#certificate" className="hover:text-white transition">Certificate</Link>
          <Link href="#skills" className="hover:text-white transition">Skills</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* Mobile Menu */}
        <button onClick={handleMenuToggle} className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded" aria-label="Open menu" aria-expanded={isMenuOpen}>
          <Menu className="w-6 h-6 text-white"/>
        </button>

        <a href="/cv.pdf" download className="hidden md:flex items-center gap-2 bg-gradient-to-r from-neutral-800 to-black 
                                           px-6 py-3 border border-gray-700 rounded-full font-medium 
                                           hover:opacity-90 transition text-sm">
          Download CV
        </a>
      </header>

      {/* ===== MOBILE SIDEBAR MENU ===== */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} aria-hidden="true"/>
          <aside className={`fixed top-0 left-0 h-full w-64 bg-black z-50 p-6 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="mt-5 flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/images/profile.jpg" alt="Profile" width={40} height={40} className="rounded-full object-cover"/>
                <span className="text-white font-semibold text-lg md:text-2xl">Fairuz</span>
              </Link>
              <button onClick={closeMenu} className="text-white" aria-label="Close menu">
                <X className="w-6 h-6"/>
              </button>
            </div>

            <nav className="flex flex-col gap-6 mt-12">
              <Link href="#projects" onClick={closeMenu} className="hover:text-white transition">Projects</Link>
              <Link href="#certificate" onClick={closeMenu} className="hover:text-white transition">Certificate</Link>
              <Link href="#skills" onClick={closeMenu} className="hover:text-white transition">Skills</Link>
              <Link href="#contact" onClick={closeMenu} className="hover:text-white transition">Contact</Link>
              <a href="/cv.pdf" download onClick={closeMenu} className="bg-gradient-to-r from-neutral-800 to-black px-6 py-3 border border-gray-700 rounded-full font-medium hover:opacity-90 transition text-sm w-fit">
                Download CV
              </a>
            </nav>
          </aside>
        </>
      )}

      {/* ===== HERO SECTION ===== */}
      <section id="hero" className="pt-32 md:pt-40 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm text-gray-300 backdrop-blur-md w-fit border border-white/10">
              <span className="text-xs">●</span> UI/UX & Fullstack Dev
            </div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">
              Muhammad Fairuz <span className="font-semibold text-white">Anwar</span>
              <span className="inline-block ml-2 rounded-full bg-white/10 p-2">
                <ArrowUpRight className="w-4 h-4"/>
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl">
              I’m a versatile UI/UX Designer and Fullstack Developer specializing in web and product design to help grow your business. Let’s build something great!
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="#projects" className="bg-white text-black px-6 py-3 border border-gray-700 rounded-full font-medium hover:bg-gray-200 transition text-sm">
                See All Projects
              </Link>
              <button className="bg-gradient-to-r from-neutral-800 to-black px-6 py-3 border border-gray-700 rounded-full font-medium hover:opacity-90 transition text-sm">
                Contact Now
              </button>
            </div>
          </div>

          {/* Floating Testimonials */}
          <div className="relative h-[280px] md:h-[300px] lg:h-[320px] w-full">
            <blockquote className="absolute top-6 left-0 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 text-base text-white p-5 rounded-xl shadow-md w-80 rotate-[-4deg] backdrop-blur-md">
              "Bekerja dengannya sangat menyenangkan."
              <footer className="text-right mt-3 text-sm text-gray-400">– Fajril</footer>
            </blockquote>

            <blockquote className="absolute bottom-6 right-0 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 text-base text-white p-5 rounded-xl shadow-md w-80 rotate-[4deg] backdrop-blur-md">
              "Desain dan pengembangannya sangat membantu."
              <footer className="text-right mt-3 text-sm text-gray-400">– Raafi</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl font-bold mb-8 text-center md:text-left">Featured Projects</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { src: '/images/website-perpus.png', alt: 'Project 1', span: 'sm:col-span-2 lg:col-span-2', aspect: 'aspect-[16/9]' },
    { src: '/images/lp.png', alt: 'Project 2', aspect: 'aspect-[4/3]' },
    { src: '/images/nime2.png', alt: 'Project 3', span: 'sm:col-span-2', aspect: 'aspect-[16/9]' },
    { src: '/images/lp.png', alt: 'Project 4', aspect: 'aspect-[4/3]' },
  ].map(({ src, alt, span = '', aspect }) => {
    const isFourThree = aspect === 'aspect-[4/3]'; // cek apakah 4:3
    return (
     <a key={src} href={src} target="_blank" rel="noopener noreferrer" className={`relative group ${span}`}>
  <div className={`overflow-hidden ${aspect} rounded-lg`}>
    <Image 
      src={src} 
      alt={alt} 
      fill 
      className={`object-cover transition-transform duration-300 group-hover:scale-105 ${isFourThree ? 'object-top' : 'object-center'}`}
      sizes="(max-width: 1024px) 100vw, 33vw"
      loading="lazy"
    />
  </div>
  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
    <span className="text-white text-lg font-semibold">View Project</span>
  </div>
</a>
    )
  })}
</div>
        </div>
      </section>

           <section id="certificate" className="bg-black py-4 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-white text-4xl font-bold mb-12 text-center md:text-left">
      Certificate
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { src: '/images/react.png', alt: 'Certificate 1' },
        { src: '/images/dasar.png', alt: 'Certificate 2' },
        { src: '/images/react.png', alt: 'Certificate 3' },
      ].map(({ src, alt }) => (
        <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="relative group">
          <Image
            src={src}
            alt={alt}
            width={600}
            height={400}
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg font-semibold">View Certificate</span>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>



      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl font-bold mb-8 text-center md:text-left">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map(skill => (
              <div key={skill.name} className="bg-white/5 p-4 rounded-lg flex flex-col items-center text-center hover:bg-white/10 transition">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400 text-sm mt-1">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
