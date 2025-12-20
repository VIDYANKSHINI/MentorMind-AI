"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, Eye, Video, BarChart3, Users, Award, CheckCircle2, Sparkles } from "lucide-react"

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "AI-Based Teaching Evaluation",
      description:
        "Advanced AI algorithms analyze teaching sessions across multiple parameters for comprehensive evaluation.",
      icon: Brain,
    },
    {
      title: "Multimodal Analysis",
      description:
        "Evaluate engagement, communication, technical depth, clarity, and interaction patterns automatically.",
      icon: Video,
    },
    {
      title: "Fair & Objective Scoring",
      description:
        "Eliminate bias with data-driven evaluations that provide consistent, objective feedback to mentors.",
      icon: CheckCircle2,
    },
  ]

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col">
      {/* Navigation */}
      <nav className="w-full border-b border-[rgba(55,50,47,0.06)] bg-[#F7F5F3]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-[#37322F]" />
                <span className="text-[#2F3037] text-xl font-semibold font-sans">MentorMind AI</span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <Link href="#features" className="text-[rgba(49,45,43,0.80)] text-sm font-medium hover:text-[#37322F]">
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-[rgba(49,45,43,0.80)] text-sm font-medium hover:text-[#37322F]"
                >
                  How It Works
                </Link>
                <Link
                  href="#accessibility"
                  className="text-[rgba(49,45,43,0.80)] text-sm font-medium hover:text-[#37322F]"
                >
                  Accessibility
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/dashboard">
                <Button variant="ghost" className="text-[#37322F] hover:bg-white">
                  Log in
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="bg-[#37322F] hover:bg-[#37322F]/90 text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1060px] mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[rgba(2,6,23,0.08)]">
              <Sparkles className="w-4 h-4 text-[#37322F]" />
              <span className="text-sm font-medium text-[#37322F]">AI-Powered Teaching Evaluation</span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[800px] text-[#37322F] text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight font-serif">
              Elevate Teaching Excellence with AI
            </h1>

            {/* Subheading */}
            <p className="max-w-[600px] text-[rgba(55,50,47,0.80)] text-lg sm:text-xl leading-relaxed font-sans">
              MentorMind AI provides comprehensive, objective teaching evaluations through advanced multimodal analysis,
              empowering mentors with actionable insights and accessibility-first feedback.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-[#37322F] hover:bg-[#37322F]/90 text-white rounded-full font-medium shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]"
                >
                  Start Evaluating Now
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 border-[#37322F]/20 text-[#37322F] hover:bg-white rounded-full font-medium bg-transparent"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-[rgba(55,50,47,0.12)]">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-[#37322F]">98%</div>
                <div className="text-sm text-[rgba(55,50,47,0.60)]">Accuracy Rate</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-[#37322F]">5+</div>
                <div className="text-sm text-[rgba(55,50,47,0.60)]">Evaluation Parameters</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-[#37322F]">24/7</div>
                <div className="text-sm text-[rgba(55,50,47,0.60)]">Accessible Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none opacity-30">
          <img src="/mask-group-pattern.svg" alt="" className="w-[2000px] h-auto mix-blend-multiply" />
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[rgba(55,50,47,0.06)]">
        <div className="max-w-[1060px] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[rgba(2,6,23,0.08)] mb-6">
              <BarChart3 className="w-4 h-4 text-[#37322F]" />
              <span className="text-sm font-medium text-[#37322F]">Core Features</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal text-[#37322F] font-serif mb-4">
              Comprehensive AI Evaluation
            </h2>
            <p className="text-lg text-[rgba(55,50,47,0.70)] max-w-[600px] mx-auto">
              Our platform analyzes multiple teaching dimensions to provide holistic, actionable feedback
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg border border-[rgba(55,50,47,0.08)] hover:shadow-lg transition-shadow cursor-pointer"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="w-12 h-12 bg-[#37322F] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#37322F] mb-3">{feature.title}</h3>
                  <p className="text-[rgba(55,50,47,0.70)] leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Evaluation Parameters Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[rgba(55,50,47,0.06)]">
        <div className="max-w-[1060px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-normal text-[#37322F] font-serif mb-4">
              Five-Parameter Scoring System
            </h2>
            <p className="text-lg text-[rgba(55,50,47,0.70)]">
              Comprehensive evaluation across critical teaching dimensions (0-10 scale)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "Clarity", weight: "20%", icon: Eye },
              { name: "Engagement", weight: "20%", icon: Users },
              { name: "Tone & Confidence", weight: "15%", icon: Video },
              { name: "Pacing", weight: "15%", icon: Award },
              { name: "Technical Depth", weight: "30%", icon: Brain },
            ].map((param, index) => {
              const Icon = param.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-[#F7F5F3] rounded-lg border border-[rgba(55,50,47,0.08)]"
                >
                  <Icon className="w-8 h-8 text-[#37322F] mb-3" />
                  <div className="text-lg font-semibold text-[#37322F] mb-1">{param.name}</div>
                  <div className="text-2xl font-bold text-[#37322F]">{param.weight}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section id="accessibility" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[rgba(55,50,47,0.06)]">
        <div className="max-w-[1060px] mx-auto">
          <div className="bg-[#37322F] rounded-2xl p-12 text-white">
            <div className="max-w-[700px] mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-normal font-serif mb-6">Accessibility-First Approach</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                MentorMind AI provides comprehensive feedback from diverse student perspectives, including insights from
                deaf, blind, and mute students. Our platform ensures teaching quality is evaluated through the lens of
                true inclusivity.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20">
                  <span className="font-medium">Multilingual Captions</span>
                </div>
                <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20">
                  <span className="font-medium">Audio Descriptions</span>
                </div>
                <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20">
                  <span className="font-medium">Screen Reader Support</span>
                </div>
                <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20">
                  <span className="font-medium">Voice Interaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[rgba(55,50,47,0.06)]">
        <div className="max-w-[1060px] mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-normal text-[#37322F] font-serif mb-6">
            Ready to Transform Your Teaching?
          </h2>
          <p className="text-lg text-[rgba(55,50,47,0.70)] mb-8 max-w-[600px] mx-auto">
            Join educators worldwide who are elevating their teaching with AI-powered insights
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="h-12 px-8 bg-[#37322F] hover:bg-[#37322F]/90 text-white rounded-full font-medium shadow-lg"
            >
              Go to Mentor Dashboard
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[rgba(55,50,47,0.06)] bg-white">
        <div className="max-w-[1060px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-[#37322F]" />
              <span className="text-[#37322F] font-semibold">MentorMind AI</span>
            </div>
            <div className="text-sm text-[rgba(55,50,47,0.60)]">
              © 2025 MentorMind AI. Empowering educators through AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
