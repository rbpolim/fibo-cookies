import Head from "next/head";
import { useSelector } from "react-redux";

import { selectItems, selectTotal } from "../slices/basketSlice";

import { Navbar } from "../components/Navbar";
import { CheckoutProduct } from "../components/CheckoutProduct";

export default function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div className="">
      <Head>
        <title>Checkout</title>
      </Head>
      <Navbar />

      <div className="relative h-screen bg-white font-mono">
        <main className=" max-w-3xl mx-auto space-y-6 p-8">
          {items.length > 0 ? (
            <h1 className="text-2xl font-bold border-b-4 border-gray-100 ">
              Your Basket:{" "}
            </h1>
          ) : (
            <h1 className="text-2xl font-bold border-b-4 border-gray-100">
              Your basket is empty 😭
            </h1>
          )}

          {/* PRODUCT */}
          {items.map((item) => (
            <CheckoutProduct
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}

          <div className="flex font-black">
            <h2>Subtotal ({items.length} items):</h2>
            <span className="ml-2">${total}</span>
          </div>
        </main>
      </div>
    </div>
  );
}
