import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { MenuIcon, ShoppingCartIcon } from "@heroicons/react/solid";

import { useAuth } from "../hooks/useAuth";
import { selectItems } from "../slices/basketSlice";

export function Navbar({ toggle }) {
  const router = useRouter();
  const items = useSelector(selectItems);

  const { user, signInWithGoogle } = useAuth();

  const handleSignIn = async () => {
    if (!user) {
      await signInWithGoogle();
    }
  };

  return (
    <nav className="flex items-center bg-yellow-300 p-6 font-mono shadow-lg sticky z-50 top-0 opacity-90">
      <div className="flex flex-grow cursor-pointer">
        <Link href="/">
          <h1 className="text-lg tracking-wider link ">FIBO COOKIES</h1>
        </Link>
      </div>

      <div className="hidden md:inline-flex mr-12">
        <ul className="flex items-center space-x-6">
          <li className="link">
            <Link href="/menu">MENU</Link>
          </li>
          <li className="link">
            <Link href="/">ABOUT</Link>
          </li>
        </ul>
      </div>

      <div className="mr-6">
        {user ? (
          <div className="flex">
            <div className="mr-4 flex flex-col">
              <p className="text-sm">Welcome,</p>
              <h1 className="font-black border-b-2 border-black">
                {user?.name}
              </h1>
            </div>
            <div
              onClick={() => router.push("/checkout")}
              className="relative link flex items-center"
            >
              <span className="absolute text-center text-xs top-0 right-0 md:right-10 h-4 w-4 rounded-full text-black bg-white font-bold">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline tracking-wider md:text-sm mt-2">
                BASKET
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            className="link bg-white p-2 rounded-md border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-700"
          >
            SIGN UP
          </button>
        )}
      </div>

      <div onClick={toggle} className="md:hidden cursor-pointer">
        <MenuIcon className="h-8" />
      </div>
    </nav>
  );
}
