import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { debounce } from "../others/Scroller"; // Ensure debounce function exists
import Navbar from "../nav/Navbar";
import Footer from "../nav/Footer";
// import Footertwo from "../nav/Footertwo";

const Layout = ({ children }) => {
  const headerRef = useRef(null);
  const router = useRouter();
  const path = router.pathname; // Use Next.js router instead of useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      const header = headerRef.current;
      const headerTop = header.offsetHeight / 3; // Threshold for scroll trigger
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <>
      <header ref={headerRef}>
        <Navbar />
      </header>
      <main className={`${path === "/game-hosting" ? "bg-gray-900" : "bg-secondary"}`}>
        {children} {/* Render page content */}
      </main>
      {/* {path === "/" ? <Footer /> : <Footertwo />} */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
