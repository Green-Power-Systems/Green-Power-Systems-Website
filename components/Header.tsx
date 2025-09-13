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
                <li className="has-dropdown">
                  <a className="nav-link" href="#">
                    HOME
                  </a>
                  <ul className="submenu">
                    <li className="sub-dropdown">
                      <a href="javascript:void(0);">Multipages</a>
                      <ul className="submenu third-lvl base">
                        <li>
                          <a className="mobile-menu-link" href="index.html">
                            Wind Energy
                          </a>
                        </li>
                        <li>
                          <a className="mobile-menu-link" href="index-two.html">
                            Solar Energy
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="index-three.html"
                          >
                            Renewable Energy
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="index-four.html"
                          >
                            Hydro Power
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="index-five.html"
                          >
                            Solar Shop
                          </a>
                        </li>
                        <li>
                          <a className="mobile-menu-link" href="index-six.html">
                            Solar Solution
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="index-seven.html"
                          >
                            Energy Storage
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="index-eight.html"
                          >
                            Solar Installation
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="index-nine.html"
                          >
                            Green Energy
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-dropdown">
                      <a href="javascript:void(0);">One Pages</a>
                      <ul className="submenu third-lvl base">
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="one-page-one.html"
                          >
                            One Page One
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="one-page-two.html"
                          >
                            One Page two
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="one-page-three.html"
                          >
                            One Page three
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="one-page-four.html"
                          >
                            One Page four
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="one-page-five.html"
                          >
                            One Page five
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <a className="nav-link" href="#">
                    PAGES
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="aboutus.html">About Us</a>
                    </li>
                    <li>
                      <a href="appoinment.html">Appoinment</a>
                    </li>
                    <li>
                      <a href="gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="team-details.html">Team Details</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq</a>
                    </li>
                    <li className="sub-dropdown">
                      <a href="javascript:void(0);">Shop</a>
                      <ul className="submenu third-lvl base">
                        <li>
                          <a className="mobile-menu-link" href="shop.html">
                            Shop
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="shop-single.html"
                          >
                            Shop Single
                          </a>
                        </li>
                        <li>
                          <a className="mobile-menu-link" href="checkout.html">
                            Checkout
                          </a>
                        </li>
                        <li>
                          <a className="mobile-menu-link" href="cart.html">
                            Cart
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="has-dropdown">
                  <a className="nav-link" href="#">
                    SERVICES
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="service.html">Service</a>
                    </li>
                    <li>
                      <a href="service-details.html">Service Details</a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <a className="nav-link" href="#">
                    BLOG
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <a className="nav-link" href="#">
                    PROJECT
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="project.html">Our Project</a>
                    </li>
                    <li>
                      <a href="project-col-2.html">Project col 2</a>
                    </li>
                    <li>
                      <a href="project-swiper-sm.html">Project Style 2</a>
                    </li>
                    <li>
                      <a href="project-overflow.html">Project Style 3</a>
                    </li>
                    <li>
                      <a href="project-swiper-full.html">Project Slider</a>
                    </li>
                    <li className="sub-dropdown">
                      <a href="javascript:void(0);">Project Details</a>
                      <ul className="submenu third-lvl base">
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="project-details.html"
                          >
                            Project Details
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="project-details-gallery.html"
                          >
                            Details Gallery
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="project-details-vedio.html"
                          >
                            Details Vedio
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="project-details-carousel.html"
                          >
                            Details Carousel
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="nav-link" href="contact.html">
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
            <a href="contact.html" className="contact">
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
