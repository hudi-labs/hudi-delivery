import type { Metadata } from "next";
import { PreviewCta } from "./cta";
import { PreviewHeader } from "./header";
import {
  PreviewFaq,
  PreviewFooter,
  PreviewHero,
  PreviewManifesto,
  PreviewPlans,
  PreviewProducts,
  PreviewSteps,
  PreviewTestimonials,
} from "./sections";

export const metadata: Metadata = {
  title: "Nova home (prévia) | Hudi Delivery",
  description: "Prévia da reformulação da página inicial da Hudi Delivery.",
  robots: { index: false, follow: false },
};

export default function NovaHomePage() {
  return (
    <>
      <PreviewHeader />
      <main id="main-content" tabIndex={-1}>
        <PreviewHero />
        <PreviewProducts />
        <PreviewTestimonials />
        <PreviewManifesto />
        <PreviewSteps />
        <PreviewPlans />
        <PreviewFaq />
        <PreviewCta />
      </main>
      <PreviewFooter />
    </>
  );
}
