"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Code2, 
  Sparkles, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin,
  ExternalLink,
  Database,
  Brain,
  Zap,
  Globe
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const techStack = [
    "Next.js", "React", "Node.js", "Prisma", "PHP", "Tailwind", 
    "Flutter", "WordPress", "OpenAI API", "Firebase", "Socket.io"
  ];

  const projects = [
    {
      title: "UK Driving Quiz Plugin",
      description: "AI WordPress plugin with OpenAI Assistant API for intelligent driving quizzes. Delivered for UK client with exceptional satisfaction.",
      tech: ["WordPress", "PHP", "OpenAI API"],
      status: "Completed",
      year: "2022",
      client: "UK"
    },
    {
      title: "AI Content Maker",
      description: "AI-powered content generation platform creating structured PDFs (thesis, books, blogs) with advanced formatting.",
      tech: ["Next.js", "Node.js", "OpenAI", "PDFKit"],
      status: "Completed",
      year: "2023",
      client: "USA"
    },
    {
      title: "QuasarSEO Plugin",
      description: "Automated WordPress plugin generating 10,000+ SEO-optimized posts using AI, location data, and service keywords with cron automation.",
      tech: ["WordPress", "OpenAI", "CronJobs", "PHP"],
      status: "Active",
      year: "2024",
      client: "Netherlands"
    },
    {
      title: "SocialQuasar AI",
      description: "Complete AI platform for auto-generating posters, scheduling content, and posting across multiple social platforms with AI memory.",
      tech: ["Next.js", "Tailwind", "OpenAI", "Gemini", "Socket.io"],
      status: "Live Platform",
      year: "2024",
      client: "Netherlands"
    },
    {
      title: "AI Health Check Platform",
      description: "SaaS health system analyzing reports with AI recommendations, QR management for doctors, and white-labeled subdomains.",
      tech: ["Next.js", "Firebase", "OpenAI", "QR API"],
      status: "Production",
      year: "2024",
      client: "International"
    },
    {
      title: "HotBox Social Platform",
      description: "Real-time encrypted social platform for sellers and retailers with double encryption for maximum security.",
      tech: ["Socket.io", "Node.js", "MongoDB", "Next.js"],
      status: "Live",
      year: "2024",
      client: "International"
    },
    {
      title: "ScrubHUB App",
      description: "Mobile app using AI image detection to estimate cleaning prices and book hotel/restaurant cleaners.",
      tech: ["Flutter", "Firebase", "TensorFlow"],
      status: "In Development",
      year: "2025",
      client: "USA"
    },
    {
      title: "Kids Smart Learning App",
      description: "Interactive app for kids featuring books, toys, games, and routine management.",
      tech: ["Flutter", "Firebase"],
      status: "Under Review",
      year: "2025",
      client: "International"
    },
    {
      title: "ASYCD - AI Image Generation Platform",
      description: "Multi-model AI image generation platform allowing users to create stunning visuals using various AI models including OpenAI DALL-E, Google Gemini, Midjourney, and Stable Diffusion. Features user authentication, credit system, image history, and advanced prompt engineering tools.",
      tech: ["Next.js", "OpenAI API", "Gemini AI", "Stable Diffusion", "Firebase", "Stripe"],
      status: "Completed",
      year: "2024",
      client: "International"
    },
    {
      title: "AI Chat Assistant with HuggingFace",
      description: "Advanced conversational AI platform built with HuggingFace UI for seamless frontend experience and Digital Ocean backend infrastructure. Integrates transformer models for intelligent chat responses with custom UI modifications and scalable cloud deployment.",
      tech: ["HuggingFace", "Digital Ocean", "Transformers", "React", "Node.js", "AI Models"],
      status: "In Progress",
      year: "2024",
      client: "Freelance Platform"
    },
    {
      title: "Image AI Pro (Generative Fill)",
      description: "Comprehensive SaaS platform for AI-powered image manipulation and aspect ratio conversion. Features intelligent generative fill technology to transform square images (1:1) to widescreen format (16:9) seamlessly. Full-featured web application with multiple AI tools for image processing and enhancement.",
      tech: ["Next.js", "AI Image Processing", "Generative AI", "SaaS Architecture", "Image APIs", "Tailwind"],
      status: "Completed",
      year: "2025",
      client: "SaaS Product"
    },
    {
      title: "GIGAPIXEL - E-commerce Platform",
      description: "Full-stack e-commerce website developed in collaboration with freelancer brother. Comprehensive online store with complete frontend user experience and robust backend infrastructure including store management, admin panel, inventory system, and payment processing.",
      tech: ["Full-Stack Development", "E-commerce", "Admin Panel", "Payment Gateway", "Inventory Management", "Database"],
      status: "Live",
      year: "2024",
      client: "Collaborative Project"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Flutter"] },
    { category: "Backend", items: ["Node.js", "PHP", "Prisma", "Firebase"] },
    { category: "AI & ML", items: ["OpenAI API", "Gemini AI", "LangChain", "TensorFlow"] },
    { category: "CMS", items: ["WordPress", "Plugin Development", "Custom Themes"] },
    { category: "Real-time", items: ["Socket.io", "WebSockets", "CronJobs"] },
    { category: "DevOps", items: ["Docker", "Vercel", "Firebase Hosting"] }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg-animated"
        style={{
          backgroundImage: `url(/hero-bg.jpg), url(/hero-bg.jpg)`,
          backgroundPosition: '0% 50%, 100% 50%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI Web Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building Intelligent Web Experiences with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI + Next.js
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm <span className="text-foreground font-semibold">Pravas Chandra Sarkar</span>, 
              an AI Web Developer who crafts advanced SaaS, plugins, and apps using Next.js, OpenAI, and WordPress.
              <br />
              <span className="block mt-2">
                Worked with clients from the USA, UK, and Netherlands.
              </span>
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="gap-2"
                onClick={() => {
                  document.getElementById('projects-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <Code2 className="h-5 w-5" />
                View Projects
              </Button>
              <Button 
                variant="neon" 
                size="lg" 
                className="gap-2"
                onClick={() => {
                  document.getElementById('contact-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <Mail className="h-5 w-5" />
                Hire Me
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center pt-8">
              <a href="https://github.com/PravasTheDeveloper" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/pravaschandrasarkar/" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:info.pravas.chsa@gmail.com"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              AI-Powered <span className="text-primary">Development</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an AI-powered web developer passionate about building automation-driven SaaS 
                and intelligent web systems. I've led projects at <span className="text-primary font-semibold">CodeMyPixel</span>, 
                delivering full-stack AI applications for clients across the UK, USA, and Netherlands.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in Next.js, OpenAI integrations, and WordPress development, I create 
                solutions that combine cutting-edge AI with robust engineering practices.
              </p>
              
              <div className="flex gap-4 pt-4">
                <Card className="p-4 flex-1 bg-card/50 backdrop-blur-sm border-primary/20">
                  <Database className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">8+ Projects</h3>
                  <p className="text-sm text-muted-foreground">Delivered Worldwide</p>
                </Card>
                <Card className="p-4 flex-1 bg-card/50 backdrop-blur-sm border-accent/20">
                  <Globe className="h-8 w-8 text-accent mb-2" />
                  <h3 className="font-semibold mb-1">3 Countries</h3>
                  <p className="text-sm text-muted-foreground">UK, USA, Netherlands</p>
                </Card>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-20 px-4 bg-secondary/20">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-primary">Projects</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--glow-primary)] group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 text-sm text-muted-foreground">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.client}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary text-primary">
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              Experience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional <span className="text-primary">Journey</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary" />
              <div className="pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Founder, CodeMyPixel</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">2022 – Present</p>
                <p className="text-muted-foreground leading-relaxed">
                  Built AI-based SaaS platforms and WordPress plugins for clients from UK, USA, and Netherlands. 
                  Specialized in OpenAI integrations, automation systems, and Next.js development. 
                  Led development of 8+ production applications with proven client satisfaction and repeat business.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-accent" />
              <div className="pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="h-5 w-5 text-accent" />
                  <h3 className="text-xl font-bold">Freelance Developer</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">2020 – 2022</p>
                <p className="text-muted-foreground leading-relaxed">
                  Worked with multiple international clients to build custom web and mobile applications. 
                  Developed expertise in full-stack development, AI integrations, and client communication.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              Skills
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="text-primary">Expertise</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              Employment
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to <span className="text-primary">Hire Me</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Looking for a dedicated AI Web Developer to join your team? Let's discuss how I can contribute to your company's success as a full-time employee.
            </p>
          </div>
          
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Name</label>
                  <Input placeholder="Hiring Manager / HR Name" className="bg-background" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Company Email</label>
                  <Input type="email" placeholder="hr@yourcompany.com" className="bg-background" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Job Details & Company Info</label>
                <Textarea 
                  placeholder="Tell me about the position, company culture, tech stack, and what you're looking for in an AI Web Developer..." 
                  className="bg-background min-h-[150px]" 
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full gap-2">
                <Mail className="h-5 w-5" />
                Let's Discuss Employment
              </Button>
            </form>
          </Card>
          
          <div className="flex justify-center gap-6 mt-12">
            <a 
              href="https://github.com/PravasTheDeveloper" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/pravaschandrasarkar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:info.pravas.chsa@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="container text-center text-muted-foreground">
          <p>© 2025 Pravas Chandra Sarkar – Built with React and Love 💜</p>
        </div>
      </footer>
    </div>
  );
}
