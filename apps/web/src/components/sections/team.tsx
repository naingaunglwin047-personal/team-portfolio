import { motion } from "motion/react"

import { team } from "@/data/site"
import { easeOutExpo, fadeUp, springSoft, staggerContainer } from "@/lib/motion"
import { SectionHeading } from "@/components/ui/section-heading"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.3 0 .32.22.7.83.58C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
    </svg>
  )
}

export function Team() {
  return (
    <section id="team" className="bg-mist/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Team"
          title="The people behind the work."
          description="A tight group of designers, engineers, and strategists who ship together."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <motion.li
              key={member.name}
              variants={fadeUp}
              transition={easeOutExpo}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-secondary">
                <motion.img
                  src={member.image}
                  alt={`Illustrated portrait of ${member.name}`}
                  className="h-full w-full object-cover object-top"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div
                  initial={false}
                  className="absolute inset-x-0 bottom-0 flex gap-2 p-3 opacity-0 translate-y-3 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <motion.a
                    href={member.links.linkedin}
                    aria-label={`${member.name} on LinkedIn`}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={springSoft}
                    className="inline-flex size-9 items-center justify-center rounded-md bg-white text-black shadow-sm"
                  >
                    <LinkedInIcon className="size-4" />
                  </motion.a>
                  <motion.a
                    href={member.links.github}
                    aria-label={`${member.name} on GitHub`}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={springSoft}
                    className="inline-flex size-9 items-center justify-center rounded-md bg-white text-black shadow-sm"
                  >
                    <GitHubIcon className="size-4" />
                  </motion.a>
                </motion.div>
              </div>

              <div className="mt-4">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-sm text-brand">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
