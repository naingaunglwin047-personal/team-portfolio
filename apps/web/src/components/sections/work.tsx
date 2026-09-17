import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

import { projects } from "@/data/site"
import { easeOutExpo, fadeUp, springSoft, staggerContainer } from "@/lib/motion"
import { SectionHeading } from "@/components/ui/section-heading"

export function Work() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Work"
          title="Selected projects."
          description="A few recent collaborations across fintech, health, and operations."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 space-y-16 md:space-y-24"
        >
          {projects.map((project, index) => (
            <motion.li
              key={project.title}
              variants={fadeUp}
              transition={easeOutExpo}
              className="group grid items-center gap-8 md:grid-cols-12 md:gap-10"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={springSoft}
                className={
                  index % 2 === 1
                    ? "md:col-span-7 md:order-2"
                    : "md:col-span-7"
                }
              >
                <div className="overflow-hidden rounded-md bg-secondary shadow-[0_18px_50px_oklch(0.2_0.03_250_/_0.08)]">
                  <motion.img
                    src={project.image}
                    alt={`Illustration for ${project.title}`}
                    className="aspect-[14/9] w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>

              <div
                className={
                  index % 2 === 1
                    ? "md:col-span-5 md:order-1"
                    : "md:col-span-5"
                }
              >
                <p className="text-sm tracking-wide text-muted-foreground">
                  {project.year} · {project.category}
                </p>
                <h3 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ x: 4 }}
                  transition={springSoft}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand"
                >
                  Discuss a similar project
                  <ArrowUpRight className="size-4" />
                </motion.a>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
