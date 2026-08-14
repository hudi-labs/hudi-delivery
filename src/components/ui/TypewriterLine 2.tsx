"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const messages = [
  "Cardápio que vende sem comissão.",
  "Conversa que atende 24 horas.",
  "Painel que mostra o que importa.",
];

export function TypewriterLine() {
  const reduceMotion = useReducedMotion();
  const [messageIndex, setMessageIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const message = messages[messageIndex];

  useEffect(() => {
    if (reduceMotion) return;

    const finishedTyping = !deleting && length === message.length;
    const finishedDeleting = deleting && length === 0;
    const delay = finishedTyping ? 1550 : finishedDeleting ? 260 : deleting ? 34 : 62;

    const timer = window.setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (finishedDeleting) {
        setDeleting(false);
        setMessageIndex((current) => (current + 1) % messages.length);
      } else {
        setLength((current) => current + (deleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, length, message, reduceMotion]);

  const visibleText = reduceMotion ? messages[0] : message.slice(0, length);

  return (
    <div className="mt-6 min-h-8 font-semibold text-hudi-deep" aria-label="Cardápio, conversa e painel conectados">
      <span aria-hidden="true" className="inline-flex items-center text-lg sm:text-xl">
        {visibleText}
        <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-hudi-primary" />
      </span>
    </div>
  );
}
