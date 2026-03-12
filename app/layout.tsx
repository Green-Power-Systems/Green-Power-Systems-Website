// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Assuming you have a font import
import Script from "next/script"; // 👈 Import the Script component
import ClientStyleLoader from "@/components/ClientStyleLoader";

import "./globals.css";
//  <!-- fontawesome css -->

    // <!-- bootstrap css -->
import "@/assets/css/vendor/bootstrap.min.css";
    // <!-- Custom css -->
import "@/assets/css/style.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

// ... (Metadata export)
export const metadata: Metadata = {
  title: "Green Power Systems PLC",
  description:
    "Green Power Systems PLC offers premium tire and cable solutions with supply, installation, and maintenance services for industrial, commercial, and utility sectors.",
  openGraph: {
    title: "Green Power Systems PLC",
    description:
      "Green Power Systems PLC offers premium tire and cable solutions with supply, installation, and maintenance services for industrial, commercial, and utility sectors.",
    url: "https://www.greenpowersystemsplc.com",
    siteName: "Green Power Systems PLC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ClientStyleLoader />
        <Header />
        {children}
        <Footer />

        <Script
          src="/assets/js/plugins/jquery.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/vendor/jqueryui.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/counter-up.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/swiper.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/metismenu.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/waypoint.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/waw.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/gsap.min.js" strategy="lazyOnload" />
        <Script
          src="/assets/js/plugins/scrolltigger.js"
          strategy="lazyOnload"
        />
        <Script src="/assets/js/vendor/split-text.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/contact.form.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/split-type.js" strategy="lazyOnload" />
        <Script
          src="/assets/js/plugins/jquery-timepicker.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/js/plugins/bootstrap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/magnific-popup.min.js"
          strategy="lazyOnload"
        />

        {/* The main.js should likely load last, as it may rely on all plugins above. */}
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
