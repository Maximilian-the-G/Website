"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { BotIcon as Robot, Brain, Factory, Wrench, Code, HardHat, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

// Helper component for animating text character by character
const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ")
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div className={className} variants={container} initial="hidden" animate="visible">
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Skill data with descriptions for tooltips
const skills = [
  {
    name: "Robotics",
    icon: Robot,
    color: "text-muted-gold",
    description: "Designing and building autonomous systems.",
  },
  {
    name: "Bionics",
    icon: Brain,
    color: "text-muted-gold",
    description: "Integrating biological and electronic systems.",
  },
  {
    name: "Additive Manufacturing",
    icon: Factory,
    color: "text-muted-gold",
    description: "Expert in 3D printing and rapid prototyping.",
  },
  { name: "CAD", icon: Wrench, color: "text-pure-white", description: "Proficient in computer-aided design software." },
  {
    name: "Python",
    icon: Code,
    color: "text-pure-white",
    description: "Strong programming skills for robotics and AI.",
  },
  {
    name: "Field Operations",
    icon: HardHat,
    color: "text-pure-white",
    description: "Experienced in deploying and maintaining systems in challenging environments.",
  },
]

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-pure-black text-pure-white">
      {/* Navbar: Sticky and with navy-blue background */}
      <header className="sticky top-0 z-50 w-full bg-navy-blue py-4 px-6 shadow-lg">
        <nav className="container flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold uppercase tracking-wider text-pure-white">
            JOHN DOE
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="#home"
              className="text-lg font-medium text-pure-white hover:text-vibrant-violet transition-colors relative group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-vibrant-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium text-pure-white hover:text-vibrant-violet transition-colors relative group"
            >
              About
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-vibrant-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium text-pure-white hover:text-vibrant-violet transition-colors relative group"
            >
              Projects
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-vibrant-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium text-pure-white hover:text-vibrant-violet transition-colors relative group"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-vibrant-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section with subtle particle animation */}
        <motion.section
          id="home"
          className="relative w-full min-h-screen flex items-center justify-center text-center bg-navy-blue overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background: "radial-gradient(circle at center, #0A192F 0%, #000000 100%)",
            backgroundSize: "200% 200%", // Larger background to allow movement
            animation: "moveBackground 30s linear infinite alternate", // Custom animation for subtle movement
          }}
        >
          <style jsx global>{`
            @keyframes moveBackground {
              0% { background-position: 0% 0%; }
              100% { background-position: 100% 100%; }
            }
          `}</style>
          <div className="relative z-10 space-y-6 px-4 md:px-6 max-w-4xl">
            <AnimatedText
              text="JOHN DOE"
              className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-pure-white drop-shadow-lg"
            />
            <motion.h2
              className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-pure-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Field-Ready Robotics for Real-World Challenges
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-pure-white/80 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              A robotics engineering student from TU Freiberg, specializing in creating robust and intelligent systems
              that bridge the gap between human and machine. From bionics and prosthetics to aerospace applications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <Button
                asChild
                className="mt-8 px-8 py-4 text-lg font-bold uppercase bg-vibrant-violet text-pure-white hover:bg-vibrant-violet/90 transition-colors shadow-lg shadow-vibrant-violet/40"
              >
                <Link href="#projects">Explore My Projects</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* NEW About Section Layout (Interactive Blueprint) */}
        <motion.section
          id="about"
          className="w-full py-16 md:py-24 lg:py-32 bg-pure-black relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 0%, rgba(10, 25, 47, 0.2) 1px, transparent 1px),
                              linear-gradient(90deg, transparent 0%, rgba(10, 25, 47, 0.2) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "animateGrid 60s linear infinite",
          }}
        >
          <style jsx global>{`
            @keyframes animateGrid {
              from { background-position: 0 0; }
              to { background-position: 50px 50px; }
            }
          `}</style>
          <div className="container grid md:grid-cols-2 gap-12 items-center px-4 md:px-6 relative z-10">
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className="relative w-[300px] h-[346px] md:w-[400px] md:h-[462px] bg-navy-blue border-4 border-vibrant-violet shadow-2xl shadow-vibrant-violet/30"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <Image
                  src="/placeholder.svg?height=462&width=400"
                  width={400}
                  height={462}
                  alt="Profile Picture"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
            <div className="space-y-8">
              <motion.h2
                className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-pure-white border-b-2 border-muted-gold pb-4 inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                About Me
              </motion.h2>
              <motion.p
                className="text-lg text-pure-white/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                As a dedicated robotics engineering student from TU Freiberg, I am passionate about developing robust
                and intelligent systems that excel in real-world environments. My academic foundation is complemented by
                hands-on experience gained through volunteer work with THW (German Federal Agency for Technical Relief)
                and DRK (German Red Cross), where I honed my problem-solving skills and ability to perform under
                pressure. This unique blend of technical expertise and practical, field-ready experience allows me to
                approach complex challenges with a reliable and innovative mindset, bridging the gap between theoretical
                knowledge and practical application.
              </motion.p>
              <div className="space-y-4">
                <motion.h3
                  className="text-2xl font-bold uppercase tracking-tight text-pure-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Skills
                </motion.h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="relative flex flex-col items-center text-center space-y-2 group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: 0.1 * index + 1 }}
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 8px #8A2BE2, 0 0 15px #8A2BE2",
                        filter: "drop-shadow(0 0 8px #8A2BE2)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <skill.icon
                        className={`h-10 w-10 ${skill.color} group-hover:text-vibrant-violet transition-colors`}
                      />
                      <span className="text-pure-white text-lg font-medium group-hover:text-vibrant-violet transition-colors">
                        {skill.name}
                      </span>
                      <motion.div
                        className="absolute bottom-full mb-2 px-3 py-1 bg-navy-blue text-pure-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.description}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="w-full py-16 md:py-24 lg:py-32 bg-navy-blue"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container px-4 md:px-6 space-y-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-pure-white text-center border-b-2 border-muted-gold pb-4 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              Projects
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Project Card with enhanced hover effects */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-navy-blue border border-gray-700 relative overflow-hidden group">
                  <CardContent className="p-6 space-y-4">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        width={300}
                        height={200}
                        alt="Project 1"
                        className="rounded-lg object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-pure-white">Autonomous Rover</h3>
                    <p className="text-pure-white/70 text-sm">
                      Developed a fully autonomous rover for environmental monitoring in challenging terrains.
                    </p>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      <motion.span
                        className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        Robotics
                      </motion.span>
                      <motion.span
                        className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        AI
                      </motion.span>
                      <motion.span
                        className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        Python
                      </motion.span>
                    </div>
                    {/* Violet border on hover */}
                    <div className="absolute inset-0 border-2 border-transparent rounded-lg transition-colors duration-300 group-hover:border-vibrant-violet group-hover:shadow-lg group-hover:shadow-vibrant-violet/50"></div>
                  </CardContent>
                </Card>
              </motion.div>
              {/* Duplicate and modify for other projects */}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="w-full py-16 md:py-24 lg:py-32 bg-pure-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container px-4 md:px-6 space-y-12 text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-pure-white border-b-2 border-muted-gold pb-4 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="text-lg text-pure-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
            </motion.p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="#"
                className="text-pure-white hover:text-muted-gold transition-colors"
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin className="h-10 w-10" />
              </motion.a>
              <motion.a
                href="#"
                className="text-pure-white hover:text-muted-gold transition-colors"
                aria-label="GitHub Profile"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Github className="h-10 w-10" />
              </motion.a>
            </div>
            <div className="max-w-lg mx-auto">
              <form className="grid gap-6">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-navy-blue border border-gray-700 text-pure-white placeholder:text-pure-white/60 focus:border-vibrant-violet focus:ring-vibrant-violet"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-navy-blue border border-gray-700 text-pure-white placeholder:text-pure-white/60 focus:border-vibrant-violet focus:ring-vibrant-violet"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-navy-blue border border-gray-700 text-pure-white placeholder:text-pure-white/60 focus:border-vibrant-violet focus:ring-vibrant-violet"
                />
                <Button
                  type="submit"
                  className="px-8 py-4 text-lg font-bold uppercase bg-vibrant-violet text-pure-white shadow-lg shadow-vibrant-violet/40 animate-pulse-subtle"
                >
                  Send Message
                </Button>
                <style jsx global>{`
                  @keyframes pulse-subtle {
                    0%, 100% { box-shadow: 0 0 0px rgba(138, 43, 226, 0.4); }
                    50% { box-shadow: 0 0 15px rgba(138, 43, 226, 0.7); }
                  }
                  .animate-pulse-subtle {
                    animation: pulse-subtle 2s infinite ease-in-out;
                  }
                `}</style>
              </form>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-navy-blue text-pure-white/70 text-center text-sm border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <p>&copy; {new Date().getFullYear()} JOHN DOE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
