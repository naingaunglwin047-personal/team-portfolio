import { motion } from "motion/react"

import { about } from "@/data/site"
import { easeOutExpo, fadeUp, staggerContainer } from "@/lib/motion"
import { SectionHeading } from "@/components/ui/section-heading"

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
        animate={{ opacity: [0.45, 0.8, 0.45], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[oklch(0.75_0.08_200_/_0.25)] blur-3xl"
        animate={{ opacity: [0.35, 0.7, 0.35], x: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title={about.headline}
          description={about.body}
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-10 border-t border-border/80 pt-10 md:grid-cols-3 md:gap-8"
        >
          {about.principles.map((item, index) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              transition={easeOutExpo}
              whileHover={{ y: -6 }}
              className="group"
            >
              <motion.span
                className="mb-4 block h-px w-10 origin-left bg-brand"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ ...easeOutExpo, delay: 0.15 + index * 0.08 }}
              />
              <h3 className="font-display text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
