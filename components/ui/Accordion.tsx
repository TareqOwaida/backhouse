"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { Faq } from "@/types";
import { cn } from "@/lib/utils";

type AccordionProps = {
  items: Faq[];
  className?: string;
  defaultOpen?: number;
};

export function Accordion({ items, className, defaultOpen = 0 }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={cn("rule-strong", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.question} className="border-b border-line">
            <h3 className="font-sans">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-200 hover:text-green sm:py-6"
              >
                <span className="text-[1.0625rem] leading-snug font-medium sm:text-lg">
                  {item.question}
                </span>
                <Plus
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className={cn(
                    "mt-0.5 size-5 shrink-0 text-muted transition-transform duration-300 ease-out-quart",
                    isOpen && "rotate-45",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out-quart",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[44rem] pb-6 text-body text-ink-2">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
