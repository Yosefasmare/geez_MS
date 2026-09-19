"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activePage?: "home" | "properties" | "about" | "why-us" | "contact";
}

export default function Navbar({ activePage = "home" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-stone-200/60 shadow-sm py-3.5"
          : "bg-[#FAFAF8] py-5 border-b border-transparent"
      }`}
    >
      <div className="site-container flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-md border border-stone-200 bg-white p-1 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/geez-logo.png"
              alt="GE'EZ Marketing Solution PLC Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight text-[#1C1815] tracking-tight">
              GE'EZ <span className="text-[#C5A059] font-medium">MARKETING</span>
            </span>
            <span className="text-[10px] tracking-widest text-stone-500 font-semibold uppercase">
              SOLUTION PLC
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-12">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              activePage === "home"
                ? "text-[#C5A059] font-bold"
                : "text-[#1C1815] hover:text-[#C5A059]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/properties"
            className={`text-sm font-medium transition-colors relative py-1 ${
              activePage === "properties"
                ? "text-[#C5A059] font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#C5A059]"
                : "text-stone-600 hover:text-[#C5A059]"
            }`}
          >
            Properties
          </Link>

          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${
              activePage === "about"
                ? "text-[#C5A059] font-bold"
                : "text-[#1C1815] hover:text-[#C5A059]"
            }`}
          >
            About
          </Link>

          <Link
            href="/#why-us"
            className={`text-sm font-medium transition-colors ${
              activePage === "why-us"
                ? "text-[#C5A059] font-bold"
                : "text-stone-600 hover:text-[#C5A059]"
            }`}
          >
            Why Choose Us
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${
              activePage === "contact"
                ? "text-[#C5A059] font-bold"
                : "text-stone-600 hover:text-[#C5A059]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/properties"
            className={`inline-flex items-center justify-center px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 shadow-xs group ${
              activePage === "properties"
                ? "text-white bg-[#C5A059] border border-[#C5A059] hover:bg-[#B59049]"
                : "text-[#1C1815] border border-[#C5A059]/60 bg-white hover:bg-[#C5A059] hover:text-white"
            }`}
          >
            <span>View Properties</span>
            <ArrowUpRight className="ml-1.5 w-4 h-4 transition-colors" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-700 hover:text-[#C5A059] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium py-1 border-b border-stone-100 ${
                activePage === "home" ? "text-[#C5A059] font-bold" : "text-[#1C1815]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/properties"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium py-1 border-b border-stone-100 ${
                activePage === "properties" ? "text-[#C5A059] font-bold" : "text-stone-700"
              }`}
            >
              Properties
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium py-1 border-b border-stone-100 ${
                activePage === "about" ? "text-[#C5A059] font-bold" : "text-stone-700 hover:text-[#C5A059]"
              }`}
            >
              About
            </Link>
            <Link
              href="/#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-stone-700 hover:text-[#C5A059] py-1 border-b border-stone-100"
            >
              Why Choose Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium py-1 ${
                activePage === "contact" ? "text-[#C5A059] font-bold" : "text-stone-700 hover:text-[#C5A059]"
              }`}
            >
              Contact
            </Link>
          </nav>
          <div className="pt-2">
            <Link
              href="/properties"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-md text-sm font-semibold text-white bg-[#C5A059] hover:bg-[#B59049] transition-colors shadow-sm"
            >
              View Properties
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
