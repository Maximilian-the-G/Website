import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { BotIcon as Robot, Brain, Factory, Wrench, Code, HardHat, Linkedin, Github, Mail, Phone } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-pure-black text-pure-white font-sans">
      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-navy-blue py-4 px-6 shadow-lg">
        <nav className="container flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold uppercase tracking-wider text-pure-white font-heading">
            JOHN DOE
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="#home"
              className="text-lg font-medium text-pure-white hover:text-vibrant-violet transition-colors relative group font-body"
            >
              Home
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-vibrant-violet group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium text-pure-white hover:text-vibrant-violet transition-colors relative group font-body"
            >
              About
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-vibrant-violet group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium text-pure-white hover:text-vibrant-violet transition-colors relative group font-body"
            >
              Projects
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-vibrant-violet group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium text-pure-white hover:text-vibrant-violet transition-colors relative group font-body"
            >
              Contact
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-vibrant-violet group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative w-full min-h-screen flex items-center justify-center text-center bg-navy-blue overflow-hidden"
          style={{
            background: "radial-gradient(circle at center, #0A192F 0%, #000000 100%)",
          }}
        >
          <div className="relative z-10 space-y-6 px-4 md:px-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-pure-white drop-shadow-[0_5px_5px_rgba(138,43,226,0.3)]">
              JOHN DOE
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-pure-white/90 font-heading">
              Field-Ready Robotics for Real-World Challenges
            </h2>
            <p className="text-lg md:text-xl text-pure-white/80 max-w-2xl mx-auto leading-relaxed font-body">
              A robotics engineering student from TU Freiberg, specializing in creating robust and intelligent systems
              that bridge the gap between human and machine. From bionics and prosthetics to aerospace applications.
            </p>
            <Button
              asChild
              className="mt-8 px-8 py-4 text-lg font-bold uppercase bg-vibrant-violet text-pure-white hover:bg-vibrant-violet/90 transition-colors shadow-lg shadow-vibrant-violet/40 hover:shadow-vibrant-violet/60"
            >
              <Link href="#projects">Explore My Projects</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-pure-black">
          <div className="container grid md:grid-cols-2 gap-12 items-center px-4 md:px-6">
            <div className="flex justify-center md:justify-end">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Profile Picture"
                className="rounded-full object-cover border-4 border-vibrant-violet shadow-2xl shadow-vibrant-violet/30"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-pure-white font-heading">
                ABOUT ME
              </h2>
              <div className="w-[50px] h-[2px] bg-muted-gold mb-6" />
              <p className="text-lg text-pure-white/80 leading-relaxed font-body">
                As a dedicated robotics engineering student from TU Freiberg, I am passionate about developing robust
                and intelligent systems that excel in real-world environments. My academic foundation is complemented by
                hands-on experience gained through volunteer work with THW (German Federal Agency for Technical Relief)
                and DRK (German Red Cross), where I honed my problem-solving skills and ability to perform under
                pressure. This unique blend of technical expertise and practical, field-ready experience allows me to
                approach complex challenges with a reliable and innovative mindset, bridging the gap between theoretical
                knowledge and practical application.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-pure-white font-heading">Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Robot className="h-10 w-10 text-muted-gold" />
                    <span className="text-pure-white text-lg font-medium font-body">Robotics</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Brain className="h-10 w-10 text-muted-gold" />
                    <span className="text-pure-white text-lg font-medium font-body">Bionics</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Factory className="h-10 w-10 text-muted-gold" />
                    <span className="text-pure-white text-lg font-medium font-body">Additive Manufacturing</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Wrench className="h-10 w-10 text-pure-white" />
                    <span className="text-pure-white text-lg font-medium font-body">CAD</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Code className="h-10 w-10 text-pure-white" />
                    <span className="text-pure-white text-lg font-medium font-body">Python</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <HardHat className="h-10 w-10 text-pure-white" />
                    <span className="text-pure-white text-lg font-medium font-body">Field Operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-navy-blue">
          <div className="container px-4 md:px-6 space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-pure-white text-center font-heading">
              PROJECTS
            </h2>
            <div className="w-[80px] h-[2px] bg-muted-gold mx-auto mb-12" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-navy-blue border border-gray-700 hover:border-vibrant-violet hover:shadow-lg hover:shadow-vibrant-violet/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Autonomous Rover Project"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <h3 className="text-2xl font-bold text-pure-white font-heading">Autonomous Rover</h3>
                  <p className="text-pure-white/70 text-sm font-body">
                    Developed a fully autonomous rover for environmental monitoring in challenging terrains.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full font-body">
                      Robotics
                    </span>
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full font-body">
                      AI
                    </span>
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full font-body">
                      Python
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-navy-blue border border-gray-700 hover:border-vibrant-violet hover:shadow-lg hover:shadow-vibrant-violet/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Bionic Prosthetic Arm Project"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <h3 className="text-2xl font-bold text-pure-white font-heading">Bionic Prosthetic Arm</h3>
                  <p className="text-pure-white/70 text-sm font-body">
                    Designed and prototyped an advanced bionic prosthetic arm with haptic feedback.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full font-body">
                      Bionics
                    </span>
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full font-body">
                      3D Printing
                    </span>
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full font-body">
                      CAD
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-navy-blue border border-gray-700 hover:border-vibrant-violet hover:shadow-lg hover:shadow-vibrant-violet/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Aerospace Drone System Project"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <h3 className="text-2xl font-bold text-pure-white font-heading">Aerospace Drone System</h3>
                  <p className="text-pure-white/70 text-sm font-body">
                    Developed a robust drone system for high-altitude atmospheric data collection.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full font-body">
                      Aerospace
                    </span>
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full font-body">
                      Embedded Systems
                    </span>
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full font-body">
                      C++
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-pure-black">
          <div className="container px-4 md:px-6 space-y-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-pure-white font-heading">
              GET IN TOUCH
            </h2>
            <div className="w-[80px] h-[2px] bg-muted-gold mx-auto mb-12" />
            <p className="text-lg text-pure-white/80 max-w-2xl mx-auto leading-relaxed font-body">
              I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <Link href="#" className="text-pure-white hover:text-muted-gold transition-colors">
                <Linkedin className="h-10 w-10" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-pure-white hover:text-muted-gold transition-colors">
                <Github className="h-10 w-10" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-pure-white hover:text-muted-gold transition-colors">
                <Mail className="h-10 w-10" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="#" className="text-pure-white hover:text-muted-gold transition-colors">
                <Phone className="h-10 w-10" />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
            <div className="max-w-lg mx-auto">
              <form className="grid gap-6">
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-navy-blue border border-gray-700 text-pure-white placeholder:text-pure-white/60 focus:border-vibrant-violet focus:ring-1 focus:ring-vibrant-violet transition-colors font-body"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-navy-blue border border-gray-700 text-pure-white placeholder:text-pure-white/60 focus:border-vibrant-violet focus:ring-1 focus:ring-vibrant-violet transition-colors font-body"
                />
                <Textarea
                  placeholder="Message"
                  rows={5}
                  className="bg-navy-blue border border-gray-700 text-pure-white placeholder:text-pure-white/60 focus:border-vibrant-violet focus:ring-1 focus:ring-vibrant-violet transition-colors font-body"
                />
                <Button
                  type="submit"
                  className="px-8 py-4 text-lg font-bold uppercase bg-vibrant-violet text-pure-white hover:bg-vibrant-violet/90 transition-colors shadow-lg shadow-vibrant-violet/40 hover:shadow-vibrant-violet/60"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-navy-blue border-t border-gray-700 text-center">
        <p className="text-pure-white/70 text-sm font-body">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
