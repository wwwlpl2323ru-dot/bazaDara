"use client";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { GlowingBorderButton } from "@/components/ui/glowing-border-button";
import { MapPin, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[oklch(0.07_0.01_150)] px-4"
    >
      {/* Spotlight эффект */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="oklch(0.70 0.18 145)"
      />

      {/* Сетка-фон */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(oklch(0.70 0.18 145 / 3%) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.70 0.18 145 / 3%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Радиальный градиент снизу */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[oklch(0.07_0.01_150)] to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Бейдж */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <AnimatedGradientText>
            <MapPin className="mr-1.5 inline h-3.5 w-3.5" />
            Озеро Шалкар, Северный Казахстан
          </AnimatedGradientText>
        </motion.div>

        {/* Заголовок */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl"
        >
          База отдыха{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
            Дара
          </span>
        </motion.h1>

        {/* Подзаголовок */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
        >
          Уединённый оазис среди казахстанских степей. Тишина, чистый воздух
          и настоящий отдых для всей семьи вдали от городской суеты.
        </motion.p>

        {/* Рейтинг */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 flex items-center justify-center gap-1.5"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-2 text-sm text-white/50">4.9 · более 50 отзывов</span>
        </motion.div>

        {/* Кнопки */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <GlowingBorderButton
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Забронировать домик
          </GlowingBorderButton>
          <GlowingBorderButton
            variant="outline"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Узнать подробнее
          </GlowingBorderButton>
        </motion.div>

        {/* Быстрые факты */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 border-t border-white/5 pt-10"
        >
          {[
            { value: "2-6", label: "мест в домиках" },
            { value: "5 мин", label: "до озера пешком" },
            { value: "2026", label: "год открытия" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-bold text-emerald-400 md:text-3xl">{item.value}</div>
              <div className="mt-1 text-xs text-white/40 md:text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Стрелка вниз */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-emerald-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
