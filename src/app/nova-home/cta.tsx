"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function PreviewCta() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const business = String(new FormData(event.currentTarget).get("business") ?? "").trim();
    const message = business
      ? `Olá, Hudi! Quero conhecer a plataforma para o meu negócio: ${business}.`
      : "Olá, Hudi! Quero conhecer a plataforma.";
    setSent(true);
    window.open(`https://wa.me/553131890669?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    window.setTimeout(() => setSent(false), 1500);
  }

  return (
    <section id="contato" className="section-space scroll-mt-24 bg-white">
      <Reveal className="container-site">
        <div className="relative isolate overflow-hidden rounded-2xl bg-hudi-deep px-6 py-16 text-center shadow-float sm:px-10 lg:py-24">
          <div className="absolute -right-24 -top-36 -z-10 size-96 rounded-full bg-hudi-primary/30 blur-3xl" />
          <div className="absolute -bottom-44 -left-20 -z-10 size-96 rounded-full bg-hudi-light/12 blur-3xl" />
          {/* estilo inline: a regra global de h1-h3 (sem @layer) vence a utility text-white */}
          <h2 style={{ color: "#fff" }} className="mx-auto max-w-3xl text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.05em]">
            Vamos simplificar seu delivery?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Conte o nome do seu negócio e a gente continua a conversa pelo WhatsApp. Sem compromisso.
          </p>
          <form onSubmit={handleSubmit} className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <label htmlFor="preview-business-name" className="sr-only">Nome do negócio</label>
            <input
              id="preview-business-name"
              name="business"
              required
              autoComplete="organization"
              placeholder="Nome do seu negócio"
              className="min-h-13 w-full rounded-lg border border-white/15 bg-white/10 px-5 text-sm font-medium text-white outline-none transition-colors placeholder:text-blue-200/70 hover:border-white/25 focus:border-hudi-light focus:ring-2 focus:ring-hudi-light/25"
            />
            <button
              type="submit"
              disabled={sent}
              className="group inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-hudi-deep shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-md disabled:pointer-events-none disabled:opacity-70"
            >
              <MessageCircle className="size-4.5 text-hudi-primary" aria-hidden="true" />
              {sent ? "Abrindo conversa..." : "Continuar no WhatsApp"}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </form>
          <p className="mt-4 text-xs text-blue-200">Seus dados serão usados somente para iniciar esta conversa no WhatsApp.</p>
        </div>
      </Reveal>
    </section>
  );
}
