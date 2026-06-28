"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Users, Star, CalendarDays, Footprints } from "lucide-react";

function AnimatedCounter({
  to,
  decimals = 0,
  suffix = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
    return controls.stop;
  }, [inView, count, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Users,
    label: "гостей приняли",
    to: 150,
    decimals: 0,
    suffix: "+",
    valueColor: "text-emerald-400",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    ring: "ring-emerald-500/20",
    border: "hover:border-emerald-500/20",
  },
  {
    icon: Star,
    label: "средняя оценка",
    to: 4.9,
    decimals: 1,
    suffix: "",
    valueColor: "text-amber-400",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    ring: "ring-amber-500/20",
    border: "hover:border-amber-500/20",
  },
  {
    icon: CalendarDays,
    label: "сезона работы",
    to: 2,
    decimals: 0,
    suffix: "",
    valueColor: "text-cyan-400",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    ring: "ring-cyan-500/20",
    border: "hover:border-cyan-500/20",
  },
  {
    icon: Footprints,
    label: "минут до озера",
    to: 5,
    decimals: 0,
    suffix: "",
    valueColor: "text-violet-400",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    ring: "ring-violet-500/20",
    border: "hover:border-violet-500/20",
  },
];

export function Stats() {
  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center transition-all duration-300 ${stat.border} hover:bg-white/[0.04]`}
            >
              <div
                className={`mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg} ring-1 ${stat.ring}`}
              >
                <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
              <div className={`text-4xl font-bold ${stat.valueColor} md:text-5xl`}>
                <AnimatedCounter to={stat.to} decimals={stat.decimals} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-xs text-white/40 md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
