"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProjectModal } from "@/components/ui/project-modal";
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const techStack = [
    "Next.js", "React", "Node.js", "Prisma", "PHP", "Tailwind", 
    "Flutter", "WordPress", "OpenAI API", "Firebase", "Socket.io"
  ];

  const projects = [
    // ============ QUASAR ECOSYSTEM ============
    {
      title: "SocialQuasar",
      category: "Quasar Ecosystem",
      description: "AI-powered social media content automation platform. Create, schedule, and post branded content across multiple platforms with AI memory and brand briefs.",
      tech: ["Next.js", "OpenAI", "Gemini", "Tailwind", "Socket.io"],
      status: "Live & Active",
      year: "2024 – Present",
      client: "Netherlands",
      liveUrl: "https://socialquasar.com/",
      problem: "Content creators and brands struggled to maintain consistent, high-quality social media presence across multiple platforms without spending hours on manual design and scheduling.",
      solution: "Built SocialQuasar — an AI-powered platform that auto-generates posters from brand briefs, schedules content, and posts across multiple social platforms with persistent AI memory for brand voice consistency.",
      result: "Reduced manual content creation time by 80%+ for users. Live and serving customers with tiered pricing. Currently shipping v2 with enhanced AI memory and multi-platform automation.",
      features: ["AI poster generation from brand briefs", "Multi-platform scheduling & auto-posting", "AI memory for brand voice consistency", "Credit-based pricing system", "Real-time generation via Socket.io", "Creator-focused dashboard"]
    },
    {
      title: "QuasarLeads",
      category: "Quasar Ecosystem",
      description: "AI-powered lead generation and email automation platform. Find, enrich, and nurture leads with AI-driven outreach workflows.",
      tech: ["Next.js", "Node.js", "OpenAI", "Email Automation"],
      status: "Live & Active",
      year: "2024 – Present",
      client: "Netherlands",
      liveUrl: "https://www.quasarleads.com/login",
      problem: "Sales teams needed an automated way to generate, qualify, and nurture leads at scale without manual research and repetitive email outreach.",
      solution: "Built QuasarLeads — an AI-driven lead generation platform with automated email sequences, lead enrichment, and intelligent nurturing workflows.",
      result: "Live platform powering lead generation workflows. Integrated with the broader Quasar ecosystem for end-to-end sales automation.",
      features: ["AI lead enrichment & scoring", "Automated email sequences", "Lead pipeline dashboard", "CRM integration", "Analytics & conversion tracking"]
    },
    {
      title: "QuasarAISEO",
      category: "Quasar Ecosystem",
      description: "SEO + AI search visibility platform. Turn one website into a scalable growth system with technical audits, programmatic landing pages, semantic content, schema, and AI search optimization.",
      tech: ["Next.js", "Node.js", "OpenAI", "SEO APIs"],
      status: "Live & Active",
      year: "2024 – Present",
      client: "Netherlands",
      liveUrl: "https://seo.quasarasoft.com/",
      problem: "Search is no longer just ten blue links — businesses need visibility across AI answers (ChatGPT, Perplexity, Google AI Overviews), not just traditional SEO rankings.",
      solution: "Built QuasarAISEO — a platform that turns a single website URL into a complete growth system: technical audits, programmatic landing pages, semantic content generation, schema markup, keyword intelligence, and AI search visibility optimization.",
      result: "Live platform helping growth teams win visibility across both traditional search and AI answer engines. Multi-team support with audit-to-execution workflow.",
      features: ["Technical SEO audits", "Programmatic landing page generation", "Semantic content & schema markup", "AI search visibility optimization", "Keyword intelligence", "Multi-team growth dashboard"]
    },
    {
      title: "QuasarFlow",
      category: "Quasar Ecosystem",
      description: "AI-driven project management ecosystem that bridges clients, executives, and team members using autonomous AI to optimize project parameters and ensure formal, efficient workflows.",
      tech: ["Next.js", "OpenAI", "Node.js", "Vercel"],
      status: "Live & Active",
      year: "2024 – Present",
      client: "Quasaras (Flagship)",
      liveUrl: "https://quasar-flow-ai.vercel.app/dashboard",
      problem: "Project management tools don't bridge the gap between clients, executives, and team members — each stakeholder sees a different view and workflows break down across handoffs.",
      solution: "Built QuasarFlow — a flagship AI project management ecosystem that uses autonomous AI to optimize project parameters, bridge stakeholder communication, and enforce formal, efficient workflows across clients, executives, and team members.",
      result: "Flagship product of the Quasaras ecosystem. Live and actively managing project workflows with AI-driven parameter optimization.",
      features: ["Autonomous AI project parameter optimization", "Multi-stakeholder dashboards (client/exec/team)", "Formal workflow enforcement", "AI-driven project insights", "Real-time collaboration"]
    },
    {
      title: "Quasar Agent (LinkedIn Automation)",
      category: "Quasar Ecosystem",
      description: "LinkedIn automation and analytics dashboard. Monitor and optimize LinkedIn outreach campaigns with AI-driven engagement tracking.",
      tech: ["Next.js", "Node.js", "LinkedIn API", "OpenAI"],
      status: "Live & Active",
      year: "2024 – Present",
      client: "Netherlands",
      liveUrl: "https://qllnkagent.vercel.app/",
      problem: "Sales teams needed scalable LinkedIn outreach with analytics — manual connection requests and follow-ups were unsustainable at volume.",
      solution: "Built Quasar Agent — a LinkedIn automation dashboard with campaign management, connection automation, follow-up sequences, and engagement analytics.",
      result: "Live platform powering LinkedIn outreach campaigns. Integrated with QuasarLeads for end-to-end sales pipeline automation.",
      features: ["LinkedIn connection automation", "Follow-up sequence management", "Campaign analytics dashboard", "Engagement tracking", "Integration with QuasarLeads pipeline"]
    },

    // ============ AI SAAS PRODUCTS ============
    {
      title: "LexClaro — AI Legal Assistant",
      category: "AI SaaS Products",
      description: "AI legal assistant that simplifies legal documents in seconds. Two portals: client-facing app and lawyer-facing law portal.",
      tech: ["Next.js", "OpenAI", "Node.js", "Authentication"],
      status: "Live & Active",
      year: "2024 – Present",
      client: "Legal Tech",
      liveUrl: "https://app.lexclaro.com/en/login",
      problem: "Legal documents are dense, slow to review, and expensive to interpret — clients and lawyers both need a faster way to simplify and analyze legal text.",
      solution: "Built LexClaro — an AI legal assistant with two portals: a client app (app.lexclaro.com) for document simplification and a lawyer portal (law.lexclaro.com) for legal professionals. Uses OpenAI to parse, simplify, and explain legal documents in seconds.",
      result: "Live dual-portal SaaS serving both clients and legal professionals. Active user base with document processing at scale.",
      features: ["AI document simplification", "Dual portals (client + lawyer)", "Legal document analysis", "Secure authentication", "Document history & management"]
    },
    {
      title: "Vocale — AI Voice Agent Platform",
      category: "AI SaaS Products",
      description: "AI voice agent platform. Connect with clients using AI-powered voice agents that handle calls, bookings, and customer interactions.",
      tech: ["Next.js", "AI Voice", "Node.js", "Cloud Deployment"],
      status: "Live & Active",
      year: "2025",
      client: "Italy (Bax SRL)",
      liveUrl: "https://vocale.baxsrl.cloud/user/login",
      problem: "Businesses needed scalable voice-based customer interaction — human call handling was expensive and impossible to scale for bookings and client outreach.",
      solution: "Built Vocale — an AI voice agent platform with a dashboard for managing AI-powered voice agents that handle client calls, bookings, and interactions autonomously.",
      result: "Live platform deployed for Bax SRL (Italy). AI voice agents handling real customer interactions at scale.",
      features: ["AI voice agent management", "Call handling & booking automation", "Customer interaction dashboard", "Cloud-deployed voice infrastructure", "Analytics & call tracking"]
    },

    // ============ CLIENT AI PROJECTS ============
    {
      title: "UK Driving Quiz Plugin",
      category: "Client AI Projects",
      description: "AI WordPress plugin with OpenAI Assistant API for intelligent driving quizzes. Delivered for UK client with exceptional satisfaction.",
      tech: ["WordPress", "PHP", "OpenAI API"],
      status: "Completed",
      year: "2022",
      client: "UK",
      problem: "UK driving instructors needed an intelligent quiz system that could adapt to different learning levels and provide personalized feedback to students preparing for their driving theory tests.",
      solution: "Developed a WordPress plugin integrated with OpenAI Assistant API that generates contextual driving questions, provides intelligent explanations, and adapts difficulty based on student performance.",
      result: "Delivered a successful plugin that improved student pass rates by 40% and received exceptional client satisfaction with a $500 tip bonus. The plugin is actively used by multiple driving schools across the UK.",
      features: ["AI-powered question generation", "Adaptive difficulty system", "Detailed explanations for wrong answers", "Progress tracking dashboard", "Multi-language support"]
    },
    {
      title: "AI Content Maker",
      category: "Client AI Projects",
      description: "AI content generation platform creating structured PDFs (thesis, books, blogs) with advanced formatting. Active product with ongoing version development.",
      tech: ["Next.js", "Node.js", "OpenAI", "PDFKit"],
      status: "Active & Maintenance",
      year: "2023 – Present",
      client: "USA",
      problem: "Content teams needed to generate thousands of structured documents (thesis, books, blogs) in PDF format without manual writing and formatting.",
      solution: "Built AI Content Maker — a platform using OpenAI to auto-generate structured PDFs with advanced formatting, supporting thesis, books, and blog content types.",
      result: "Generated 10,000+ structured documents. Reduced manual content ops by 70%. Active product with ongoing version development and feature enhancements.",
      features: ["AI content generation (thesis/books/blogs)", "Structured PDF formatting engine", "Multiple content type templates", "Batch generation", "Version-controlled output"]
    },
    {
      title: "ASYCD — AI Image Generation Platform",
      category: "Client AI Projects",
      description: "Multi-model AI image generation platform supporting DALL-E, Gemini, Midjourney, and Stable Diffusion. Includes user auth, credit system, image history, and prompt engineering tools.",
      tech: ["Next.js", "OpenAI API", "Gemini AI", "Stable Diffusion", "Firebase", "Stripe"],
      status: "Completed",
      year: "2023",
      client: "International",
      problem: "Users needed a single platform to access multiple AI image generation models without managing separate subscriptions and interfaces for each.",
      solution: "Built ASYCD — a multi-model AI image generation platform aggregating DALL-E, Gemini, Midjourney, and Stable Diffusion behind a unified interface with credit-based access.",
      result: "Delivered a unified multi-model image generation SaaS with Stripe payments, credit system, and image history. Completed for international client.",
      features: ["Multi-model support (DALL-E/Gemini/Midjourney/Stable Diffusion)", "Credit-based access system", "User authentication", "Image history & gallery", "Advanced prompt engineering tools", "Stripe payment integration"]
    },
    {
      title: "Image AI Pro (Generative Fill)",
      category: "Client AI Projects",
      description: "SaaS platform for AI image manipulation and aspect ratio conversion. Intelligent generative fill transforms 1:1 images to 16:9 seamlessly with multiple AI image tools.",
      tech: ["Next.js", "AI Image Processing", "Generative AI", "SaaS Architecture", "Image APIs", "Tailwind"],
      status: "Completed",
      year: "2023",
      client: "SaaS Product",
      problem: "Content teams needed to convert square images (1:1) to widescreen (16:9) without cropping or stretching — traditional tools couldn't intelligently fill the missing space.",
      solution: "Built Image AI Pro — a SaaS platform using generative fill AI to seamlessly transform 1:1 images to 16:9 by intelligently generating the missing visual content.",
      result: "Delivered a full-featured SaaS with multiple AI image tools. Production-ready with active image processing capabilities.",
      features: ["Generative fill (1:1 to 16:9)", "Multi-tool image processing", "AI-powered enhancement", "SaaS architecture with user management", "Batch processing"]
    },
    {
      title: "QuasarSEO Plugin",
      category: "Client AI Projects",
      description: "Automated WordPress plugin generating 10,000+ SEO-optimized posts using AI, location data, and service keywords with cron automation. v1 through v4 released, under active maintenance.",
      tech: ["WordPress", "OpenAI", "CronJobs", "PHP"],
      status: "Active & Maintenance",
      year: "2023 – Present",
      client: "Netherlands",
      problem: "Netherlands-based client needed to generate location-specific, SEO-optimized content at massive scale (10,000+ posts) without manual writing.",
      solution: "Built a WordPress plugin using OpenAI + cron automation to auto-generate SEO-optimized posts combining AI content, location data, and service keywords. Shipped v1 through v4 with continuous feature updates.",
      result: "Generated 10,000+ SEO-optimized posts automatically. Active maintenance with 4 version releases. Ongoing feature development for Netherlands client.",
      features: ["AI + location data + keyword fusion", "Cron-based automated generation", "10,000+ posts generated", "4 version releases (v1–v4)", "SEO-optimized output structure"]
    },
    {
      title: "AI Health Check Platform",
      category: "Client AI Projects",
      description: "SaaS health system analyzing medical reports with AI recommendations, QR management for doctors, and white-labeled subdomains for clinics.",
      tech: ["Next.js", "Firebase", "OpenAI", "QR API"],
      status: "Active & Maintenance",
      year: "2024 – Present",
      client: "International",
      problem: "Clinics needed a scalable way to analyze health reports with AI-driven recommendations, manage patients via QR codes, and brand the platform per clinic.",
      solution: "Built an AI health check SaaS with report analysis, AI recommendations, QR-based doctor-patient management, and white-labeled subdomains for each clinic.",
      result: "Live SaaS serving multiple clinics with white-labeled subdomains. Active maintenance with AI report analysis in production.",
      features: ["AI health report analysis", "AI-driven recommendations", "QR management for doctors", "White-labeled subdomains per clinic", "Patient management dashboard"]
    },
    {
      title: "AI Chat Assistant (HuggingFace)",
      category: "Client AI Projects",
      description: "Conversational AI platform built with HuggingFace UI and Digital Ocean backend. Integrates transformer models for intelligent chat with custom UI and scalable cloud deployment.",
      tech: ["HuggingFace", "Digital Ocean", "Transformers", "React", "Node.js", "AI Models"],
      status: "Completed",
      year: "2024",
      client: "Freelance Platform",
      problem: "Client needed a custom conversational AI platform with transformer models, but off-the-shelf chatbot tools didn't allow the UI customization and backend control required.",
      solution: "Built a conversational AI platform using HuggingFace for the frontend UI and Digital Ocean for scalable backend infrastructure, integrating transformer models for intelligent responses with custom UI modifications.",
      result: "Delivered a scalable, custom-branded chat assistant with transformer model integration and cloud deployment. Completed for freelance platform client.",
      features: ["Transformer model integration", "Custom HuggingFace UI", "Scalable Digital Ocean backend", "Custom UI modifications", "Real-time chat responses"]
    },
    {
      title: "ScrubHUB App",
      category: "Client AI Projects",
      description: "Mobile app using AI image detection to estimate cleaning prices and book hotel/restaurant cleaners automatically.",
      tech: ["Flutter", "Firebase", "TensorFlow"],
      status: "In Development",
      year: "2025",
      client: "USA",
      problem: "Hotel and restaurant managers needed a way to get instant cleaning price estimates without manual inspections — sending someone to assess each job was slow and costly.",
      solution: "Built ScrubHUB — a Flutter mobile app using TensorFlow image detection to analyze photos of spaces and estimate cleaning prices, with booking flow for cleaners.",
      result: "In active development for USA client. AI image detection model trained and integrated with Flutter booking flow.",
      features: ["AI image detection for price estimation", "Flutter mobile app", "Automated cleaner booking", "Firebase backend", "TensorFlow model integration"]
    },

    // ============ OTHER PROJECTS ============
    {
      title: "GIGAPIXEL — E-commerce Platform",
      category: "Other Projects",
      description: "Full-stack e-commerce platform with admin panel, inventory system, payment processing, and complete store management.",
      tech: ["Full-Stack", "Next.js", "Node.js", "Payment Gateway", "Inventory Management"],
      status: "Completed",
      year: "2023",
      client: "Collaborative Project",
      problem: "Business needed a comprehensive online store with admin management, inventory tracking, and payment processing — not just a storefront.",
      solution: "Built a full-stack e-commerce platform with admin panel, inventory management system, payment gateway integration, and complete store management capabilities.",
      result: "Delivered a production-ready e-commerce platform with end-to-end store management. Collaborative project with full frontend and backend.",
      features: ["Admin panel & store management", "Inventory system", "Payment gateway integration", "Complete frontend UX", "Order management"]
    },
    {
      title: "HotBox — Encrypted Social Platform",
      category: "Other Projects",
      description: "Real-time encrypted social platform for sellers and retailers with double encryption for maximum security.",
      tech: ["Socket.io", "Node.js", "MongoDB", "Next.js"],
      status: "Active & Maintenance",
      year: "2024 – Present",
      client: "International",
      problem: "Sellers and retailers needed a secure, real-time communication platform with encryption strong enough for sensitive business transactions.",
      solution: "Built HotBox — a real-time social platform with double encryption layer for maximum security, using Socket.io for live messaging between sellers and retailers.",
      result: "Live platform with active maintenance. Double-encryption security model in production for sensitive business communications.",
      features: ["Real-time messaging (Socket.io)", "Double encryption security", "Seller & retailer profiles", "MongoDB data layer", "Next.js frontend"]
    },
    {
      title: "Kids Smart Learning App",
      category: "Other Projects",
      description: "Interactive mobile app for kids featuring books, toys, games, and routine management.",
      tech: ["Flutter", "Firebase"],
      status: "Under Review",
      year: "2025",
      client: "International",
      problem: "Parents needed a single app to manage kids' learning content (books, games, toys) and daily routines in one place.",
      solution: "Built a Flutter mobile app combining kids' books, toys, games, and routine management with a Firebase backend.",
      result: "Under review for international client. Flutter app with Firebase integration ready for launch.",
      features: ["Books & reading content", "Educational games", "Toy management", "Daily routine tracking", "Firebase backend"]
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
              <span className="text-sm font-medium">AI Product Engineer · Open to Remote</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I build AI SaaS ecosystems that{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ship and scale
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm <span className="text-foreground font-semibold">Pravas Chandra Sarkar</span>,
              an AI Product Engineer who has built and shipped a full SaaS suite — lead gen, SEO,
              social automation, voice agents, legal AI, and project management.
              <br />
              <span className="block mt-2">
                20+ production apps delivered for clients across the UK, USA, and Netherlands.
              </span>
            </p>

            {/* Proof Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto pt-4">
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20">
                <div className="text-2xl md:text-3xl font-bold text-primary">20+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Production Apps Shipped</div>
              </Card>
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-accent/20">
                <div className="text-2xl md:text-3xl font-bold text-accent">3</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Countries Served (UK/USA/NL)</div>
              </Card>
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20">
                <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">AI Posts Auto-Generated</div>
              </Card>
            </div>

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
                View Case Studies
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
                Book a Call
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
              AI Product <span className="text-primary">Engineer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I build production AI systems, not demos. I've designed and shipped a full SaaS
                ecosystem — <span className="text-primary font-semibold">SocialQuasar, QuasarLeads, QuasarAISEO, QuasarFlow, Quasar Agent</span>,
                plus standalone products like <span className="text-primary font-semibold">LexClaro</span> (AI legal) and <span className="text-primary font-semibold">Vocale</span> (AI voice agents).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over 3+ years at <span className="text-primary font-semibold">CodeMyPixel</span>, I've delivered 20+ production
                applications for clients across the UK, USA, and Netherlands — specializing in Next.js,
                OpenAI integrations, automation workflows, and SaaS architecture. I focus on business
                outcomes: faster operations, scalable systems, and reliable delivery.
              </p>

              <div className="flex gap-4 pt-4">
                <Card className="p-4 flex-1 bg-card/50 backdrop-blur-sm border-primary/20">
                  <Database className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">20+ Apps Shipped</h3>
                  <p className="text-sm text-muted-foreground">Production & Live</p>
                </Card>
                <Card className="p-4 flex-1 bg-card/50 backdrop-blur-sm border-accent/20">
                  <Globe className="h-8 w-8 text-accent mb-2" />
                  <h3 className="font-semibold mb-1">3 Countries</h3>
                  <p className="text-sm text-muted-foreground">UK, USA, Netherlands</p>
                </Card>
                <Card className="p-4 flex-1 bg-card/50 backdrop-blur-sm border-primary/20">
                  <Brain className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">Full SaaS Suite</h3>
                  <p className="text-sm text-muted-foreground">5 Quasar Products</p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Problems I Solve
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-card/30 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">AI SaaS Ecosystems at Scale</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Problem:</strong> Companies need multiple AI products that work together — not isolated tools.
                    <br />
                    <strong>Solution:</strong> Built the Quasar ecosystem (5 products) covering social, leads, SEO, project management, and LinkedIn automation — all interconnected.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-card/30 border border-accent/20">
                  <h4 className="font-semibold text-accent mb-2">Content Generation at Scale</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Problem:</strong> Clients needed thousands of SEO-optimized posts and structured documents without manual writing.
                    <br />
                    <strong>Solution:</strong> Built AI platforms using OpenAI that auto-generate 10,000+ posts and structured PDFs, reducing manual content ops by 70%+.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-card/30 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Industry-Specific AI</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Problem:</strong> Legal, healthcare, and hospitality businesses needed AI tailored to their workflows — not generic chatbots.
                    <br />
                    <strong>Solution:</strong> Built LexClaro (AI legal), AI Health Check (medical reports), ScrubHUB (cleaning price estimation), and Vocale (AI voice agents) — each domain-specific.
                  </p>
                </div>
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
              Case <span className="text-primary">Studies</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              20+ production apps shipped — from a full SaaS ecosystem to domain-specific AI products.
              Click any project for the full case study.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--glow-primary)] group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.liveUrl && (
                        <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-400 border-green-500/20">
                          Live
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span className="text-primary/70 font-medium">{project.category}</span>
                      <span>•</span>
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

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-primary group-hover:text-primary/80 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                  <span>View Case Study</span>
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
                  <h3 className="text-xl font-bold">Head of Operations & Lead Engineer, CodeMyPixel</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Dec 2022 – Present · Dhaka, Bangladesh (Remote-friendly)</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Leading AI product development and client delivery at CodeMyPixel. Designed and shipped
                  the Quasar ecosystem (5 interconnected SaaS products), plus standalone AI products
                  including LexClaro (AI legal), Vocale (AI voice agents), and AI Health Check.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">▸</span> Built and shipped 20+ production applications for clients in UK, USA, and Netherlands.</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">▸</span> Designed the Quasar SaaS ecosystem: SocialQuasar, QuasarLeads, QuasarAISEO, QuasarFlow, Quasar Agent.</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">▸</span> Built AI content platforms generating 10,000+ posts, reducing manual content ops by 70%+.</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">▸</span> Integrated OpenAI, Gemini, HuggingFace, and multiple AI APIs into production SaaS systems.</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">▸</span> Maintained ongoing client contracts with continuous feature development across 4+ product versions.</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-accent" />
              <div className="pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="h-5 w-5 text-accent" />
                  <h3 className="text-xl font-bold">Freelance AI & Full-Stack Developer</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">2020 – 2022 · International Clients</p>
                <p className="text-muted-foreground leading-relaxed">
                  Worked with multiple international clients to build custom web, mobile, and AI applications.
                  Delivered WordPress plugins, full-stack e-commerce platforms, and early AI integrations.
                  Developed expertise in client communication, requirement gathering, and end-to-end delivery.
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
              Open to Remote
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="text-primary">Work Together</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              I'm open to remote AI Engineer, Full-Stack Engineer, and Automation Engineer roles.
              I can own features end-to-end and ship fast. Let's talk.
            </p>
          </div>

          {/* Availability Info */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20 text-center">
              <Globe className="h-6 w-6 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Timezone</h3>
              <p className="text-xs text-muted-foreground mt-1">GMT+6 (Dhaka) — overlaps UK mornings & US evenings</p>
            </Card>
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-accent/20 text-center">
              <Briefcase className="h-6 w-6 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Availability</h3>
              <p className="text-xs text-muted-foreground mt-1">Full-time, 40 hrs/week · Remote only</p>
            </Card>
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20 text-center">
              <Mail className="h-6 w-6 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Direct Email</h3>
              <p className="text-xs text-muted-foreground mt-1">info.pravas.chsa@gmail.com</p>
            </Card>
          </div>

          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Hiring Manager / Founder Name"
                    className="bg-background"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Company Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="hr@yourcompany.com"
                    className="bg-background"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Role & Company Details</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about the role, tech stack, and what you need built. I can ship a scoped feature in week 1."
                  className="bg-background min-h-[150px]"
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm">✅ Message sent successfully! I'll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">❌ Failed to send message. Please email me directly at info.pravas.chsa@gmail.com</p>
                </div>
              )}

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                <Mail className="h-5 w-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
          <p>© 2026 Pravas Chandra Sarkar — AI Product Engineer · Built with Next.js 💜</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
