import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-gray-900 font-semibold tracking-tight">
          Xentra Group
        </Link>
        <nav className="flex items-center gap-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">
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
