import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export function Hero() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-black sm:text-7xl lg:text-9xl tracking-wider">
        FIBONACCI
      </h1>
      <div className="mt-8 animate-bounce">
        <button
          onClick={() => router.push("/menu")}
          className="flex text-2xl items-center p-6 rounded-full bg-gradient-to-t from-yellow-200 to-yellow-400 hover:from-yellow-500 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-700 shadow-lg "
        >
          Order Now
          <ShoppingCartIcon className="h-8 ml-4 " />
        </button>
      </div>
    </div>
  );
}
