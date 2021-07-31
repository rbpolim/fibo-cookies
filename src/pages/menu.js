import Head from "next/head";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProductFeed } from "../components/ProductFeed";

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <Navbar />
      <ProductFeed />
      <Footer />
    </>
  );
}
