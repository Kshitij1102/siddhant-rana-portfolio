import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-950 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* ================= LEFT ================= */}

          <div>

            <h2 className="text-3xl font-black text-red-500">
              Mind Balance
            </h2>

            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-gray-400">
              Sports Psychology
            </p>

            <p className="mt-6 max-w-md leading-8 text-gray-300">
              Helping athletes unlock confidence, resilience,
              emotional regulation and peak performance through
              evidence-based sports psychology and mental
              performance coaching.
            </p>

          </div>

          {/* ================= CONTACT ================= */}

          <div>

            <h3 className="text-xl font-bold">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <a
                href="mailto:siddhant.sportspsych@gmail.com"
                className="flex items-center gap-3 transition hover:text-red-400"
              >
                <Mail className="h-5 w-5 text-red-500" />
                <span>siddhant.sportspsych@gmail.com</span>
              </a>

              <a
                href="tel:+919958202136"
                className="flex items-center gap-3 transition hover:text-red-400"
              >
                <Phone className="h-5 w-5 text-red-500" />
                <span>+91 99582 02136</span>
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <span>New Delhi, India</span>
              </div>

            </div>

          </div>

          {/* ================= LINKS ================= */}

          <div>

            <h3 className="text-xl font-bold">
              Explore
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                href="/"
                className="transition hover:text-red-400"
              >
                Home
              </Link>

              <Link
                href="/#about"
                className="transition hover:text-red-400"
              >
                About
              </Link>

              <Link
                href="/#services"
                className="transition hover:text-red-400"
              >
                Services
              </Link>

              <Link
                href="/research"
                className="transition hover:text-red-400"
              >
                Research
              </Link>

              <Link
                href="/experience"
                className="transition hover:text-red-400"
              >
                Experience
              </Link>

            </div>

            {/* Social Links */}

            <div className="mt-8 space-y-3">

              <a
                href="https://www.linkedin.com/in/siddhant-rana-04930b246/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 transition hover:text-red-400"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/mindbalance.sports"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 transition hover:text-red-400"
              >
                Instagram (@mindbalance.sports)
                <ArrowUpRight className="h-4 w-4" />
              </a>

            </div>

          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}

        <div className="mt-14 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Mind Balance Sports Psychology. All Rights Reserved.
          </p>

          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 transition hover:text-red-400"
          >
            Back to Top
            <ArrowUpRight className="h-4 w-4" />
          </a>

        </div>

      </div>
    </footer>
  );
}