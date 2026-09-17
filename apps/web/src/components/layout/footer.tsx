import { site } from "@/data/site"
import { Reveal } from "@/components/ui/reveal"

export function Footer() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Reveal>
          <p className="font-display text-lg font-semibold text-ink">
            {site.brand}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{site.location}</p>
        </Reveal>

        <Reveal delay={0.08} className="flex flex-wrap gap-5 text-sm">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site.brand}
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
