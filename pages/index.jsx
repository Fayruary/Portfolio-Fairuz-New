// pages/index.js
import Head from "next/head";

// Import components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Creatifaii – Fullstack Developer</title>

        <meta
          name="description"
          content="Saya adalah Fullstack Developer yang membangun aplikasi web dan produk digital untuk membantu mengembangkan bisnis."
        />

        <meta name="author" content="Nama Kamu" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nama Kamu – Fullstack Developer" />
        <meta
          property="og:description"
          content="Fullstack Developer yang fokus membangun solusi web modern dan scalable."
        />
        <meta property="og:url" content="https://website-kamu.com" />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nama Kamu – Fullstack Developer" />
        <meta
          name="twitter:description"
          content="Fullstack Developer yang membangun solusi web modern."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <Hero />
      <About />
      <Footer />
    </>
  );
}
