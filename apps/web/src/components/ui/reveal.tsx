import { motion } from "motion/react"
import type { ReactNode } from "react"

import { cn } from "@workspace/ui/lib/utils"
import { easeOutExpo, fadeUp } from "@/lib/motion"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ ...easeOutExpo, delay }}
    >
      {children}
    </motion.div>
  )
}
