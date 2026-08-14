"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BellRing, Check, ChefHat, MessageCircle, ShoppingBag, Sparkles, UsersRound, X } from "lucide-react";
import { useEffect, useState } from "react";

const notifications = [
  { id: 0, title: "Novo pedido", text: "Pedido recebido pelo WhatsApp.", tone: "brand" },
  { id: 1, title: "Ação necessária", text: "O pedido #184 aguarda confirmação.", tone: "warning" },
  { id: 2, title: "Venda confirmada", text: "Pedido de R$ 72,40 confirmado.", tone: "success" },
  { id: 3, title: "Operação atualizada", text: "Cozinha avisada automaticamente.", tone: "brand" },
] as const;

const positions = [
  "sm:-top-11 sm:left-5",
  "sm:top-20 sm:-right-6",
  "sm:-bottom-9 sm:-left-3",
  "sm:bottom-16 sm:-right-7",
];

type DemoState = {
  phase: number;
  visible: number[];
  dismissed: number[];
};

export function LiveOrderPreview() {
  const reduceMotion = useReducedMotion();
  const [demo, setDemo] = useState<DemoState>({ phase: 1, visible: [0, 1], dismissed: [] });
  const phase = demo.phase;

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setDemo((current) => {
        const nextPhase = (current.phase + 1) % notifications.length;
        const shouldShow = !current.visible.includes(nextPhase) && !current.dismissed.includes(nextPhase);
        return { ...current, phase: nextPhase, visible: shouldShow ? [...current.visible, nextPhase] : current.visible };
      });
    }, 2600);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  function dismissNotice(id: number) {
    setDemo((current) => ({
      ...current,
      visible: current.visible.filter((noticeId) => noticeId !== id),
      dismissed: current.dismissed.includes(id) ? current.dismissed : [...current.dismissed, id],
    }));
  }

  const rows = [
    { icon: MessageCircle, label: "WhatsApp", state: phase === 0 ? "Novo pedido recebido" : "Pedido identificado", active: phase === 0 },
    { icon: ShoppingBag, label: "Pedido #184", state: phase < 2 ? "Aguardando confirmação" : "Confirmado • R$ 72,40", active: phase === 1 || phase === 2 },
    { icon: ChefHat, label: "Cozinha", state: phase < 3 ? "Aguardando liberação" : "Enviado para preparo", active: phase === 3 },
  ];
  const visibleNotifications = reduceMotion
    ? notifications.filter((notice) => !demo.dismissed.includes(notice.id))
    : notifications.filter((notice) => demo.visible.includes(notice.id));

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-hudi-primary/12 blur-3xl" />
      <div role="img" aria-label="Demonstração de um pedido recebido pelo WhatsApp, confirmado e enviado automaticamente para a cozinha" className="overflow-hidden rounded-2xl border border-white/20 bg-hudi-deep p-3 shadow-float">
        <div aria-hidden="true" className="rounded-xl bg-[#f3f7ff] p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-hudi-slate">Operação ao vivo</p><p className="mt-1 font-bold text-hudi-deep">Pedidos de hoje</p></div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800"><span className="size-1.5 rounded-full bg-emerald-600" /> Online</span>
          </div>

          <div className="grid gap-3">
            {rows.map(({ icon: Icon, label, state, active }, index) => (
              <motion.div
                key={label}
                animate={{ borderColor: active ? "rgba(59, 130, 246, .52)" : "rgba(30, 58, 138, .12)", backgroundColor: active ? "rgba(239, 246, 255, 1)" : "rgba(255, 255, 255, 1)", y: active && !reduceMotion ? -2 : 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-xl border p-3.5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className={`grid size-10 place-items-center rounded-lg ${active ? "bg-hudi-primary text-white" : "bg-hudi-primary/10 text-hudi-deep"}`}><Icon className="size-5" /></span>
                  <div className="min-w-0 flex-1"><p className="truncate text-sm font-bold text-hudi-deep">{label}</p><p className={`text-xs ${phase === 1 && index === 1 ? "font-semibold text-amber-700" : "text-hudi-slate"}`}>{state}</p></div>
                  {phase >= 2 && index === 1 ? <span className="grid size-6 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check className="size-3.5" strokeWidth={3} /></span> : <span className="text-xs font-semibold text-hudi-deep">0{index + 1}</span>}
                </div>

                <AnimatePresence initial={false}>
                  {phase === 1 && index === 1 && (
                    <motion.div initial={reduceMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={reduceMotion ? undefined : { opacity: 0, height: 0 }} className="overflow-hidden">
                      <div className="mt-3 flex items-center justify-between gap-3 border-t border-hudi-line pt-3">
                        <p className="text-xs font-semibold text-hudi-deep">Deseja confirmar o pedido?</p>
                        <div className="flex gap-1.5"><span className="rounded-md border border-hudi-line px-2 py-1 text-[11px] font-semibold text-hudi-slate">Revisar</span><span className="rounded-md bg-hudi-primary px-2 py-1 text-[11px] font-semibold text-white">Confirmar</span></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-hudi-line bg-white p-4"><UsersRound className="mb-3 size-5 text-hudi-primary" /><p className="text-2xl font-bold tracking-tight text-hudi-deep">12 clientes</p><p className="text-xs text-hudi-slate">prontos para recomprar</p></div>
            <div className="rounded-xl border border-hudi-line bg-white p-4"><Sparkles className="mb-3 size-5 text-hudi-primary" /><p className="text-2xl font-bold tracking-tight text-hudi-deep">+24%</p><p className="text-xs text-hudi-slate">pedidos diretos</p></div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:contents" aria-live="polite" aria-label="Avisos da Hudi">
        <AnimatePresence initial={false}>
          {visibleNotifications.map((notice) => {
            const tone = notice.tone === "warning" ? "bg-amber-50 text-amber-700" : notice.tone === "success" ? "bg-emerald-50 text-emerald-700" : "bg-hudi-primary/10 text-hudi-primary";
            return (
              <motion.aside
                key={notice.id}
                role="status"
                initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                className={`relative z-20 w-full rounded-xl border border-white/70 bg-white/96 p-3.5 pr-9 text-hudi-deep shadow-soft shadow-hudi-deep/15 backdrop-blur-xl sm:absolute sm:w-56 ${positions[notice.id]}`}
              >
                <button type="button" onClick={() => dismissNotice(notice.id)} aria-label={`Fechar aviso: ${notice.title}`} className="absolute right-2 top-2 grid size-7 place-items-center rounded-md text-hudi-slate transition-colors duration-200 hover:bg-hudi-deep/6 hover:text-hudi-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hudi-primary"><X className="size-3.5" aria-hidden="true" /></button>
                <div className="flex gap-3"><span className={`grid size-8 shrink-0 place-items-center rounded-lg ${tone}`}><BellRing className="size-4" aria-hidden="true" /></span><div><p className="text-[10px] font-bold uppercase tracking-[0.11em] text-hudi-primary">A Hudi avisa</p><p className="mt-0.5 text-xs font-bold text-hudi-deep">{notice.title}</p><p className="mt-1 text-xs leading-5 text-hudi-slate">{notice.text}</p></div></div>
              </motion.aside>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
