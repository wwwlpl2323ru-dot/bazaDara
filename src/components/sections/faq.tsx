"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Что входит в стоимость домика?",
    a: "В стоимость включены холодильник, чайник, мангал в общей зоне и доступ к общей кухне. Постельное бельё по запросу.",
  },
  {
    q: "Есть ли на территории магазин?",
    a: "Да, небольшой магазин есть прямо на территории базы. Ближайший крупный магазин в 15 минутах езды.",
  },
  {
    q: "Как происходит бронирование?",
    a: "Свяжитесь с нами в WhatsApp или по телефону. Бронирование подтверждается предоплатой 50%. Предоплата невозвратная, отмена возможна за 3 дня до заезда.",
  },
  {
    q: "Есть ли развлечения для детей?",
    a: "На территории детская площадка, волейбольная площадка. Вся территория закрыта и безопасна для детей. Озеро под присмотром взрослых.",
  },
  {
    q: "Можно ли привезти домашних животных?",
    a: "Домашние животные разрешены по предварительному согласованию. Свяжитесь с нами заранее.",
  },
  {
    q: "Как добраться до базы?",
    a: "База расположена на озере Шалкар вблизи Кокшетау. Координаты и маршрут пришлём при подтверждении бронирования через 2GIS.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={cn(
        "rounded-xl border transition-all duration-300",
        open ? "border-emerald-500/20 bg-emerald-500/[0.03]" : "border-white/5 bg-white/[0.02]"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span className={cn("text-sm font-medium transition-colors", open ? "text-white" : "text-white/70")}>
          {q}
        </span>
        <ChevronDown
          className={cn("ml-4 h-4 w-4 flex-shrink-0 text-emerald-400 transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="px-6 pb-5"
        >
          <p className="text-sm leading-relaxed text-white/50">{a}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
            FAQ
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Частые вопросы
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
