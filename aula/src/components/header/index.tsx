"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link href="/" className="hover:text-gray-400 transition">
            NextAgenda
          </Link>
        </div>

        {/* Menu para telas maiores */}
        <nav className="hidden md:flex gap-6">
          {["Contatos", "Dashboard", "Posts"].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-white transition duration-300"
            >
              {item}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center bg-black py-4 border-t border-gray-800">
          {["Contatos", "Dashboard", "Posts"].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition duration-300 py-2"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
