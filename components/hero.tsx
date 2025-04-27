"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Code, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        <div className="flex gap-4 mb-6">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <Code className="w-8 h-8 text-primary" />
          <Database className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Abdulrahman Abdulaziz
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-[800px]">
          Cybersecurity Expert • Full-Stack Developer • Digital Forensics Specialist
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="relative overflow-hidden group">
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
          <Button size="lg" variant="outline" className="border-2 hover:border-primary transition-colors duration-300">
            Contact Me
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

