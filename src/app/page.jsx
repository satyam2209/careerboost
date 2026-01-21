"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  FileText,
  Search,
  Sparkles,
  Zap,
  Shield,
  Target,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react"

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: FileText,
      title: "AI Resume Builder",
      description: "Create stunning, ATS-optimized resumes in minutes with our intelligent builder.",
      href: "/resume-builder",
      gradient: "from-violet-500 to-purple-600",
      delay: "stagger-1",
    },
    {
      icon: Search,
      title: "ATS Score Checker",
      description: "Analyze your resume against job descriptions and get actionable feedback.",
      href: "/ats-checker",
      gradient: "from-pink-500 to-rose-600",
      delay: "stagger-2",
    },
    {
      icon: Target,
      title: "Job Matching",
      description: "Get matched with jobs that fit your skills and experience perfectly.",
      href: "#",
      gradient: "from-orange-500 to-amber-600",
      delay: "stagger-3",
    },
  ]

  const stats = [
    { value: "2M+", label: "Resumes Created", icon: FileText },
    { value: "95%", label: "Success Rate", icon: TrendingUp },
    { value: "500K+", label: "Happy Users", icon: Users },
    { value: "4.9", label: "User Rating", icon: Star },
  ]

  const benefits = [
    "ATS-optimized templates",
    "Real-time score feedback",
    "AI-powered suggestions",
    "Multiple export formats",
    "Keyword optimization",
    "Industry-specific tips",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/30 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-scale-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Career Tools</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
              Land Your Dream Job with{" "}
              <span className="gradient-text">AI-Powered</span> Resumes
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up stagger-1">
              Build professional resumes, check ATS compatibility, and get personalized
              feedback to stand out from the competition.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up stagger-2">
              <Link href="/resume-builder">
                <Button size="lg" className="gradient-primary text-white border-0 h-14 px-8 text-lg shadow-xl shadow-primary/25 hover-lift group">
                  Start Building Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/ats-checker">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 hover:bg-primary/5 bg-transparent">
                  Check Your Resume
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 animate-slide-up stagger-3">
              {["Trusted by 500K+ users", "4.9 Star Rating", "Free to Start"].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="reveal opacity-0 text-center p-6 rounded-2xl bg-card border border-border/50 hover-lift transition-all"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Powerful Features</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive tools designed to help you create the perfect resume and land interviews faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card className={`reveal opacity-0 group h-full border-0 shadow-xl shadow-primary/5 hover-lift overflow-hidden ${feature.delay}`}>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <div className="flex items-center text-primary font-medium">
                      Learn more
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-card" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Beat the ATS and Get <span className="gradient-text">Noticed</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our AI-powered platform analyzes thousands of job postings to help you create
                resumes that pass through Applicant Tracking Systems and impress hiring managers.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-card rounded-3xl p-8 shadow-2xl shadow-primary/10 border border-border/50">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center animate-float">
                  <span className="text-3xl font-bold text-white">98%</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                    <span className="text-sm font-medium">ATS Compatibility</span>
                    <span className="text-green-600 font-bold">Excellent</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-xl border border-primary/20">
                    <span className="text-sm font-medium">Keyword Match</span>
                    <span className="text-primary font-bold">95%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-xl border border-accent/20">
                    <span className="text-sm font-medium">Format Score</span>
                    <span className="text-accent font-bold">Perfect</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden mt-6">
                    <div className="h-full w-[98%] gradient-primary rounded-full animate-shimmer" />
                  </div>
                  <p className="text-xs text-muted-foreground text-center">Resume Analysis Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 gradient-hero opacity-90" />
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
            <div className="relative z-10 text-center py-16 md:py-24 px-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                Join over 500,000 professionals who have already landed their dream jobs
                using CareerBoost.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/resume-builder">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg shadow-xl hover-lift">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 h-14 px-8 text-lg bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
