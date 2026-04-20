import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/xentra-logo.png"
            alt="Xentra Group"
            height={36}
            width={180}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="flex items-center gap-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors hidden sm:block">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors hidden sm:block">
            About
          </Link>
          <Link
            href="/apply"
            className="bg-rose-400 hover:bg-rose-500 text-white px-5 py-2 rounded-full transition-colors text-sm font-medium"
          >
            Apply
          </Link>
        </nav>
      </div>
    </header>
  );
}
