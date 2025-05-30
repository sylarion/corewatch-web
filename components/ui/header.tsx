"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMenu = () => setMobileNavOpen(!mobileNavOpen);

  const navLinks = [
    { label: "Servicios", href: "/servicios" },
    { label: "Consultoría", href: "/consultoria" },
    { label: "Clientes", href: "/clientes" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="absolute top-0 z-30 w-full bg-transparent px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                className="text-sm text-indigo-200 hover:text-white transition"
                href={href}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/demo"
              className="ml-4 rounded bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400 transition"
            >
              Agendar Demo
            </Link>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-indigo-200 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileNavOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileNavOpen && (
          <div className="mt-2 space-y-4 rounded-lg bg-gray-900 px-4 py-6 md:hidden">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={toggleMenu}
                className="block text-indigo-200 hover:text-white transition"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/demo"
              onClick={toggleMenu}
              className="mt-2 block rounded bg-indigo-500 px-4 py-2 text-center text-white hover:bg-indigo-400 transition"
            >
              Agendar Demo
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
