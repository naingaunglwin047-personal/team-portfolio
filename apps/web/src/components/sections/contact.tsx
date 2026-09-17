import { motion } from "motion/react"

import { site } from "@/data/site"
import { easeOutExpo, fadeUp, staggerContainer } from "@/lib/motion"
import { MotionLink } from "@/components/ui/motion-link"

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-[oklch(0.78_0.08_200_/_0.2)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
        animate={{ opacity: [0.4, 0.75, 0.4], scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            transition={easeOutExpo}
            className="mb-3 text-sm tracking-[0.18em] text-brand uppercase"
          >
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={easeOutExpo}
            className="font-display text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            Tell us what you&apos;re building.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={easeOutExpo}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Share a brief, a link, or a half-formed idea. We&apos;ll reply within
            two business days with next steps.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={easeOutExpo}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MotionLink href={`mailto:${site.email}`} variant="light">
              {site.email}
            </MotionLink>
            <p className="text-sm text-muted-foreground">{site.location}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
