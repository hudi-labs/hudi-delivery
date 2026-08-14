import { Bot, LayoutDashboard, QrCode } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const whatsappTrialUrl = `https://wa.me/553131890669?text=${encodeURIComponent(
  "Olá, Hudi! Quero começar meu teste gratuito de 100 dias e conhecer a plataforma.",
)}`;

export const nav = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#faq" },
];

export const hero = {
  title: "Complexidade fora.",
  highlight: "Resultado dentro.",
  description:
    "A Hudi conecta pedidos, atendimento e clientes do seu delivery em um só lugar. Sem comissão, sem complicação.",
  cta: "Testar grátis por 100 dias",
  secondary: { label: "Conhecer a plataforma", href: "/plataforma" },
  reassurances: ["Sem cartão", "Sem comissão", "Cancele quando quiser"],
};

export type Product = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const products: Product[] = [
  {
    eyebrow: "Hudi Cardápio",
    title: "Seu cardápio, direto e irresistível.",
    description: "O cliente escolhe e pede pelo seu link, sem aplicativo e sem comissão.",
    icon: QrCode,
  },
  {
    eyebrow: "Hudi Conversa",
    title: "Atendimento que também vende.",
    description: "A IA cuida do WhatsApp com a linguagem do seu restaurante, 24 horas por dia.",
    icon: Bot,
  },
  {
    eyebrow: "Hudi Painel",
    title: "Sua operação, sob controle.",
    description: "Pedidos, vendas e clientes em painéis simples de entender.",
    icon: LayoutDashboard,
  },
];

export const manifesto = {
  eyebrow: "Por que existimos",
  quote: "Problemas reais não precisam de ferramentas genéricas.",
  text: "A Hudi nasce do chão da operação para devolver clareza a quem faz o negócio acontecer.",
};

export const steps = [
  { number: "01", title: "Configure", text: "Cadastre seu negócio e seu cardápio com um fluxo guiado." },
  { number: "02", title: "Publique", text: "Compartilhe seu link e conecte o WhatsApp." },
  { number: "03", title: "Evolua", text: "Acompanhe os resultados e venda melhor." },
];
