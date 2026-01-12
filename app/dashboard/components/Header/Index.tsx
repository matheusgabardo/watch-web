"use client";

import { ArrowIcon, ExclusiveIcon, HomeIcon, LiveIcon, MusicalIcon, SettingsIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const musicalStylesItems = [
  { title: "Styles:", isHeader: true },
  { title: "Rock", isHeader: false },
  { title: "Pop", isHeader: false },
  { title: "Funk", isHeader: false },
  { title: "MPB", isHeader: false },
  { title: "Jazz", isHeader: false },
  { title: "Trap", isHeader: false },
  { title: "Rap", isHeader: false },
];

const exclusiveContentItems = [
  { title: "Content:", isHeader: true },
  { title: "Back Stage", isHeader: false },
  { title: "Interviews", isHeader: false },
  { title: "Lestest News", isHeader: false },
  { title: "Last Editions", isHeader: false },
  { title: "Watch Again", isHeader: false },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="flex items-center h-16 header-gradient bg-main-bg px-4 lg:px-0">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 lg:gap-10">
            <div className="shrink-0">
              <Image
                alt=""
                src="/assets/dashboard/logo/watch-festival.svg"
                width={160}
                height={46}
                className="w-30 lg:w-40 h-auto"
              />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden ml-auto p-2 text-primary-text"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>

            {/* Desktop navigation */}
            <div ref={dropdownRef} className="hidden lg:block">
              <ul className="flex gap-10">
                <li>
                  <Link href="/" className="flex items-center gap-1 cursor-pointer">
                    <HomeIcon />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/" className="flex items-center gap-1 cursor-pointer">
                    <LiveIcon />
                    Live
                  </Link>
                </li>
                <li className="relative">
                  <a
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => toggleDropdown("musical")}
                  >
                    <MusicalIcon />
                    Musical Styles
                    <ArrowIcon className={`transition-transform duration-200 ${openDropdown === "musical" ? "rotate-180" : ""}`} />
                  </a>
                  {openDropdown === "musical" && (
                    <div className="absolute top-full left-0 mt-2 bg-black/90 rounded-lg py-2 min-w-40 z-20">
                      {musicalStylesItems.map((item, index) => (
                        <p
                          key={index}
                          className={`text-primary-text px-5 ${item.isHeader ? "font-semibold py-2" : "py-2 cursor-pointer hover:bg-[#E96744]"}`}
                        >
                          {item.title}
                        </p>
                      ))}
                    </div>
                  )}
                </li>
                <li className="relative">
                  <a
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => toggleDropdown("exclusive")}
                  >
                    <ExclusiveIcon />
                    Exclusive Content
                    <ArrowIcon className={`transition-transform duration-200 ${openDropdown === "exclusive" ? "rotate-180" : ""}`} />
                  </a>
                  {openDropdown === "exclusive" && (
                    <div className="absolute top-full left-0 mt-2 bg-black/90 rounded-lg py-2 min-w-40 z-20">
                      {exclusiveContentItems.map((item, index) => (
                        <p
                          key={index}
                          className={`text-primary-text px-5 ${item.isHeader ? "font-semibold py-2" : "py-2 cursor-pointer hover:bg-[#E96744]"}`}
                        >
                          {item.title}
                        </p>
                      ))}
                    </div>
                  )}
                </li>
              </ul>
            </div>

            {/* Desktop user menu */}
            <div className="ml-auto hidden lg:flex items-center gap-4">
              <div className="relative">
                <a
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => toggleDropdown("user")}
                >
                    <Image alt="" src="/assets/dashboard/placeholder/user.svg" width={32} height={32} />
                    <h3>Peter Parker</h3>
                    <SettingsIcon />
                </a>
                {openDropdown === "user" && (
                  <div className="absolute top-full right-0 mt-2 bg-black/90 rounded-lg py-2 min-w-40 z-20">
                    <p className="text-primary-text px-5 py-2 cursor-pointer hover:bg-[#E96744]">
                      My Profile
                    </p>
                    <p className="text-primary-text px-5 py-2 cursor-pointer hover:bg-[#E96744]">
                      Help
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-main-bg z-50 overflow-y-auto">
          <div className="flex flex-col p-4">
            {/* Mobile user info */}
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
              <Image alt="" src="/assets/dashboard/placeholder/user.svg" width={40} height={40} />
              <div>
                <h3 className="text-primary-text font-medium">Peter Parker</h3>
                <p className="text-primary-text/60 text-sm">View Profile</p>
              </div>
            </div>

            {/* Mobile navigation */}
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="flex items-center gap-3 p-3 text-primary-text hover:bg-white/5 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HomeIcon />
                Home
              </Link>
              <Link
                href="/"
                className="flex items-center gap-3 p-3 text-primary-text hover:bg-white/5 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LiveIcon />
                Live
              </Link>

              {/* Musical Styles accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full p-3 text-primary-text hover:bg-white/5 rounded-lg"
                  onClick={() => toggleDropdown("musical-mobile")}
                >
                  <span className="flex items-center gap-3">
                    <MusicalIcon />
                    Musical Styles
                  </span>
                  <ArrowIcon className={`transition-transform duration-200 ${openDropdown === "musical-mobile" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "musical-mobile" && (
                  <div className="ml-10 mt-1 flex flex-col gap-1">
                    {musicalStylesItems.filter(item => !item.isHeader).map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        className="p-2 text-primary-text/80 hover:text-primary-text hover:bg-white/5 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Exclusive Content accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full p-3 text-primary-text hover:bg-white/5 rounded-lg"
                  onClick={() => toggleDropdown("exclusive-mobile")}
                >
                  <span className="flex items-center gap-3">
                    <ExclusiveIcon />
                    Exclusive Content
                  </span>
                  <ArrowIcon className={`transition-transform duration-200 ${openDropdown === "exclusive-mobile" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "exclusive-mobile" && (
                  <div className="ml-10 mt-1 flex flex-col gap-1">
                    {exclusiveContentItems.filter(item => !item.isHeader).map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        className="p-2 text-primary-text/80 hover:text-primary-text hover:bg-white/5 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile settings */}
            <div className="mt-auto pt-4 border-t border-white/10">
              <Link
                href="/"
                className="flex items-center gap-3 p-3 text-primary-text hover:bg-white/5 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <SettingsIcon />
                Settings
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
