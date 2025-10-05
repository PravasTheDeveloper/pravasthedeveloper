"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, CheckCircle, Target, Lightbulb } from "lucide-react";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    status: string;
    year: string;
    client: string;
    problem?: string;
    solution?: string;
    result?: string;
    features?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-sm border-primary/20">
        {/* Header */}
        <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
                <Badge variant="outline" className="border-primary text-primary">
                  {project.status}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{project.year}</span>
                <span>•</span>
                <span>{project.client}</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Overview */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Project Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Case Study Sections */}
          <div className="grid gap-6">
            {/* Problem */}
            <Card className="p-6 bg-red-500/5 border-red-500/20">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-red-400">
                <Target className="h-5 w-5" />
                Problem
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem || "Client faced challenges with manual processes and needed an automated, AI-powered solution to improve efficiency and reduce operational costs."}
              </p>
            </Card>

            {/* Solution */}
            <Card className="p-6 bg-blue-500/5 border-blue-500/20">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-blue-400">
                <Lightbulb className="h-5 w-5" />
                Solution
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.solution || "Developed a comprehensive AI-powered platform with modern web technologies, implementing automated workflows and intelligent features to address the client's specific needs."}
              </p>
              
              {/* Tech Stack */}
              <div>
                <h4 className="font-medium mb-2 text-foreground">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Result */}
            <Card className="p-6 bg-green-500/5 border-green-500/20">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-green-400">
                <CheckCircle className="h-5 w-5" />
                Result
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.result || "Successfully delivered a scalable, production-ready solution that significantly improved client operations, reduced manual work by 80%, and received exceptional client satisfaction with ongoing maintenance contracts."}
              </p>
              
              {/* Key Features */}
              {project.features && (
                <div>
                  <h4 className="font-medium mb-2 text-foreground">Key Features Delivered:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <p className="text-muted-foreground mb-4">
              Interested in similar solutions for your business?
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="gap-2"
              onClick={() => {
                onClose();
                document.getElementById('contact-section')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              <ExternalLink className="h-5 w-5" />
              Let's Discuss Your Project
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
