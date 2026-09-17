import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

import { site, team } from "@/data/site"
import {
  easeOutExpo,
  fadeUp,
  letterReveal,
  springSoft,
  staggerContainer,
  staggerFast,
} from "@/lib/motion"
import { MotionLink } from "@/components/ui/motion-link"

const portraitMotion = [
  { x: 0, y: 0, rotate: -6, delay: 0.35 },
  { x: 72, y: 48, rotate: 4, delay: 0.48 },
  { x: -28, y: 120, rotate: 7, delay: 0.58 },
  { x: 48, y: 168, rotate: -3, delay: 0.68 },
] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const artY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])

  // const brandLetters = site.brand.split("")
  const brandLines = (site.brand || "Byte&Brush\nStudio").split("\n")

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden bg-black"
    >
      {/* Atmosphere — no photo background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 70% 45%, black 20%, transparent 75%)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand/30 blur-[120px]"
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-8%] h-[22rem] w-[22rem] rounded-full bg-[oklch(0.55_0.1_200_/_0.25)] blur-[110px]"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pt-28 pb-16 sm:px-8 md:grid-cols-12 md:gap-8 md:pb-20">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="md:col-span-6 lg:col-span-6"
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
                <span key={`line-${lineIndex}`} className="flex flex-wrap gap-x-[0.25em]">
                  {line.split(" ").map((word, wordIndex) => (
                    <span key={`word-${lineIndex}-${wordIndex}`} className="inline-flex whitespace-nowrap">
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

        {/* Team visual composition */}
        <motion.div
          style={{ y: artY }}
          className="relative mx-auto h-[22rem] w-full max-w-md md:col-span-6 md:mx-0 md:h-[28rem] lg:h-[30rem]"
        >
          <motion.div
            aria-hidden
            className="absolute inset-[8%] rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-[18%] rounded-full border border-dashed border-white/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
          />

          {team.map((member, index) => {
            const pose = portraitMotion[index]
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 36, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ...easeOutExpo, delay: pose.delay, duration: 0.9 }}
                className="absolute top-6 left-1/2"
                style={{
                  marginLeft: pose.x,
                  marginTop: pose.y,
                  rotate: `${pose.rotate}deg`,
                }}
              >
                <motion.div
                  animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                  transition={{
                    y: {
                      duration: 5 + index * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    },
                    scale: springSoft,
                    rotate: springSoft,
                  }}
                  className="relative w-28 overflow-hidden rounded-xl border border-white/15 bg-[#111] shadow-[0_20px_50px_oklch(0_0_0_/_0.55)] sm:w-32 md:w-36"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-2.5 pt-8 pb-2">
                    <p className="truncate text-xs font-semibold text-white">
                      {member.name.split(" ")[0]}
                    </p>
                    <p className="truncate text-[10px] text-white/65">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
