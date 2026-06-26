"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { GlowingBorderButton } from "@/components/ui/glowing-border-button";
import { Phone, Mail, MessageCircle, AtSign, MapPin, Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const contacts = [
  { icon: Phone, label: "РўРµР»РµС„РѕРЅ", value: "+7 705 599-73-36", href: "tel:+77055997336" },
  { icon: Mail, label: "Email", value: "bryanceva.elvira@mail.ru", href: "mailto:bryanceva.elvira@mail.ru" },
  { icon: MessageCircle, label: "WhatsApp", value: "РќР°РїРёСЃР°С‚СЊ РІ WhatsApp", href: "https://wa.me/77055997336" },
  { icon: AtSign, label: "AtSign", value: "@baza.dara", href: "https://www.instagram.com/baza_otdyxa_dara" },
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
            Р‘СЂРѕРЅРёСЂРѕРІР°РЅРёРµ
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Р—Р°Р±СЂРѕРЅРёСЂСѓР№С‚Рµ РѕС‚РґС‹С…
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Р—Р°РїРѕР»РЅРёС‚Рµ С„РѕСЂРјСѓ РёР»Рё СЃРІСЏР¶РёС‚РµСЃСЊ СЃ РЅР°РјРё РЅР°РїСЂСЏРјСѓСЋ. РћС‚РІРµС‚РёРј РІ С‚РµС‡РµРЅРёРµ 30 РјРёРЅСѓС‚.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Р¤РѕСЂРјР° */}
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
                <h3 className="mb-2 text-xl font-bold text-white">Р—Р°СЏРІРєР° РѕС‚РїСЂР°РІР»РµРЅР°!</h3>
                <p className="text-white/50">Р­Р»СЊРІРёСЂР° СЃРІСЏР¶РµС‚СЃСЏ СЃ РІР°РјРё РІ С‚РµС‡РµРЅРёРµ 30 РјРёРЅСѓС‚ РґР»СЏ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ Р±СЂРѕРЅРёСЂРѕРІР°РЅРёСЏ.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs text-white/40">Р’Р°С€Рµ РёРјСЏ</label>
                    <input
                      className={inputCls}
                      placeholder="РђР№РЅСѓСЂ"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-white/40">РўРµР»РµС„РѕРЅ</label>
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
                    <label className="mb-1.5 block text-xs text-white/40">Р”Р°С‚С‹ Р·Р°РµР·РґР°</label>
                    <input
                      className={inputCls}
                      placeholder="15-17 РёСЋР»СЏ"
                      value={form.dates}
                      onChange={(e) => setForm({ ...form, dates: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-white/40">РљРѕР»РёС‡РµСЃС‚РІРѕ РіРѕСЃС‚РµР№</label>
                    <input
                      className={inputCls}
                      placeholder="4 С‡РµР»РѕРІРµРєР°"
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-white/40">РџРѕР¶РµР»Р°РЅРёСЏ</label>
                  <textarea
                    className={cn(inputCls, "min-h-[100px] resize-none")}
                    placeholder="РўРёРї РґРѕРјРёРєР°, РѕСЃРѕР±С‹Рµ РїРѕР¶РµР»Р°РЅРёСЏ..."
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
                      РћС‚РїСЂР°РІР»СЏРµРј...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      РћС‚РїСЂР°РІРёС‚СЊ Р·Р°СЏРІРєСѓ
                    </span>
                  )}
                </GlowingBorderButton>
              </form>
            )}
          </motion.div>

          {/* РљРѕРЅС‚Р°РєС‚С‹ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-4 font-semibold text-white">РЎРІСЏР¶РёС‚РµСЃСЊ РЅР°РїСЂСЏРјСѓСЋ</h3>
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

            {/* Р›РѕРєР°С†РёСЏ */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">РљР°Рє РґРѕР±СЂР°С‚СЊСЃСЏ</div>
                  <p className="mt-1 text-sm leading-relaxed text-white/50">
                    РЎРµРІРµСЂРѕ-РљР°Р·Р°С…СЃС‚Р°РЅСЃРєР°СЏ РѕР±Р»Р°СЃС‚СЊ, РѕР·РµСЂРѕ РЁР°Р»РєР°СЂ. РўРѕС‡РЅС‹Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹ РїСЂРёС€Р»С‘Рј РїСЂРё РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРё Р±СЂРѕРЅРёСЂРѕРІР°РЅРёСЏ.
                  </p>
                </div>
              </div>
            </div>

            {/* РЈСЃР»РѕРІРёСЏ Р±СЂРѕРЅРёСЂРѕРІР°РЅРёСЏ */}
            <div className="rounded-2xl border border-amber-500/10 bg-amber-500/[0.03] p-6">
              <h4 className="mb-3 text-sm font-medium text-amber-400">РЈСЃР»РѕРІРёСЏ Р±СЂРѕРЅРёСЂРѕРІР°РЅРёСЏ</h4>
              <ul className="space-y-2 text-xs text-white/40">
                <li>- РџСЂРµРґРѕРїР»Р°С‚Р° 50% РїСЂРё Р±СЂРѕРЅРёСЂРѕРІР°РЅРёРё (РЅРµРІРѕР·РІСЂР°С‚РЅР°СЏ)</li>
                <li>- РћС‚РјРµРЅР° РІРѕР·РјРѕР¶РЅР° Р·Р° 3 РґРЅСЏ РґРѕ Р·Р°РµР·РґР°</li>
                <li>- Р—Р°РµР·Рґ 14:00 / Р’С‹РµР·Рґ 12:00</li>
                <li>- РћРћРџРў-РЅР°Р»РѕРі 370 С‚РµРЅРіРµ РѕРїР»Р°С‡РёРІР°РµС‚СЃСЏ РЅР° РјРµСЃС‚Рµ</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


