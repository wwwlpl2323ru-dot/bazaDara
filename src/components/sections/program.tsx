"use client";
import { motion } from "framer-motion";
import { Footprints, Grape, Dumbbell, Fish, Sailboat, Brain } from "lucide-react";

const activities = [
  { icon: Footprints, label: "Пешие походы", desc: "Тропы вокруг озера и в степи" },
  { icon: Grape, label: "Грибы и ягоды", desc: "Сезонный сбор в окрестностях" },
  { icon: Dumbbell, label: "Волейбол", desc: "Площадка прямо на территории" },
  { icon: Fish, label: "Рыбалка", desc: "Ловля на озере Шалкар" },
  { icon: Sailboat, label: "Катамараны", desc: "Прокат на территории базы" },
  { icon: Brain, label: "Медитация", desc: "Тишина и рассветные практики" },
];

export function Program() {
  return (
    <section id="program" className="relative overflow-hidden py-24 px-4">
      {/* Фоновый градиент */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Текст */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
              Зелёная программа
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Здесь каждый<br />
              <span className="text-emerald-400">найдёт своё</span>
            </h2>
            <p className="mb-8 max-w-md text-white/50 leading-relaxed">
              От созерцательного отдыха у воды до активных приключений -
              мы создали пространство для разных ритмов жизни. Никакого
              навязанного расписания, только свобода выбора.
            </p>

            {/* Статы */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "6+", label: "активностей на выбор" },
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
          </motion.div>

          {/* Активности */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-3"
          >
            {activities.map((activity, i) => (
              <motion.div
                key={activity.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-emerald-500/20 hover:bg-emerald-500/5"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 transition-all duration-300 group-hover:bg-emerald-500/20">
                  <activity.icon className="h-4 w-4 text-emerald-400" />
                </div>
                <div className="text-sm font-semibold text-white">{activity.label}</div>
                <div className="mt-1 text-xs text-white/40">{activity.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
