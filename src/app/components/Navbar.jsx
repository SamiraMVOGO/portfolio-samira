"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useLanguage } from "./LanguageContext";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { language, toggleLanguage } = useLanguage();

  const navLinks = [
    {
      title: t("navbar.about"),
      path: "#about",
    },
    {
      title: t("navbar.experiences"),
      path: "#experiences",
    },
    {
      title: t("navbar.projects"),
      path: "#projects",
    },
    {
      title: t("navbar.certifications"),
      path: "#certifications",
    },
    {
      title: t("navbar.contact"),
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-transparent bg-clip-text bg-gradient-to-r text-2xl from-primary-400 to-secondary-600"
        >
          Samira
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu text-xs  hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`text-xs font-medium ${language === "en" ? "text-white" : "text-gray-500"}`}>EN</span>
          <button
            onClick={toggleLanguage}
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#121212]"
            style={{ backgroundColor: language === "en" ? "#6b21a8" : "#d946ef" }}
            aria-label="Toggle language"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                language === "en" ? "translate-x-1" : "translate-x-6"
              }`}
            />
          </button>
          <span className={`text-xs font-medium ${language === "fr" ? "text-white" : "text-gray-500"}`}>FR</span>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
