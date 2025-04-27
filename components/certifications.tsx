"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  "Cybersecurity Essentials",
  "Ethical Hacking",
  "CCNA Networking",
  "Blockchain Development",
  "Artificial Intelligence",
  "Cloud Security",
  "Penetration Testing",
  "Digital Forensics",
]

export function Certifications() {
  return (
    <section className="py-20" id="certifications">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-medium">{cert}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

