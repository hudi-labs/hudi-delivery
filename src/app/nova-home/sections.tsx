import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChefHat, MessageCircle, ShoppingBag } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { HudiLabsLogo } from "@/components/ui/HudiMark";
import { Reveal } from "@/components/ui/Reveal";
import { faqs, plans } from "@/data/site-content";
import { hero, manifesto, products, steps, whatsappTrialUrl } from "./content";

function OrderPreview() {
  const rows = [
    { icon: MessageCircle, label: "WhatsApp", state: "Pedido recebido", done: true },
    { icon: ShoppingBag, label: "Pedido #184", state: "Confirmado • R$ 72,40", done: true },
    { icon: ChefHat, label: "Cozinha", state: "Em preparo", done: false },
  ];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-hudi-primary/10 blur-3xl" />
      <div
        role="img"
        aria-label="Demonstração de um pedido recebido pelo WhatsApp, confirmado e enviado para a cozinha"
        className="rounded-2xl border border-hudi-line bg-white p-5 shadow-float sm:p-7"
      >
        <div aria-hidden="true">
          <div className="mb-6 flex items-center justify-between">
            <p className="font-bold text-hudi-deep">Pedidos de hoje</p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              <span className="size-1.5 rounded-full bg-emerald-600" /> Ao vivo
            </span>
          </div>
          <div className="grid gap-3">
            {rows.map(({ icon: Icon, label, state, done }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-hudi-line bg-hudi-offwhite p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-hudi-primary/10 text-hudi-deep"><Icon className="size-5" /></span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-hudi-deep">{label}</p>
                  <p className="text-xs text-hudi-slate">{state}</p>
                </div>
                {done && <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check className="size-3.5" strokeWidth={3} /></span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PreviewHero() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-40 sm:pt-48 lg:pb-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-160 bg-[radial-gradient(circle_at_80%_8%,rgba(96,165,250,0.14),transparent_38%)]" />
      <div className="container-site grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-[clamp(3rem,8vw,6.25rem)] font-bold leading-[0.97] tracking-[-0.055em]">
              {hero.title} <span className="text-hudi-primary">{hero.highlight}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 sm:text-xl">{hero.description}</p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a href={whatsappTrialUrl} target="_blank" rel="noreferrer" className={buttonClasses("primary", "group px-7 py-4 text-base")}>
                {hero.cta} <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <Link href={hero.secondary.href} className="rounded-sm text-sm font-semibold text-hudi-deep underline-offset-4 hover:underline">
                {hero.secondary.label}
              </Link>
            </div>
            <p className="mt-8 text-sm font-medium text-hudi-slate">{hero.reassurances.join("  ·  ")}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}><OrderPreview /></Reveal>
      </div>
    </section>
  );
}

export function PreviewProducts() {
  return (
    <section id="solucoes" className="section-space scroll-mt-24 bg-white">
      <div className="container-site">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <span className="eyebrow">O que fazemos</span>
          <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.05em]">Três ferramentas. Uma operação simples.</h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.title} delay={index * 0.08} className="h-full">
                <article className="flex h-full min-h-96 flex-col justify-between rounded-2xl bg-hudi-offwhite p-8 sm:p-10">
                  <div>
                    <span className="grid size-14 place-items-center rounded-2xl bg-hudi-primary/10 text-hudi-deep"><Icon className="size-7" aria-hidden="true" /></span>
                    <p className="eyebrow mt-10">{product.eyebrow}</p>
                    <h3 className="mt-4 text-2xl font-bold leading-snug tracking-[-0.03em] sm:text-3xl">{product.title}</h3>
                    <p className="mt-4 leading-7">{product.description}</p>
                  </div>
                  <Link href="/plataforma" className="group mt-10 inline-flex items-center gap-2 rounded-sm font-semibold text-hudi-deep">
                    Conhecer <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "A equipe ganhou clareza no dia a dia e o cliente passou a pedir pelo nosso próprio canal.",
    name: "Marina Alves",
    business: "Pizzaria da Praça",
    city: "Belo Horizonte, MG",
    mark: "PP",
  },
  {
    quote: "O atendimento ficou mais organizado. A gente consegue cuidar do pedido sem perder o jeito humano.",
    name: "Rafael Costa",
    business: "Burgueria Central",
    city: "São Paulo, SP",
    mark: "BC",
  },
  {
    quote: "Finalmente enxergamos a operação inteira em um só lugar e sabemos onde agir primeiro.",
    name: "Juliana Mendes",
    business: "Casa do Sabor",
    city: "Curitiba, PR",
    mark: "CS",
  },
];

export function PreviewTestimonials() {
  return (
    <section id="clientes" className="section-space scroll-mt-24 bg-hudi-offwhite">
      <div className="container-site">
        <Reveal className="mb-12 max-w-2xl">
          <span className="eyebrow">O que clientes contam</span>
          <h2 className="mt-5 text-[clamp(2.5rem,5vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.05em]">Feita para a rotina real.</h2>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08} className="h-full">
              <figure className="flex h-full min-h-64 flex-col justify-between rounded-2xl border border-hudi-line bg-white p-7 sm:p-8">
                <blockquote className="text-xl font-semibold leading-8 tracking-[-0.02em] text-hudi-deep">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-10 flex items-center gap-3 border-t border-hudi-line pt-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-hudi-deep text-xs font-bold tracking-[0.08em] text-white" aria-label={`Marca da ${testimonial.business}`}>
                    {testimonial.mark}
                  </span>
                  <div>
                    <p className="font-bold text-hudi-deep">{testimonial.business}</p>
                    <p className="mt-1 text-sm text-hudi-slate">{testimonial.city}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PreviewManifesto() {
  return (
    <section id="manifesto" className="section-space scroll-mt-24">
      <Reveal className="container-site">
        <div className="mx-auto max-w-4xl py-6 text-center lg:py-12">
          <span className="eyebrow justify-center">{manifesto.eyebrow}</span>
          <blockquote className="mt-8 text-[clamp(2rem,5vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-hudi-deep">
            “{manifesto.quote}”
          </blockquote>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-8">{manifesto.text}</p>
        </div>
      </Reveal>
    </section>
  );
}

export function PreviewSteps() {
  return (
    <section id="como-funciona" className="section-space scroll-mt-24 bg-hudi-deep text-white">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">Como funciona</span>
          {/* estilo inline: a regra global de h1-h3 (sem @layer) vence a utility text-white */}
          <h2 style={{ color: "#fff" }} className="mt-5 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.05em]">Começar é simples.</h2>
        </Reveal>
        <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <div className="border-t border-white/20 pt-6">
                <span className="text-sm font-bold tracking-[0.16em] text-hudi-light">{step.number}</span>
                <h3 style={{ color: "#fff" }} className="mt-4 text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-blue-100">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PreviewPlans() {
  return (
    <section id="planos" className="section-space scroll-mt-24 bg-hudi-offwhite">
      <div className="container-site">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <span className="eyebrow">Planos</span>
          <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.05em]">Comece grátis. Cresça no seu ritmo.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8">Sem comissão por pedido e sem fidelidade obrigatória.</p>
        </Reveal>

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.07} className="h-full">
              <article className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 sm:p-8 ${plan.featured ? "border-hudi-primary shadow-soft" : "border-hudi-line"}`}>
                {plan.featured && <span className="absolute -top-3 left-6 rounded-full bg-hudi-deep px-3 py-1 text-xs font-bold text-white shadow-sm">Mais popular</span>}
                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-6">{plan.description}</p>
                  <div className="mt-7 flex items-end gap-1">
                    <span className={`${plan.price.length > 10 ? "text-3xl" : "text-4xl"} font-bold tracking-[-0.04em] text-hudi-deep`}>{plan.price}</span>
                    {plan.cadence && <span className="mb-1 text-sm">{plan.cadence}</span>}
                  </div>
                </div>
                <ul className="my-8 grid flex-1 content-start gap-3 border-t border-hudi-line pt-7">
                  {plan.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-hudi-deep">
                      <Check className="mt-1 size-4 shrink-0 text-hudi-primary" strokeWidth={3} aria-hidden="true" />{feature}
                    </li>
                  ))}
                </ul>
                <Link href="#contato" className={buttonClasses(plan.featured ? "primary" : "outline", "w-full")}>{plan.cta}</Link>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link href="/planos" className="group inline-flex items-center gap-2 rounded-sm font-semibold text-hudi-deep">
            Ver detalhes dos planos <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}

export function PreviewFaq() {
  return (
    <section id="faq" className="section-space scroll-mt-24 bg-white">
      <div className="container-site grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow">Dúvidas</span>
          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Respostas diretas.</h2>
          <p className="mt-5 max-w-md text-lg leading-8">Se faltar alguma resposta, a gente conversa sem roteiro.</p>
        </Reveal>
        <Reveal delay={0.08}><Accordion items={faqs} /></Reveal>
      </div>
    </section>
  );
}

export function PreviewFooter() {
  const links = [
    ["Plataforma", "/plataforma"],
    ["Planos", "/planos"],
    ["Manifesto", "#manifesto"],
    ["Contato", "#contato"],
  ];

  return (
    <footer className="bg-hudi-deep text-white">
      <div className="container-site flex flex-col gap-10 py-16 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-5"><HudiLabsLogo className="h-11" /></div>
          <p className="max-w-sm leading-7 text-blue-100">Tecnologia prática para restaurantes venderem mais e operarem melhor.</p>
        </div>
        <nav aria-label="Links do rodapé" className="flex flex-wrap gap-x-8 gap-y-3 lg:pt-2">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="text-sm text-white/78 transition-colors duration-200 hover:text-white">{label}</Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/12">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-blue-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hudi Delivery. Feito para negócios reais.</p>
          <a href="mailto:contato@hudi.delivery" className="inline-flex items-center gap-1.5 rounded-sm transition-colors duration-200 hover:text-white">
            contato@hudi.delivery <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
