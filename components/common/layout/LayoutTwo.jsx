"use client";

import { Outlet, useLocation } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import { debounce } from "../others/Scroller2"; // Only import debounce
import TransferDomainSearchNav from "../../transferDomainSearch/TransferDomainSearchNav";
import FooterCta from "../cta/FooterCta";
import Footer from "../nav/Footer";

const LayoutTwo = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        div
        className={`bg-secondary ${isScrolled ? "navbar-top-toggle" : ""}`}
      >
        <TransferDomainSearchNav />

        <main>
          <Outlet />
        </main>
        <FooterCta />
        <Footer />
      </div>
    </>
  );
};

export default LayoutTwo;
