"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { GlowingBorderButton } from "@/components/ui/glowing-border-button";
import {
  Phone,
  Mail,
  MessageCircle,
  AtSign,
  MapPin,
  Send,
  CheckCircle,
  Car,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const contacts = [
  { icon: Phone, label: "Телефон", value: "+7 705 599-73-36", href: "tel:+77055997336" },
  { icon: Mail, label: "Email", value: "bryanceva.elvira@mail.ru", href: "mailto:bryanceva.elvira@mail.ru" },
  { icon: MessageCircle, label: "WhatsApp", value: "Написать в WhatsApp", href: "https://wa.me/77055997336" },
  { icon: AtSign, label: "Instagram", value: "@baza_otdyxa_dara", href: "https://www.instagram.com/baza_otdyxa_dara" },
];

const routeSteps = [
  { label: "Кокшетау", sub: "ближайший город", color: "text-emerald-400", bg: "bg-emerald-500/10", ring: "ring-emerald-500/20" },
  { label: "15-20 мин", sub: "на машине", color: "text-white/60", bg: "bg-white/5", ring: "ring-white/10", isArrow: true },
  { label: "Озеро Шалкар", sub: "база отдыха Дара", color: "text-cyan-400", bg: "bg-cyan-500/10", ring: "ring-cyan-500/20" },
];

export function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", dates: "", guests: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const inputCls = cn(
    "w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25",
    "outline-none transition-all duration-200",
    "focus:border-emerald-500/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-emerald-500/20"
  );

  return (
    <section id="booking" className="relative py-24 px-4">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/8 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
            Бронирование
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Забронируйте отдых
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Заполните форму или свяжитесь с нами напрямую. Ответим в течение 30 минут.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Форма */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-12 text-center"
              >
                <CheckCircle className="mb-4 h-16 w-16 text-emerald-400" />
                <h3 className="mb-2 text-xl font-bold text-white">Заявка отправлена!</h3>
                <p className="text-white/50">
                  Эльвира свяжется с вами в течение 30 минут для подтверждения бронирования.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs text-white/40">Ваше имя</label>
                    <input
                      className={inputCls}
                      placeholder="Айнур"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-white/40">Телефон</label>
                    <input
                      className={inputCls}
                      placeholder="+7 700 000 00 00"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs text-white/40">Даты заезда</label>
                    <input
                      className={inputCls}
                      placeholder="15-17 июля"
                      value={form.dates}
                      onChange={(e) => setForm({ ...form, dates: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-white/40">Количество гостей</label>
                    <input
                      className={inputCls}
                      placeholder="4 человека"
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-white/40">Пожелания</label>
                  <textarea
                    className={cn(inputCls, "min-h-[100px] resize-none")}
                    placeholder="Тип домика, особые пожелания..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <GlowingBorderButton
                  type="submit"
                  disabled={loading}
                  className="w-full justify-center"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-950/20 border-t-zinc-950" />
                      Отправляем...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Отправить заявку
                    </span>
                  )}
                </GlowingBorderButton>
              </form>
            )}
          </motion.div>

          {/* Контакты + маршрут + условия */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {/* Контакты */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-4 font-semibold text-white">Свяжитесь напрямую</h3>
              <div className="space-y-3">
                {contacts.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-white/[0.03]"
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                      <c.icon className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs text-white/30">{c.label}</div>
                      <div className="text-sm text-white/80">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Как добраться */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
                  <Car className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-sm font-semibold text-white">Как добраться</span>
              </div>

              {/* Маршрут */}
              <div className="flex items-center gap-2">
                {routeSteps.map((step, i) =>
                  step.isArrow ? (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <ChevronRight className="h-4 w-4 text-white/20" />
                      <span className="text-center text-[10px] leading-tight text-white/30">
                        {step.label}
                        <br />
                        {step.sub}
                      </span>
                    </div>
                  ) : (
                    <div
                      key={i}
                      className={`flex-1 rounded-xl border ${step.bg} ${step.ring} ring-1 px-3 py-2.5 text-center`}
                    >
                      <div className={`text-xs font-semibold ${step.color}`}>{step.label}</div>
                      <div className="mt-0.5 text-[10px] text-white/30">{step.sub}</div>
                    </div>
                  )
                )}
              </div>

              <div className="mt-3 flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400/60" />
                <p className="text-xs leading-relaxed text-white/40">
                  Точные координаты и маршрут в 2GIS пришлём при подтверждении бронирования.
                </p>
              </div>
            </div>

            {/* Условия бронирования */}
            <div className="rounded-2xl border border-amber-500/10 bg-amber-500/[0.03] p-6">
              <h4 className="mb-3 text-sm font-medium text-amber-400">Условия бронирования</h4>
              <ul className="space-y-2 text-xs text-white/40">
                <li>- Предоплата 50% при бронировании (невозвратная)</li>
                <li>- Отмена возможна за 3 дня до заезда</li>
                <li>- Заезд 14:00 / Выезд 12:00</li>
                <li>- ООПТ-налог 370 тенге оплачивается на месте</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
