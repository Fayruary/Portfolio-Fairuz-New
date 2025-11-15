// pages/index.js
import Head from "next/head";
import dynamic from "next/dynamic";
// Import components (static first, heavy ones dynamically)
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <Hero />
      <About />
      <Footer />
    </>
  );
}
