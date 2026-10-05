import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/types";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  study: CaseStudy;
  featured?: boolean;
  priority?: boolean;
  className?: string;
};

export function CaseStudyCard({ study, featured, priority, className }: CaseStudyCardProps) {
  const href = `/case-studies/${study.slug}`;

  return (
    <article
      className={cn(
        "group",
        featured ? "grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12" : "flex flex-col",
        className,
      )}
    >
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        className={cn(
          "relative block overflow-hidden rounded-md bg-paper-3",
          featured ? "aspect-[4/3] lg:col-span-7" : "aspect-[4/3]",
        )}
      >
        <Image
          src={study.image.src}
          alt=""
          fill
          priority={priority}
          sizes={
            featured
              ? "(min-width: 1024px) 58vw, 100vw"
              : "(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
          }
          className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-[1.03]"
        />
      </Link>

      <div className={cn(featured && "lg:col-span-5")}>
        <p className="text-label text-muted">
          {study.type} · {study.location}
        </p>
        <h3 className={cn("mt-3", featured ? "text-h2" : "text-h3")}>
          <Link href={href} className="hover:text-green transition-colors duration-200">
            {study.headline}
          </Link>
        </h3>
        {featured && <p className="mt-5 max-w-[32rem] text-body text-ink-2">{study.summary}</p>}
        <div className={cn("flex items-end justify-between gap-6 border-t border-line", featured ? "mt-8 pt-6" : "mt-6 pt-5")}>
          <div>
            <p className={cn("text-figure", featured ? "text-[2.5rem] sm:text-5xl" : "text-[2rem]")}>
              {study.metric.figure}
            </p>
            <p className="mt-2 text-small text-ink-2">{study.metric.label}</p>
          </div>
          <Link
            href={href}
            aria-label={`Read the ${study.restaurant} case study`}
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-colors duration-200 group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
          >
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </article>
  );
}
