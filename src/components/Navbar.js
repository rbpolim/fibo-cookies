import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";

import { useAuth } from "../hooks/useAuth";

export function Navbar({ toggle }) {
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

      <div className="hidden md:inline-flex mr-4">
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
          <div className="flex flex-col">
            <p className="text-sm">Welcome,</p>
            <h1 className="font-black border-b-2 border-black">{user?.name}</h1>
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
