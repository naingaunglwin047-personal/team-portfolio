import { motion } from "motion/react"

import { services } from "@/data/site"
import { easeOutExpo, fadeUp, staggerContainer } from "@/lib/motion"
import { SectionHeading } from "@/components/ui/section-heading"

export function Services() {
  return (
    <section id="services" className="bg-mist/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What we bring to the table."
          description="Four capabilities we run end-to-end — from the first question to a shipped product."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-x-10 gap-y-12 border-t border-border/80 pt-12 sm:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              variants={fadeUp}
              transition={easeOutExpo}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm tracking-wide text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <motion.span
                  className="h-px flex-1 origin-left bg-border"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...easeOutExpo, delay: 0.12 + index * 0.06 }}
                />
              </div>

              <h3 className="font-display mt-4 text-2xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {service.offerings.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-ink/80 before:mr-2 before:text-brand before:content-['·']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
