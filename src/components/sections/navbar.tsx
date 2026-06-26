"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlowingBorderButton } from "@/components/ui/glowing-border-button";
import { Leaf } from "lucide-react";

const navLinks = [
  { href: "#about", label: "О нас" },
  { href: "#program", label: "Программа" },
  { href: "#cabins", label: "Домики" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
  { href: "#booking", label: "Контакты" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 50);
  });

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-[oklch(0.07_0.01_150/90%)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Логотип */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          className="flex items-center gap-2.5 text-lg font-bold text-white"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 ring-1 ring-emerald-500/30">
            <Leaf className="h-4 w-4 text-emerald-400" />
          </div>
          <span>
            База <span className="text-emerald-400">Дара</span>
          </span>
        </a>

        {/* Десктоп навигация */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <GlowingBorderButton
            className="h-9 px-5 text-xs"
            onClick={() => scrollTo("#booking")}
          >
            Забронировать
          </GlowingBorderButton>
        </div>

        {/* Мобильное меню */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={cn("h-0.5 w-5 bg-white transition-all", mobileOpen && "translate-y-2 rotate-45")} />
          <span className={cn("h-0.5 w-5 bg-white transition-all", mobileOpen && "opacity-0")} />
          <span className={cn("h-0.5 w-5 bg-white transition-all", mobileOpen && "-translate-y-2 -rotate-45")} />
        </button>
      </div>

      {/* Мобильное меню открытое */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/5 bg-[oklch(0.07_0.01_150/95%)] px-6 py-4 backdrop-blur-xl md:hidden"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full py-3 text-left text-sm text-white/60 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
