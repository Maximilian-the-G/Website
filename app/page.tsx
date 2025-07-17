import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { BotIcon as Robot, Brain, Factory, Wrench, Code, HardHat, Linkedin, Github } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-pure-black text-pure-white">
      {/* Navigation Bar */}
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
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-vibrant-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium text-pure-white hover:text-vibrant-violet transition-colors relative group"
            >
              About
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-vibrant-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium text-pure-white hover:text-vibrant-violet transition-colors relative group"
            >
              Projects
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-vibrant-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium text-pure-white hover:text-vibrant-violet transition-colors relative group"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-vibrant-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-pure-white drop-shadow-lg">
              JOHN DOE
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-pure-white/90">
              Field-Ready Robotics for Real-World Challenges
            </h2>
            <p className="text-lg md:text-xl text-pure-white/80 max-w-2xl mx-auto leading-relaxed">
              A robotics engineering student from TU Freiberg, specializing in creating robust and intelligent systems
              that bridge the gap between human and machine. From bionics and prosthetics to aerospace applications.
            </p>
            <Button
              asChild
              className="mt-8 px-8 py-4 text-lg font-bold uppercase bg-vibrant-violet text-pure-white hover:bg-vibrant-violet/90 transition-colors shadow-lg shadow-vibrant-violet/40"
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
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-pure-white border-b-2 border-muted-gold pb-4">
                About Me
              </h2>
              <p className="text-lg text-pure-white/80 leading-relaxed">
                As a dedicated robotics engineering student from TU Freiberg, I am passionate about developing robust
                and intelligent systems that excel in real-world environments. My academic foundation is complemented by
                hands-on experience gained through volunteer work with THW (German Federal Agency for Technical Relief)
                and DRK (German Red Cross), where I honed my problem-solving skills and ability to perform under
                pressure. This unique blend of technical expertise and practical, field-ready experience allows me to
                approach complex challenges with a reliable and innovative mindset, bridging the gap between theoretical
                knowledge and practical application.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-pure-white">Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Robot className="h-10 w-10 text-muted-gold" />
                    <span className="text-pure-white text-lg font-medium">Robotics</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Brain className="h-10 w-10 text-muted-gold" />
                    <span className="text-pure-white text-lg font-medium">Bionics</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Factory className="h-10 w-10 text-muted-gold" />
                    <span className="text-pure-white text-lg font-medium">Additive Manufacturing</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Wrench className="h-10 w-10 text-pure-white" />
                    <span className="text-pure-white text-lg font-medium">CAD</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Code className="h-10 w-10 text-pure-white" />
                    <span className="text-pure-white text-lg font-medium">Python</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <HardHat className="h-10 w-10 text-pure-white" />
                    <span className="text-pure-white text-lg font-medium">Field Operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-navy-blue">
          <div className="container px-4 md:px-6 space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-pure-white text-center border-b-2 border-muted-gold pb-4">
              Projects
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-navy-blue border border-gray-700 hover:border-vibrant-violet hover:shadow-lg hover:shadow-vibrant-violet/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Project 1"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <h3 className="text-2xl font-bold text-pure-white">Autonomous Rover</h3>
                  <p className="text-pure-white/70 text-sm">
                    Developed a fully autonomous rover for environmental monitoring in challenging terrains.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full">
                      Robotics
                    </span>
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full">AI</span>
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full">
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
                    alt="Project 2"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <h3 className="text-2xl font-bold text-pure-white">Bionic Prosthetic Arm</h3>
                  <p className="text-pure-white/70 text-sm">
                    Designed and prototyped a highly dexterous bionic arm with haptic feedback.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full">
                      Bionics
                    </span>
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full">
                      3D Printing
                    </span>
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full">CAD</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-navy-blue border border-gray-700 hover:border-vibrant-violet hover:shadow-lg hover:shadow-vibrant-violet/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Project 3"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <h3 className="text-2xl font-bold text-pure-white">Aerospace Drone System</h3>
                  <p className="text-pure-white/70 text-sm">
                    Developed a robust drone system for high-altitude atmospheric data collection.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full">
                      Aerospace
                    </span>
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full">
                      Embedded Systems
                    </span>
                    <span className="px-3 py-1 bg-vibrant-violet/20 text-vibrant-violet text-xs rounded-full">C++</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-pure-black">
          <div className="container px-4 md:px-6 space-y-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-pure-white border-b-2 border-muted-gold pb-4 inline-block">
              Get In Touch
            </h2>
            <p className="text-lg text-pure-white/80 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                href="#"
                className="text-pure-white hover:text-muted-gold transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-10 w-10" />
              </Link>
              <Link
                href="#"
                className="text-pure-white hover:text-muted-gold transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-10 w-10" />
              </Link>
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
                  className="px-8 py-4 text-lg font-bold uppercase bg-vibrant-violet text-pure-white hover:bg-vibrant-violet/90 transition-colors shadow-lg shadow-vibrant-violet/40"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-navy-blue text-pure-white text-center text-sm border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
