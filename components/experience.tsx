"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseIcon } from "lucide-react"

const experiences = [
  {
    title: "Cybersecurity Instructor",
    company: "International Cybersecurity and Digital Forensic Academy (ICDFA)",
    description: "Teaching cybersecurity concepts and practical skills to students.",
  },
  {
    title: "Cybercrime Investigations Intern",
    company: "CFSS, India",
    description: "Gaining hands-on experience in digital forensics and cybercrime investigation.",
  },
  {
    title: "IT Instructor & Data Processor",
    company: "Haneefa International Schools",
    description: "Teaching IT concepts and managing data processing operations.",
  },
  {
    title: "Volunteer Cybersecurity Tutor and Web Developer",
    company: "HTN Technologies",
    description: "Sharing knowledge and mentoring students in technology-related subjects.",
  },
  {
    title: "Deputy Chairman",
    company: "Better Future Movement (BEFUM)",
    description: "Services For Humanity.",
  },
]

export function Experience() {
  return (
    <section className="py-20" id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <BriefcaseIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                      <p className="text-muted-foreground mt-2">{exp.description}</p>
                    </div>
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

