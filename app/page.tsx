import TechCard from "@/components/TechCard";
import StatsBar from "@/components/StatsBar";
import { techStack } from "@/data/techStack";

export default function Home() {
  const categories = [...new Set(techStack.map((c) => c.category))];

  return (
    <main className="min-h-screen bg-[#0d1117] px-4 py-12 sm:px-6 lg:px-10">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <header className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-medium text-violet-400">
            <span className="h-px w-6 bg-violet-400" />
            Personal Learning Dashboard
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ideal Chainsaw{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="max-w-xl text-sm text-slate-400">
            학습 중인 기술 스택을 한눈에 관리하세요. 진행률을 추적하고 목표를 향해 나아가세요.
          </p>
        </header>

        {/* Stats */}
        <StatsBar cards={techStack} />

        {/* Cards by category */}
        {categories.map((category) => {
          const cards = techStack.filter((c) => c.category === category);
          return (
            <section key={category} className="space-y-4">
              <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-500">
                <span>{category}</span>
                <span className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-slate-600">{cards.length}</span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((card) => (
                  <TechCard key={card.id} card={card} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
