"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section className="py-20" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          About Me
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
        </h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Background</h3>
                <p className="text-muted-foreground">
                  I am a student at Ahmadu Bello University, pursuing Electronics & Telecommunications Engineering. With
                  a strong foundation in Computer Science and Digital Forensic Investigation, I combine technical
                  expertise with practical experience in cybersecurity and development.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Current Focus</h3>
                <p className="text-muted-foreground">
                  As a Cybersecurity Instructor at the International Cybersecurity and Digital Forensic Academy and an
                  IT Instructor at Haneefa International Schools, I am passionate about sharing knowledge and
                  contributing to a safer digital world through education and practical application.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

