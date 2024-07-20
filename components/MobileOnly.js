"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DesktopBlocked from "@/app/desktop-blocked/page";
import Home from "@/app/page";

const MobileOnly = ({ children }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setIsMobile(false);
        router.push("/desktop-blocked");
      } else {
        setIsMobile(true);
      }
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [router]);

  return isMobile ? <Home /> : <DesktopBlocked />;
};

export default MobileOnly;
