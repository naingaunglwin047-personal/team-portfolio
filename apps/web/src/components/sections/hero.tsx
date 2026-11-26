import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

import { site } from "@/data/site"
import {
  easeOutExpo,
  fadeUp,
  letterReveal,
  staggerContainer,
  staggerFast,
} from "@/lib/motion"
import { MotionLink } from "@/components/ui/motion-link"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  const brandLines = (site.brand || "Erhlich\nSolution").split("\n")

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden bg-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 60% 45%, black 20%, transparent 75%)",
        }}
      />

      {/* Static glows — animating blur layers causes scroll lag */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-8%] h-[22rem] w-[22rem] rounded-full bg-[oklch(0.55_0.1_200_/_0.25)] blur-[110px]"
      />

      {/* Outer ring */}
      <div
        aria-hidden
        className="hero-ring pointer-events-none absolute top-1/2 right-[8%] hidden h-72 w-72 -translate-y-1/2 md:block"
        style={{ animationDelay: "0.25s" }}
      >
        <div className="hero-ring-spin absolute inset-0 rounded-full border border-white/10" />
        <div
          className="hero-ring-arc absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, oklch(0.62 0.14 250 / 0.55) 28deg, transparent 70deg)",
            WebkitMaskImage:
              "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1px))",
            maskImage:
              "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1px))",
          }}
        />
      </div>

      {/* Inner ring */}
      <div
        aria-hidden
        className="hero-ring pointer-events-none absolute top-1/2 right-[12%] hidden h-52 w-52 -translate-y-1/2 md:block"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="hero-ring-spin-slow absolute inset-0 rounded-full border border-dashed border-white/15" />
        <div className="hero-ring-dot absolute inset-0">
          <span className="absolute top-0 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-28 pb-16 sm:px-8 md:pb-20">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="max-w-2xl will-change-transform"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              transition={easeOutExpo}
              className="mb-4 text-sm tracking-[0.2em] text-brand uppercase"
            >
              Design · Build · Ship
            </motion.p>

            <motion.p
              variants={staggerFast}
              initial="hidden"
              animate="visible"
              className="font-display flex flex-col text-5xl font-semibold tracking-tight text-white sm:text-7xl md:text-8xl"
              aria-label={site.brand}
            >
              {brandLines.map((line, lineIndex) => (
                <span
                  key={`line-${lineIndex}`}
                  className="flex flex-wrap gap-x-[0.25em]"
                >
                  {line.split(" ").map((word, wordIndex) => (
                    <span
                      key={`word-${lineIndex}-${wordIndex}`}
                      className="inline-flex whitespace-nowrap"
                    >
                      {word.split("").map((letter, letterIndex) => (
                        <motion.span
                          key={`letter-${lineIndex}-${wordIndex}-${letterIndex}`}
                          variants={letterReveal}
                          transition={{ ...easeOutExpo, duration: 0.75 }}
                          className="inline-block"
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </span>
                  ))}
                </span>
              ))}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={easeOutExpo}
              className="mt-5 max-w-md text-xl leading-snug text-white sm:text-2xl"
            >
              {site.tagline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={easeOutExpo}
              className="mt-4 max-w-md text-base leading-relaxed text-white/75 sm:text-lg"
            >
              {site.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={easeOutExpo}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MotionLink href="#work" variant="light">
                View selected work
              </MotionLink>
              <MotionLink href="#contact" variant="outline">
                Talk to us
              </MotionLink>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
