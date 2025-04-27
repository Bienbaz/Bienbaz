"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = {
  Development: ["PHP", "SQL", "HTML5", "CSS3", "JavaScript", "Python", "React", "Next.js"],
  Cybersecurity: ["Ethical Hacking", "Digital Forensics", "Penetration Testing", "Cloud Security"],
  Systems: ["Ubuntu", "Linux (Kali)", "macOS", "Windows"],
  Other: ["Data Science", "Digital Marketing", "Blockchain", "AI"],
}

export function Skills() {
  return (
    <section className="py-20" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Skills & Technologies
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 rounded-md">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

