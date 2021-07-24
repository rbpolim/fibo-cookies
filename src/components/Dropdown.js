import Link from "next/link";

export function Dropdown({ isOpen }) {
  return (
    <div className={isOpen ? "" : "hidden"}>
      <ul className="grid grid-rows-3 text-center w-full bg-black text-white text-lg">
        <li className="link p-4">
          <Link href="/menu">MENU</Link>
        </li>
        <li className="link p-4">
          <Link href="/">ABOUT</Link>
        </li>
        <li className="link p-4">
          <Link href="/">SIGN UP</Link>
        </li>
      </ul>
    </div>
  );
}
