"use client";
import { motion } from "framer-motion";
import { Sunrise, Fish, Sailboat, Flame, UtensilsCrossed, Footprints } from "lucide-react";

const timeline = [
  {
    time: "6:00",
    icon: Sunrise,
    label: "Медитация на рассвете",
    desc: "Тишина, озеро, первый свет",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    ring: "ring-amber-500/20",
    line: "bg-amber-500/30",
  },
  {
    time: "10:00",
    icon: Fish,
    label: "Рыбалка",
    desc: "Ловля на озере Шалкар",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    ring: "ring-blue-500/20",
    line: "bg-blue-500/30",
  },
  {
    time: "13:00",
    icon: Sailboat,
    label: "Катамараны",
    desc: "Прокат прямо на территории",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    ring: "ring-cyan-500/20",
    line: "bg-cyan-500/30",
  },
  {
    time: "17:00",
    icon: Flame,
    label: "Баня из липы",
    desc: "Настоящий пар и восстановление",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    ring: "ring-rose-500/20",
    line: "bg-rose-500/30",
  },
  {
    time: "20:00",
    icon: UtensilsCrossed,
    label: "Мангал и вечер",
    desc: "Закат над степью, огонь, разговоры",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    ring: "ring-orange-500/20",
    line: "bg-orange-500/30",
  },
];

export function Program() {
  return (
    <section id="program" className="relative overflow-hidden py-24 px-4">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Текст + статы */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-24"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
              Зелёная программа
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Здесь каждый
              <br />
              <span className="text-emerald-400">найдёт своё</span>
            </h2>
            <p className="mb-8 max-w-md leading-relaxed text-white/50">
              От созерцательного отдыха у воды до активных приключений -
              мы создали пространство для разных ритмов жизни. Никакого
              навязанного расписания, только свобода выбора.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5+", label: "активностей на выбор" },
                { value: "∞", label: "свободного времени" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
                >
                  <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="mt-1 text-xs text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-white/30">
              <Footprints className="h-3.5 w-3.5 text-emerald-400/60" />
              Примерный день - вы сами выбираете темп
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Вертикальная линия */}
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-white/5 via-white/10 to-white/5" />

            <div className="space-y-2">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  className="group relative flex items-start gap-4"
                >
                  {/* Иконка-точка */}
                  <div
                    className={`relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl ${item.bg} ring-1 ${item.ring} transition-all duration-300 group-hover:scale-105`}
                  >
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>

                  {/* Контент */}
                  <div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 transition-all duration-300 group-hover:border-white/10 group-hover:bg-white/[0.04]">
                    <div className="flex items-baseline gap-3">
                      <span className={`font-mono text-xs font-medium ${item.color}`}>
                        {item.time}
                      </span>
                      <span className="text-sm font-semibold text-white">{item.label}</span>
                    </div>
                    <p className="mt-1 text-xs text-white/40">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
