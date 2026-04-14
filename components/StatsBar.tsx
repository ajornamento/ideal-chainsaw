import { TechCard } from "@/types";

export default function StatsBar({ cards }: { cards: TechCard[] }) {
  const total       = cards.length;
  const completed   = cards.filter((c) => c.status === "completed").length;
  const inProgress  = cards.filter((c) => c.status === "in-progress").length;
  const avgProgress = Math.round(cards.reduce((sum, c) => sum + c.progress, 0) / total);

  const stats = [
    { label: "전체 기술",    value: total,       unit: "개", color: "text-white" },
    { label: "학습 중",     value: inProgress,  unit: "개", color: "text-amber-400" },
    { label: "완료",        value: completed,   unit: "개", color: "text-emerald-400" },
    { label: "평균 진행률", value: avgProgress, unit: "%",  color: "text-violet-400" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-center">
          <p className={`text-2xl font-bold ${s.color}`}>
            {s.value}
            <span className="ml-0.5 text-sm font-normal">{s.unit}</span>
          </p>
          <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
