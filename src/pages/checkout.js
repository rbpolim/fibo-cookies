import Head from "next/head";
import axios from "axios";
import { useSelector } from "react-redux";

import { useAuth } from "../hooks/useAuth";
import { selectItems, selectTotal } from "../slices/basketSlice";

import { Navbar } from "../components/Navbar";
import { CheckoutProduct } from "../components/CheckoutProduct";

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.stripe_public_key);

export default function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const { user } = useAuth();

  const handleCreateCheckoutSession = async () => {
    const stripe = await stripePromise;

    // call the backend to create a Stripe Session;
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items,
      email: user.email,
    });

    // redirect user/customer to the checkout session;
  };

  return (
    <div className="">
      <Head>
        <title>Checkout</title>
      </Head>
      <Navbar />

      <div className="bg-yellow-50 relative h-screen font-mono">
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

          <div>
            <button
              role="link"
              onClick={handleCreateCheckoutSession}
              className="buttonTwo"
            >
              Proceed to Checkout
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
