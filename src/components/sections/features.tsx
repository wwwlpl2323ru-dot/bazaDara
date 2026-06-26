"use client";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
import { Waves, Trees, Users, Flame, Fish, Mountain } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Озеро Шалкар",
    description: "Чистое природное озеро в 5 минутах ходьбы. Купание, рыбалка, катамараны.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-cyan-400",
    ringColor: "ring-cyan-500/20",
  },
  {
    icon: Trees,
    title: "Природа и тишина",
    description: "Окружающая степь, свежий воздух, птицы. Полный отрыв от городского шума.",
    color: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-400",
    ringColor: "ring-emerald-500/20",
  },
  {
    icon: Users,
    title: "Семейный отдых",
    description: "Домики на 2-6 человек. Детская площадка, волейбол, безопасная территория.",
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    ringColor: "ring-violet-500/20",
  },
  {
    icon: Flame,
    title: "Парилка из липы",
    description: "Настоящая баня из липы. Восстановление после прогулок и активностей.",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-amber-400",
    ringColor: "ring-amber-500/20",
  },
  {
    icon: Fish,
    title: "Рыбалка",
    description: "Богатая рыбой водоём. Снасти можно взять в аренду прямо на территории.",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
    ringColor: "ring-blue-500/20",
  },
  {
    icon: Mountain,
    title: "Активный отдых",
    description: "Пешие маршруты, сбор грибов и ягод, медитации на рассвете, спортивные активности.",
    color: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
    ringColor: "ring-rose-500/20",
  },
];

export function Features() {
  return (
    <section id="about" className="py-24 px-4">
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
            Почему Дара
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Всё для настоящего отдыха
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Мы создали место, где природа, уют и приватность объединяются
            в один незабываемый опыт.
          </p>
        </motion.div>

        {/* Карточки с 3D-эффектом */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <CardContainer containerClassName="w-full">
                <CardBody className="group relative w-full rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                  <CardItem translateZ={20} className="mb-4">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} ring-1 ${feature.ringColor}`}>
                      <feature.icon className={`h-5 w-5 ${feature.iconColor}`} />
                    </div>
                  </CardItem>
                  <CardItem translateZ={30} as="h3" className="mb-2 text-lg font-semibold text-white">
                    {feature.title}
                  </CardItem>
                  <CardItem translateZ={15} as="p" className="text-sm leading-relaxed text-white/50">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
