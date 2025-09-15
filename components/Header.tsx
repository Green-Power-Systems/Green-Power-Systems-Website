"use client";
import React, { useEffect, useState } from "react";
import { X, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

type Props = {};

const Header = (props: Props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);
  return (
    <>
      <header className="header-three header--sticky">
        <div className="header-left">
          <a href="index.html" className="logo-area">
            <img
              className="logo-white logo-green"
              src="assets/images/green/logo-no-bg.png"
              alt="logo"
            />
            <img
              className="logo-dark logo-green"
              src="assets/images/green/Screenshot 2025-08-18 011342.png"
              alt="logo"
            />
          </a>

          {/* <!-- navigation area start --> */}
          <div className="header-nav main-nav-one">
            <nav>
              <ul>
                <li>
                  <a className="nav-link" href="/">
                    HOME
                  </a>
                </li>

                <li>
                  <a className="nav-link" href="/service">
                    SERVICES
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/blogs">
                    BLOG
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/project">
                    PROJECT
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- navigation area end --> */}
        </div>
        <div className="header-right">
          <div className="action-button-menu">
            <a href="/contact" className="contact">
              Let’s Talk
            </a>
            <div id="menu-btn" className="block md:hidden">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="4" height="4" fill="white" />
                  <rect y="7" width="4" height="4" fill="white" />
                  <rect y="14" width="4" height="4" fill="white" />
                  <rect x="7" width="4" height="4" fill="white" />
                  <rect x="7" y="7" width="4" height="4" fill="white" />
                  <rect x="7" y="14" width="4" height="4" fill="white" />
                  <rect x="14" width="4" height="4" fill="white" />
                  <rect x="14" y="7" width="4" height="4" fill="white" />
                  <rect x="14" y="14" width="4" height="4" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu Container */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ease-in-out 
  ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="p-4 flex flex-col h-full relative">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="assets/images/green/logo-no-bg.png"
              alt="Green Power Systems"
              className="h-12 logo-green"
            />
          </div>

          {/* Close Button - fixed at top right */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-10 left-4/5 text-gray-800 p-2"
          >
            <X
              className="border border-gray-950 p-1  "
              size={32}
              strokeWidth={2.5}
            />
          </button>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="flex flex-col text-base font-medium text-gray-900">
              <li>
                <a
                  href="index.html"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 border-b border-gray-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="aboutus.html"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 border-b border-gray-200"
                >
                  Pages
                </a>
              </li>
              <li>
                <a
                  href="service.html"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 border-b border-gray-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="portfolio.html"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 border-b border-gray-200"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="blog.html"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 border-b border-gray-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 border-b border-gray-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="p-2 bg-black text-white rounded">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-black text-white rounded">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-black text-white rounded">
              <Youtube size={18} />
            </a>
            <a href="#" className="p-2 bg-black text-white rounded">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
