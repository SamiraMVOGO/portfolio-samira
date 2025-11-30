"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

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
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="relative inline-flex items-center w-16 h-7 rounded-full bg-gradient-to-r from-primary-400 to-secondary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-[#121212] shadow transition-transform duration-200 ${
                language === "en" ? "translate-x-0" : "translate-x-8"
              }`}
            />
            <span className="absolute left-2 text-[10px] font-semibold text-white/90 select-none">
              EN
            </span>
            <span className="absolute right-2 text-[10px] font-semibold text-white/90 select-none">
              FR
            </span>
          </button>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
