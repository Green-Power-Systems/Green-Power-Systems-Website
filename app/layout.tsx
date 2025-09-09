// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Assuming you have a font import
import Script from "next/script"; // 👈 Import the Script component

import "./globals.css";
//  <!-- fontawesome css -->
import "@/assets/css/plugins/fontawesome-6.css";

import "@/assets/css/plugins/swiper.css";
import "@/assets/css/plugins/unicons.css";
import "@/assets/css/plugins/metismenu.css";
import "@/assets/css/vendor/animate.css";
import "@/assets/css/vendor/magnific-popup.css";
    // <!-- bootstrap css -->
import "@/assets/css/vendor/bootstrap.min.css";
    // <!-- Custom css -->
import "@/assets/css/style.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ... (Metadata export)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer/>
        {/* -------------------- SCRIPTS SECTION -------------------- */}

        {/* Use the 'afterInteractive' strategy for most general-purpose scripts. */}
        {/* The src path starts from the 'public' folder. */}

        <Script
          src="/assets/js/plugins/jquery.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/jqueryui.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/counter-up.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/swiper.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/metismenu.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/waypoint.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/vendor/waw.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/plugins/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/scrolltigger.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/split-text.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/contact.form.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/split-type.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/jquery-timepicker.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/bootstrap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/magnific-popup.min.js"
          strategy="afterInteractive"
        />

        {/* The main.js should likely load last, as it may rely on all plugins above. */}
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
