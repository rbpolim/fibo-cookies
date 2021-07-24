import Link from "next/link";
import { useRouter } from "next/router";
import { MenuIcon } from "@heroicons/react/solid";

export function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center bg-yellow-300 p-6 font-mono">
      <div className="flex flex-grow cursor-pointer">
        <Link href="/">
          <h1 className="text-lg">COOKIES</h1>
        </Link>
      </div>

      <div className="mr-4">
        <ul className="flex items-center space-x-6">
          <li className="link">
            <Link href="/">MENU</Link>
          </li>
          <li className="link">
            <Link href="/">ABOUT</Link>
          </li>
          <li className="link">
            <button className="bg-white p-2 rounded-md border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-700">
              SIGN UP
            </button>
          </li>
        </ul>
      </div>

      <div className="hidden cursor-pointer">
        <MenuIcon className="h-10" />
      </div>
    </nav>
  );
}
