import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-primary/20">
        <div className="container flex items-center justify-between h-16">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            AA
          </span>
          <ThemeToggle />
        </div>
      </nav>
      <main className="container px-4 sm:px-6 lg:px-8 pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}

