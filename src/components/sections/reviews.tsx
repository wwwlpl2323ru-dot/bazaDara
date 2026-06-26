"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Айнур М.",
    date: "Июль 2025",
    text: "Провели здесь выходные с семьёй - дети в восторге! Чистота на высшем уровне, администратор Эльвира встретила тепло. Обязательно вернёмся.",
    rating: 5,
    avatar: "А",
  },
  {
    name: "Дмитрий К.",
    date: "Август 2025",
    text: "Шикарная баня из липы - это отдельный вид удовольствия. Озеро рядом, рыба клюёт. Тишина и покой - именно то, что искал.",
    rating: 5,
    avatar: "Д",
  },
  {
    name: "Зарина Б.",
    date: "Июнь 2025",
    text: "Уехала с подругами на 3 дня. Столько эмоций и энергии набрались! Катамараны, походы, медитации на рассвете. Рекомендую всем.",
    rating: 5,
    avatar: "З",
  },
  {
    name: "Алексей Т.",
    date: "Июль 2025",
    text: "Профессионализм Эльвиры поразил. Всё организовано идеально. Место действительно особенное - сюда хочется возвращаться снова.",
    rating: 5,
    avatar: "А",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 px-4">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
            Отзывы
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Что говорят гости
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-white/50">4.9 средняя оценка</span>
          </div>
        </motion.div>

        {/* Карточки отзывов */}
        <div className="grid gap-4 md:grid-cols-2">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name + review.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-emerald-500/20 hover:bg-white/[0.04]"
            >
              {/* Иконка цитаты */}
              <Quote className="absolute right-6 top-6 h-8 w-8 text-white/5 transition-all duration-300 group-hover:text-emerald-500/10" />

              {/* Звёзды */}
              <div className="mb-4 flex gap-1">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Текст */}
              <p className="mb-6 text-sm leading-relaxed text-white/60">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Автор */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-400 ring-1 ring-emerald-500/30">
                  {review.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{review.name}</div>
                  <div className="text-xs text-white/30">{review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
