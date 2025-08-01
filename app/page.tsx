"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Github, Linkedin, ExternalLink, Code, Database, Globe } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce web application with user authentication, payment integration, and admin dashboard. Features include product catalog, shopping cart, order management, and real-time inventory tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
    status: "Completed",
    link: "#"
  },
  {
    title: "Task Management System",
    description: "A collaborative project management tool with real-time updates, team collaboration features, and progress tracking. Includes Kanban boards, task assignments, and deadline notifications.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "WebSocket", "Tailwind CSS"],
    status: "Completed",
    link: "#"
  },
  {
    title: "Weather Forecast App",
    description: "A responsive weather application providing current conditions and 7-day forecasts. Features location-based weather data, interactive maps, and severe weather alerts.",
    technologies: ["React Native", "OpenWeather API", "Redux", "TypeScript", "Maps API"],
    status: "Completed",
    link: "#"
  },
  {
    title: "University Course Manager",
    description: "A comprehensive system for managing university courses, student enrollments, and academic schedules. Includes grade tracking, attendance monitoring, and automated report generation.",
    technologies: ["Java", "Spring Boot", "MySQL", "Angular", "Docker"],
    status: "In Progress",
    link: "#"
  }
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular"] },
  { category: "Backend", items: ["Node.js", "Java", "Spring Boot", "Express", "Python"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
  { category: "Tools & Others", items: ["Git", "Docker", "AWS", "Firebase", "REST APIs"] }
];

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900">Hoàng Phúc</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white text-4xl font-bold">
                HP
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hoàng Phúc
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              IT Student - Software Engineering
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Da Lat University • Passionate about creating innovative software solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm a dedicated Information Technology student at Da Lat University, specializing in Software Engineering. 
              My passion lies in developing innovative software solutions and staying current with emerging technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Currently pursuing my Bachelor's degree in Software Engineering at Da Lat University, 
                  I have developed a strong foundation in computer science principles and software development practices.
                </p>
                <p>
                  My academic journey has equipped me with comprehensive knowledge in programming languages, 
                  database management, web development, and software architecture. I'm particularly interested 
                  in full-stack development and emerging technologies like cloud computing and AI.
                </p>
                <p>
                  Through various projects and coursework, I've gained hands-on experience in building 
                  scalable applications, working with teams, and solving complex technical challenges.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                      {skillGroup.category === 'Frontend' && <Globe className="w-4 h-4 mr-2" />}
                      {skillGroup.category === 'Backend' && <Code className="w-4 h-4 mr-2" />}
                      {skillGroup.category === 'Database' && <Database className="w-4 h-4 mr-2" />}
                      {skillGroup.category === 'Tools & Others' && <ExternalLink className="w-4 h-4 mr-2" />}
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here are some of the projects I've worked on during my studies and personal time. 
              Each project represents a step in my learning journey and showcases different technical skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
              Feel free to reach out!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">hoangphuc.student@dlu.edu.vn</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Location</h3>
                      <p className="text-gray-600">Da Lat, Lam Dong, Vietnam</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Connect with me</h3>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Hoàng Phúc. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}