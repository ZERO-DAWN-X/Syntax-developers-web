"use client";
import { useState } from "react";
import HomePage from "@/components/HomePage/HomePage";
import SyntaxPage from "@/components/HeroPage/SyntaxPage";

export default function Home() {
  const [showHero, setShowHero] = useState(true);

  const onNavigate = () => {
    setShowHero(false);
  };
  return (
    <div>
      {showHero ? <SyntaxPage onNavigate={onNavigate} /> : <HomePage />}
    </div>
  );
}
