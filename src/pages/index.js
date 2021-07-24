import { useState } from "react";
import Head from "next/head";

import { Navbar } from "../components/Navbar";
import { Dropdown } from "../components/Dropdown";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        <title>Fibo Cookies</title>
      </Head>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Dropdown isOpen={isOpen} />
    </div>
  );
}
