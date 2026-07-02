import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-red-100/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/logo/logo.png"
            alt="Mind Balance"
            width={50}
            height={50}
            priority
          />

          <div>
            <h1 className="text-xl font-bold tracking-tight text-red-700">
              Mind Balance
            </h1>

            <p className="text-[10px] uppercase tracking-[0.38em] text-gray-500">
              Sports Psychology
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/#about" },
            { name: "Services", href: "/#services" },
            { name: "Research", href: "/research" },
            { name: "Experience", href: "/experience" },
            { name: "Contact", href: "/#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[15px] font-medium text-gray-700 transition-all duration-300 hover:text-red-700 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Book Consultation Button */}
        <Link
          href="/book-session"
          className="group inline-flex items-center gap-2 rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-800 hover:shadow-red-200"
        >
          Book Consultation

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </header>
  );
}