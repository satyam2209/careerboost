"use client";

import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Heart,
  Zap,
  Award,
  Globe,
  TrendingUp,
  Sparkles,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: "User First",
      description:
        "Every feature we build starts with understanding our users' needs and pain points.",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We leverage cutting-edge AI technology to provide the best resume optimization tools.",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from our product to customer support.",
      gradient: "from-orange-500 to-amber-600",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description:
        "We believe everyone deserves access to quality career tools, regardless of background.",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  const team = [
    {
      name: "Satyam Singh",
      role: "Co-Founder",
      bio: "Former software engineer at a Fortune 500 company. Passionate about helping people find their dream jobs.",
      image: "SS",
    },
    {
      name: "Ankit Gupta",
      role: "Co-Founder",
      bio: "AI researcher and engineer. Built multiple products at top MNCs.",
      image: "AG",
    },
    {
      name: "Shivam Singh",
      role: "Co-Founder",
      bio: "Product leader with 3+ years of experience building consumer products at multiple product-based companies.",
      image: "SS",
    },
    {
      name: "Prashant Singh",
      role: "Co-Founder",
      bio: "Network engineer with 4+ years of experience, working with US-based companies.",
      image: "PS",
    },
  ];

  const stats = [
    { value: "2k+", label: "Resumes Created" },
    { value: "1.9K+", label: "Happy Users" },
    { value: "95%", label: "Success Rate" },
    { value: "10+", label: "Countries" },
  ];

  const milestones = [
    {
      year: "2025",
      title: "Founded",
      description:
        "CareerBoost was born from a simple idea: making resume building accessible to everyone.",
    },
    {
      year: "2026",
      title: "AI Integration",
      description: "Launched our first AI-powered resume optimization engine.",
    },
    {
      year: "2026",
      title: "1K Users",
      description:
        "Reached our first thousand users and expanded to 10+ countries.",
    },
    {
      year: "2026",
      title: "ATS Checker",
      description: "Released our revolutionary ATS compatibility checker.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-scale-in">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Empowering Careers,{" "}
              <span className="gradient-text">One Resume at a Time</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-slide-up stagger-1">
              We are on a mission to democratize career success by providing
              AI-powered tools that help job seekers stand out and land their
              dream jobs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="reveal opacity-0 text-center p-6 rounded-2xl bg-card border border-border/50 hover-lift"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal opacity-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built by Job Seekers,{" "}
                <span className="gradient-text">For Job Seekers</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  CareerBoost was founded in 2025 by a group of friends who
                  experienced firsthand the frustration of the modern job
                  search. After sending out hundreds of resumes with little
                  response, we discovered the secret: Applicant Tracking Systems
                  were filtering out qualified candidates before human eyes ever
                  saw their applications.
                </p>
                <p>
                  We built CareerBoost to level the playing field. Using
                  advanced AI technology, we help job seekers create resumes
                  that not only pass ATS filters but also impress hiring
                  managers. Today, we have helped over 2 thousand people advance
                  their careers.
                </p>
                <p>
                  Our mission is simple: make professional career tools
                  accessible to everyone, regardless of their background or
                  budget.
                </p>
              </div>
            </div>
            <div className="reveal opacity-0 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl gradient-primary flex items-center justify-center">
                    <Award className="w-16 h-16 text-white" />
                  </div>
                  <div className="h-32 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-accent" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-32 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Target className="w-12 h-12 text-primary" />
                  </div>
                  <div className="h-48 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 gradient-card" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-muted-foreground">
              These principles guide everything we do at CareerBoost.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="reveal opacity-0 border-0 shadow-xl shadow-primary/5 hover-lift"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-4`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground">
              From a small startup to helping millions of job seekers worldwide.
            </p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`reveal opacity-0 relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full gradient-primary border-4 border-background -translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                >
                  <Card className="border-0 shadow-lg shadow-primary/5 hover-lift">
                    <CardContent className="p-6">
                      <span className="inline-block px-3 py-1 rounded-full gradient-primary text-white text-sm font-medium mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 gradient-card" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground">
              The passionate people behind CareerBoost who are dedicated to your
              success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="reveal opacity-0 border-0 shadow-xl shadow-primary/5 hover-lift overflow-hidden group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                    {member.image}
                  </div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
