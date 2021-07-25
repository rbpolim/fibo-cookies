import { useState } from "react";
import Head from "next/head";

import { Navbar } from "../components/Navbar";
import { Dropdown } from "../components/Dropdown";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white font-mono">
      <Head>
        <title>Fibo Cookies</title>
      </Head>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Dropdown isOpen={isOpen} />
      <Hero />
      <Footer />
    </div>
  );
}
