"use client";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";
import { GlowingBorderButton } from "@/components/ui/glowing-border-button";
import {
  Refrigerator,
  Flame,
  Wifi,
  Check,
  Users,
  BedDouble,
  UtensilsCrossed,
  Droplets,
} from "lucide-react";

const cabinTypes = [
  {
    name: "Уютный домик",
    capacity: "2-3 места",
    price: "от 8 000 ₸",
    period: "за сутки",
    description: "Идеально для пары или небольшой компании. Все условия для спокойного отдыха.",
    amenities: ["Холодильник", "Чайник", "Мангал в зоне отдыха", "Общая кухня"],
    icons: [
      { icon: BedDouble, label: "2 кровати" },
      { icon: Refrigerator, label: "Холодильник" },
      { icon: Flame, label: "Мангал" },
      { icon: UtensilsCrossed, label: "Кухня" },
    ],
    popular: false,
    gradient: "from-emerald-500/10 to-cyan-500/10",
    accentColor: "text-emerald-400",
    border: "border-white/5",
  },
  {
    name: "Семейный домик",
    capacity: "4-6 мест",
    price: "от 15 000 ₸",
    period: "за сутки",
    description: "Просторный домик для семьи или большой компании. Комфорт и приватность.",
    amenities: ["Холодильник", "Чайник", "Личный мангал", "Общая кухня", "Парилка рядом"],
    icons: [
      { icon: Users, label: "4-6 мест" },
      { icon: Refrigerator, label: "Холодильник" },
      { icon: Flame, label: "Личный мангал" },
      { icon: Droplets, label: "Баня рядом" },
    ],
    popular: true,
    gradient: "from-amber-500/10 to-orange-500/10",
    accentColor: "text-amber-400",
    border: "border-amber-500/30",
  },
];

const included = [
  { icon: Refrigerator, text: "Холодильник и чайник" },
  { icon: Flame, text: "Мангал для гриля" },
  { icon: Wifi, text: "Общая кухня" },
];

export function Cabins() {
  return (
    <section id="cabins" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
            Размещение
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Уютные домики
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Заезд в 14:00, выезд в 12:00. Предоплата 50% при бронировании.
          </p>
        </motion.div>

        {/* Карточки домиков */}
        <div className="grid gap-6 md:grid-cols-2">
          {cabinTypes.map((cabin, i) => (
            <motion.div
              key={cabin.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative overflow-hidden"
            >
              {cabin.popular && (
                <div className="absolute right-4 top-4 z-10 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-zinc-950">
                  Популярный
                </div>
              )}

              <div
                className={`relative rounded-2xl border bg-gradient-to-br ${cabin.gradient} p-8 ${cabin.border} overflow-hidden`}
              >
                <Meteors number={10} />

                <div className="relative z-10">
                  <div className="mb-2 text-sm text-white/40">{cabin.capacity}</div>
                  <h3 className="mb-1 text-2xl font-bold text-white">{cabin.name}</h3>
                  <p className="mb-5 text-sm text-white/50">{cabin.description}</p>

                  {/* Иконки удобств */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {cabin.icons.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60"
                      >
                        <item.icon className={`h-3.5 w-3.5 ${cabin.accentColor}`} />
                        {item.label}
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{cabin.price}</span>
                    <span className="ml-2 text-sm text-white/40">{cabin.period}</span>
                  </div>

                  <ul className="mb-8 space-y-2">
                    {cabin.amenities.map((amenity) => (
                      <li key={amenity} className="flex items-center gap-2 text-sm text-white/60">
                        <Check className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                        {amenity}
                      </li>
                    ))}
                  </ul>

                  <GlowingBorderButton
                    variant={cabin.popular ? "primary" : "outline"}
                    className="w-full justify-center"
                    onClick={() =>
                      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Забронировать
                  </GlowingBorderButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Включено в стоимость */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 rounded-2xl border border-white/5 bg-white/[0.02] p-6"
        >
          <p className="mb-4 text-sm font-medium text-white/40">Всегда включено в стоимость</p>
          <div className="flex flex-wrap gap-6">
            {included.map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-sm text-white/70">
                <item.icon className="h-4 w-4 text-emerald-400" />
                {item.text}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/30">
            * ООПТ-налог 370 тенге оплачивается отдельно. Запрещено: курение в домиках, разведение костров вне специальных мест.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
