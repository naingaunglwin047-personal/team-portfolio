import { useEffect, useState, type MouseEvent } from "react"
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react"

import { cn } from "@workspace/ui/lib/utils"
import { site } from "@/data/site"
import { easeOutExpo, springSoft } from "@/lib/motion"

function unlockScroll() {
  document.body.style.overflow = ""
  document.documentElement.style.overflow = ""
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const solid = scrolled || menuOpen

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 40)
  })

  useEffect(() => {
    const sectionIds = site.nav.map((item) => item.href.replace("#", ""))

    const updateActive = () => {
      const probe = window.scrollY + window.innerHeight * 0.28
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120

      if (nearBottom) {
        setActive(`#${sectionIds[sectionIds.length - 1]}`)
        return
      }

      let current = ""
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= probe) {
          current = `#${id}`
        }
      }
      setActive(current)
    }

    updateActive()
    window.addEventListener("scroll", updateActive, { passive: true })
    window.addEventListener("resize", updateActive)
    return () => {
      window.removeEventListener("scroll", updateActive)
      window.removeEventListener("resize", updateActive)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      unlockScroll()
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setMenuOpen(false)
      }
    }

    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("resize", onResize)

    return () => {
      unlockScroll()
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("resize", onResize)
    }
  }, [menuOpen])

  const goTo = (href: string, event?: MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault()
    setActive(href === "#top" ? "" : href)
    setMenuOpen(false)
    unlockScroll()

    const id = href.replace("#", "")
    const scrollToTarget = () => {
      if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" })
        history.replaceState(null, "", "#top")
        return
      }

      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: "smooth" })
      history.replaceState(null, "", href)
    }

    // Unlock + close menu first, then scroll (hash nav fails while body is locked)
    window.setTimeout(scrollToTarget, 50)
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,color] duration-300",
        solid
          ? "border-b border-border/70 bg-background/90 text-ink backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-white"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
          onClick={(event) => goTo("#top", event)}
        >
          {site.brand}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={cn(
                "relative text-sm transition-colors",
                active === item.href
                  ? solid
                    ? "text-ink"
                    : "text-white"
                  : solid
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
                    solid ? "bg-brand" : "bg-white"
                  )}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(event) => goTo("#contact", event)}
            className="hidden rounded-md bg-white px-3.5 py-2 text-sm font-semibold !text-black shadow-sm transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Start a project
          </a>

          <motion.button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            whileTap={{ scale: 0.94 }}
            transition={springSoft}
            className={cn(
              "relative flex size-10 items-center justify-center rounded-md md:hidden",
              solid ? "text-ink" : "text-white"
            )}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3.5 w-5">
              <motion.span
                className="absolute left-0 block h-px w-5 bg-current"
                animate={
                  menuOpen
                    ? { top: "50%", rotate: 45, y: "-50%" }
                    : { top: "0%", rotate: 0, y: "0%" }
                }
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="absolute top-1/2 left-0 block h-px w-5 -translate-y-1/2 bg-current"
                animate={menuOpen ? { opacity: 0, x: 6 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 block h-px w-5 bg-current"
                animate={
                  menuOpen
                    ? { top: "50%", rotate: -45, y: "-50%" }
                    : { top: "100%", rotate: 0, y: "-100%" }
                }
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border/70 bg-background/95 text-ink backdrop-blur-md md:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.05 },
                },
              }}
              className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5 sm:px-8"
            >
              {site.nav.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => goTo(item.href, event)}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={easeOutExpo}
                  className={cn(
                    "border-b border-border/60 py-3.5 text-lg font-medium transition-colors",
                    active === item.href
                      ? "text-brand"
                      : "text-ink hover:text-brand"
                  )}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={(event) => goTo("#contact", event)}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={easeOutExpo}
                className="mt-4 inline-flex items-center justify-center rounded-md border border-border bg-white px-5 py-3 text-sm font-semibold !text-black shadow-sm"
              >
                Start a project
              </motion.a>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
