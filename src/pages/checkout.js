import Head from "next/head";
import axios from "axios";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/client";

import { selectItems, selectTotal } from "../slices/basketSlice";

import { Navbar } from "../components/Navbar";
import { CheckoutProduct } from "../components/CheckoutProduct";

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.stripe_public_key);

export default function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const [session] = useSession();

  const handleCreateCheckoutSession = async () => {
    const stripe = await stripePromise;

    // call the backend to create a Stripe Session;
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items,
      email: session.user.email,
    });

    // redirect user/customer to the checkout session;
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="">
      <Head>
        <title>Checkout</title>
      </Head>
      <Navbar />

      <main className="relative mt-4 p-8 lg:flex font-mono max-w-4xl mx-auto ">
        <div className="flex-grow space-y-6 ">
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
        </div>

        <div className="flex flex-col mt-8 lg:ml-10">
          <div className="flex font-black whitespace-nowrap">
            <h2>Subtotal ({items.length} items):</h2>
            <span className="ml-2">${total}</span>
          </div>
          <button
            role="link"
            onClick={handleCreateCheckoutSession}
            className="buttonTwo mt-2"
          >
            {!session ? "Sign in to checkout" : "Proceed to checkout"}
          </button>
        </div>
      </main>
    </div>
  );
}
