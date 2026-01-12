"use client";

import { ArrowIcon, ExclusiveIcon, HomeIcon, LiveIcon, MusicalIcon, SettingsIcon } from "@/components/icons";
import Image from "next/image";
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
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

  return (
    <>
      <header className="flex items-center h-16 header-gradient">
        <div className="container mx-auto">
          <div className="flex items-center gap-10">
            <div>
              <Image alt="" src="/assets/dashboard/logo/watch-festival.svg" width={160} height={46} />
            </div>
            <div ref={dropdownRef}>
              <ul className="flex gap-10">
                <li>
                  <a className="flex items-center gap-1 cursor-pointer">
                    <HomeIcon />
                    Home
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-1 cursor-pointer">
                    <LiveIcon />
                    Live
                  </a>
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
            <div className="ml-auto flex items-center gap-4">
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
    </>
  );
}
