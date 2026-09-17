import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Team } from "@/components/sections/team"
import { Work } from "@/components/sections/work"
import { Contact } from "@/components/sections/contact"

export function App() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
