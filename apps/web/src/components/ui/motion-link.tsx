import { motion } from "motion/react"
import type { ReactNode } from "react"

import { cn } from "@workspace/ui/lib/utils"
import { springSoft } from "@/lib/motion"

type MotionLinkProps = {
  href: string
  children: ReactNode
  className?: string
  variant?: "solid" | "outline" | "light" | "ghost"
}

const variants = {
  solid:
    "bg-white text-black font-semibold shadow-[0_10px_30px_oklch(0_0_0_/_0.35)] hover:bg-white",
  light:
    "bg-white text-black font-semibold shadow-[0_8px_24px_oklch(0_0_0_/_0.35)] hover:bg-white",
  outline:
    "border-2 border-white bg-transparent text-white font-semibold hover:bg-white hover:text-black",
  ghost: "bg-black text-white font-semibold hover:bg-black/90",
}

export function MotionLink({
  href,
  children,
  className,
  variant = "solid",
}: MotionLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={springSoft}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.a>
  )
}
