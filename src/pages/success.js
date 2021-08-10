import { useRouter } from "next/router";
import { CheckCircleIcon } from "@heroicons/react/solid";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Success() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <main className="h-screen max-w-screen-sm mx-auto">
        <div className="flex flex-col items-center space-y-4 p-10">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="h-10 text-green-500" />
            <h1 className="text-2xl">
              Thank you, you order has been confirmed.
            </h1>
          </div>

          <p>
            Thank you for shopping with us. We'll send a confirmation once your
            item has shipped, if you would like to check the status of your
            order(s) please press the link below.
          </p>

          <button onClick={() => router.push("/orders")} className="button">
            Go to my orders
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
