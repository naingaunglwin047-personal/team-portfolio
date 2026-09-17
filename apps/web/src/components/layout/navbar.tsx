import { useEffect, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"

import { cn } from "@workspace/ui/lib/utils"
import { site } from "@/data/site"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 40)
  })

  useEffect(() => {
    const sections = site.nav.map((item) => item.href.replace("#", ""))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActive(`#${visible.target.id}`)
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,color] duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 text-ink backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-white"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
        >
          {site.brand}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm transition-colors",
                active === item.href
                  ? scrolled
                    ? "text-ink"
                    : "text-white"
                  : scrolled
                    ? "text-muted-foreground hover:text-ink"
                    : "text-white/75 hover:text-white"
              )}
            >
              {item.label}
              {active === item.href ? (
                <motion.span
                  layoutId="nav-underline"
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full",
                    scrolled ? "bg-brand" : "bg-white"
                  )}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          Start a project
        </a>
      </div>
    </motion.header>
  )
}
