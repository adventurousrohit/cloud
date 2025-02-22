"use client";

// import AppContext from "@/common/context/appContext";
import { useEffect, createContext, useContext, useRef } from "react";
import { usePathname } from "next/navigation";

const AppContext = createContext();

export const AuthProvider = ({ children }) => {
  const pathName = usePathname();
  const headerRef = useRef(null);

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

  const value = { message: "Hello from AppProvider!" };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
