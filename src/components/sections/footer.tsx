import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5 text-lg font-bold text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 ring-1 ring-emerald-500/30">
            <Leaf className="h-4 w-4 text-emerald-400" />
          </div>
          <span>
            База <span className="text-emerald-400">Дара</span>
          </span>
        </div>

        <p className="text-sm text-white/30">
          Озеро Шалкар, Северный Казахстан
        </p>

        <p className="text-xs text-white/20">
          © 2026 База отдыха Дара
        </p>
      </div>
    </footer>
  );
}
