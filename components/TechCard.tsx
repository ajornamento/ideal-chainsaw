import { TechCard as TechCardType } from "@/types";

const statusConfig = {
  "not-started": { label: "시작 전", color: "text-slate-400", dot: "bg-slate-500" },
  "in-progress":  { label: "진행 중", color: "text-amber-400",  dot: "bg-amber-400"  },
  completed:       { label: "완료",    color: "text-emerald-400", dot: "bg-emerald-400" },
};

const levelConfig = {
  beginner:     { label: "입문",    color: "text-sky-400     bg-sky-400/10    border-sky-400/30"     },
  intermediate: { label: "중급",    color: "text-violet-400  bg-violet-400/10 border-violet-400/30"  },
  advanced:     { label: "고급",    color: "text-rose-400    bg-rose-400/10   border-rose-400/30"    },
};

const categoryColor: Record<string, string> = {
  Frontend: "text-cyan-400",
  Backend:  "text-orange-400",
  Language: "text-purple-400",
  DevOps:   "text-green-400",
};

export default function TechCard({ card }: { card: TechCardType }) {
  const status = statusConfig[card.status];
  const level  = levelConfig[card.level];
  const catColor = categoryColor[card.category] ?? "text-slate-400";

  return (
    <article className="group relative flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-black/40">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-lg font-bold ring-1 ring-white/[0.08]">
            {card.icon}
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">{card.name}</h3>
            <span className={`text-xs font-medium ${catColor}`}>{card.category}</span>
          </div>
        </div>

        {/* Level badge */}
        <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${level.color}`}>
          {level.label}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-slate-400">{card.description}</p>

      {/* Progress */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500">진행률</span>
          <span className="font-mono text-slate-300">{card.progress}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-500"
            style={{ width: `${card.progress}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Status */}
        <div className="flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
          <span className={`text-xs font-medium ${status.color}`}>{status.label}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-end gap-1">
          {card.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-white/[0.04] px-2 py-0.5 text-xs text-slate-500 ring-1 ring-white/[0.06]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
