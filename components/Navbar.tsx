"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/Navbar.css";

const links = [
  { name: "Home", href: "/" },
  { name: "Idea", href: "/idea" },
  { name: "Progress", href: "/progress" },
  { name: "Team", href: "/team" },
  { name: "About", href: "/about" },
];


const LOGO_PATH: string | null = '/assets/logo.png';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for enhanced shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest(".navbar-glass")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`navbar-glass sticky top-0 z-50 ${
        isScrolled ? "scrolled has-shadow" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="logo-container" onClick={() => setIsMobileMenuOpen(false)}>
            {LOGO_PATH && (
              <div className="logo-image">
                <Image
                  src={LOGO_PATH}
                  alt="StudySage Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
            )}
            <span className="logo-text">StudySage</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  pathname === link.href
                    ? "nav-link-active"
                    : "nav-link-inactive"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden mobile-menu-btn ${
              isMobileMenuOpen ? "open" : ""
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-line hamburger-line-1" />
            <span className="hamburger-line hamburger-line-2" />
            <span className="hamburger-line hamburger-line-3" />
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mobile-nav-container">
            <div className="mobile-nav-menu space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`mobile-nav-link ${
                    pathname === link.href
                      ? "mobile-nav-link-active"
                      : "mobile-nav-link-inactive"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}