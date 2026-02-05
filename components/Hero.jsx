'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMysql, SiVite } from 'react-icons/si';
import { BiLinkExternal } from 'react-icons/bi';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ===== TYPING EFFECT (NAMA SAJA) ===== */
  const fullName = 'Muhammad Fairuz Anwar';
  const [typedName, setTypedName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setTypedName(prev =>
        isDeleting
          ? fullName.substring(0, prev.length - 1)
          : fullName.substring(0, prev.length + 1)
      );

      if (!isDeleting && typedName === fullName) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && typedName === '') {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedName, isDeleting, fullName]);

  const handleMenuToggle = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const skills = [
    { icon: <FaHtml5 className="text-orange-500 w-8 h-8" />, level: 'Advanced' },
    { icon: <FaCss3Alt className="text-blue-500 w-8 h-8" />, level: 'Advanced' },
    { icon: <FaJs className="text-yellow-400 w-8 h-8" />, level: 'Advanced' },
    { icon: <FaReact className="text-blue-400 w-8 h-8" />, level: 'Advanced' },
    { icon: <SiNextdotjs className="text-white w-8 h-8" />, level: 'Advanced' },
    { icon: <SiTailwindcss className="text-sky-400 w-8 h-8" />, level: 'Advanced' },
    { icon: <FaNode className="text-green-500 w-8 h-8" />, level: 'Intermediate' },
    { icon: <SiVite className="text-purple-500 w-8 h-8" />, level: 'Advanced' },
    { icon: <SiMysql className="text-blue-700 w-8 h-8" />, level: 'Advanced' },
  ];


  const projects = [
  {
    src: '/images/website-perpus.png',
    title: 'Jendela Dunia',
    desc: 'Web-based library system for borrowing, returning, and managing book inventory.',
    tech: ['Next.js', 'TailwindCSS', 'MySQL', 'Node.js'],
    live: 'https://perpus-iota.vercel.app/',
    github: 'https://github.com/Fayruary/perpustakaan-sederhana',
    span: 'sm:col-span-2 lg:col-span-2',
    aspect: 'aspect-[16/9]'
  },
  {
    src: '/images/lp.png',
    title: 'Borcelle Thrifting',
    desc: 'Responsive product landing page with modern UI animation and SEO optimization.',
    tech: ['React', 'Vite', 'TailwindCSS'],
    live: 'https://landingpage.vercel.app',
    github: 'https://github.com/Fayruary/Tugas-AAS-React-Vite',
    aspect: 'aspect-[4/3]'
  },
  {
    src: '/images/nime2.png',
    title: 'Anime Streaming Website',
    desc: 'Streaming website with search, filtering, and dynamic anime data integration.',
    tech: ['Next.js', 'API', 'TailwindCSS'],
    live: 'https://nime-fayz.vercel.app',
    github: 'https://github.com/username/nime-fayz',
    span: 'sm:col-span-2',
    aspect: 'aspect-[16/9]'
  },
];


  const certificates = [
  {
    src: '/images/react.png',
    title: 'React Developer Certificate',
    issuer: 'Dicoding Indonesia',
    year: '2024',
    desc: 'Certification for completing React development training including hooks, state management, and SPA architecture.'
  },
  {
    src: '/images/dasar.png',
    title: 'Basic Web Development',
    issuer: 'Dicoding Indonesia',
    year: '2024',
    desc: 'Certification covering HTML, CSS, JavaScript fundamentals and responsive web design.'
  },
  {
    src: '/images/react.png',
    title: 'Frontend Intermediate',
    issuer: 'Dicoding Indonesia',
    year: '2025',
    desc: 'Intermediate level frontend certification focusing on modern UI development and performance optimization.'
  },
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

        <a href="/cvfai.pdf" download className="hidden md:flex items-center gap-2 bg-gradient-to-r from-neutral-800 to-black 
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
              <a href="/cvfai.pdf" download onClick={closeMenu} className="bg-gradient-to-r from-neutral-800 to-black px-6 py-3 border border-gray-700 rounded-full font-medium hover:opacity-90 transition text-sm w-fit">
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

            {/* ===== NAMA (TYPING EFFECT) ===== */}
            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">
              {typedName}
              <span className="animate-pulse">|</span>
              <span className="inline-block ml-2 rounded-full bg-white/10 p-2">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl">
              I’m a versatile UI/UX Designer and Fullstack Developer specializing in web and product design to help grow your business.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="#projects" className="bg-white text-black px-6 py-3 border border-gray-700 rounded-full font-medium hover:bg-gray-200 transition text-sm">
                See All Projects
              </Link>
              <Link
  href="#contact"
  className="bg-gradient-to-r from-neutral-800 to-black px-6 py-3 border border-gray-700 rounded-full font-medium hover:opacity-90 transition text-sm"
>
  Contact Now
</Link>

            </div>
          </div>

          {/* Floating Testimonials */}
          <div className="relative h-[280px] md:h-[300px] lg:h-[320px] w-full">
  <motion.blockquote
    animate={{
      y: [-6, 6, -6],
      rotate: [-4, -2, -4],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="absolute top-6 left-0 bg-gradient-to-br from-white/5 to-white/10 
               border border-white/10 text-base text-white p-5 rounded-xl 
               shadow-md w-80 backdrop-blur-md"
  >
    "Bekerja dengannya sangat menyenangkan."
    <footer className="text-right mt-3 text-sm text-gray-400">– Fajril</footer>
  </motion.blockquote>

  <motion.blockquote
    animate={{
      y: [6, -6, 6],
      rotate: [4, 2, 4],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1.2,
    }}
    className="absolute bottom-6 right-0 bg-gradient-to-br from-white/5 to-white/10 
               border border-white/10 text-base text-white p-5 rounded-xl 
               shadow-md w-80 backdrop-blur-md"
  >
    "Desain dan pengembangannya sangat membantu."
    <footer className="text-right mt-3 text-sm text-gray-400">– Raafi</footer>
  </motion.blockquote>
</div>

        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl font-bold mb-8 text-center md:text-left">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ src, title, desc, tech, span = '', aspect, live, github }) => (
  <div
    key={src}
    className={`rounded-2xl bg-white/5 backdrop-blur border border-white/10 
                overflow-hidden ${span}`}
  >
    {/* image */}
    <div className={`relative ${aspect}`}>
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover"   
      />
    </div>

    {/* content */}
    <div className="p-5 space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-sm text-gray-400">{desc}</p>

      {/* tech badges */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* buttons */}
      <div className="flex items-center gap-3 pt-2">
        <a
          href={github}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     border border-white/10 text-sm hover:bg-white/10 transition"
        >
          <FaGithub className="w-4 h-4" />
          Code
        </a>

        <a
          href={live}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     bg-white text-black text-sm font-medium
                     hover:bg-gray-200 transition"
        >
          <BiLinkExternal className="w-4 h-4" />
          Live
        </a>
      </div>
    </div>
  </div>
))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATE SECTION ===== */}
      <section id="certificate" className="bg-black py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl font-bold mb-12 text-center md:text-left">Certificate</h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {certificates.map(({ src, title, desc, issuer, year }) => (
    <div
      key={src}
      className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 overflow-hidden"
    >
      {/* image */}
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* issuer + year */}
        <div className="flex items-center justify-between text-xs">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">
            {issuer}
          </span>
          <span className="text-gray-400">{year}</span>
        </div>

        <p className="text-sm text-gray-400">{desc}</p>

        <a
          href={src}
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     bg-white text-black text-sm font-medium
                     hover:bg-gray-200 transition"
        >
          <BiLinkExternal className="w-4 h-4" />
          View Certificate
        </a>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl font-bold mb-8 text-center md:text-left">Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
      {skills.map((skill, i) => (
        <motion.div
  key={i}
  animate={{
    y: [-6, 6, -6],   // floating naik-turun
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
    delay: i * 0.15,
  }}
  whileHover={{
    scale: 1.15,
    rotate: 6,
  }}
  className="flex flex-col items-center gap-2 p-4 rounded-xl
             bg-white/5 backdrop-blur border border-white/10"
>
  {skill.icon}
  <span className="text-xs text-gray-400">
    {skill.level}
  </span>
</motion.div>

      ))}
    </div>
        </div>
      </section>

    </div>
  );
}
