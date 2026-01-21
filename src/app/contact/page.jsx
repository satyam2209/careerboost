"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ChevronDown,
  CheckCircle2,
  HelpCircle,
  Sparkles,
} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "support@careerboost.com",
      description: "We typically respond within 24 hours",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+918799798407",
      description: "24*7 (Mon-Sun)",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Noida, India",
      description: "G Block, Sector 22",
      gradient: "from-orange-500 to-amber-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "9AM - 6PM EST",
      description: "Monday through Friday",
      gradient: "from-cyan-500 to-blue-600",
    },
  ]

  const faqs = [
    {
      question: "How long does it take to build a resume?",
      answer: "With CareerBoost, you can create a professional resume in as little as 10-15 minutes. Our AI-powered suggestions help speed up the process while ensuring quality.",
    },
    {
      question: "Is the ATS checker accurate?",
      answer: "Our ATS checker uses the same algorithms that major Applicant Tracking Systems use. We continuously update our system to ensure accuracy rates above 95%.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes! You can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term commitments.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee. If you are not satisfied with our service, contact support for a full refund.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption to protect your data. We never share your personal information with third parties without your consent.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-scale-in">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
              {"We'd Love to "}
              <span className="gradient-text">Hear From You</span>
            </h1>
            <p className="text-muted-foreground text-lg animate-slide-up stagger-1">
              Have questions or feedback? Our team is here to help you succeed in your career journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-xl shadow-primary/5 hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-1">{info.title}</h3>
                  <p className="text-primary font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="border-0 shadow-xl shadow-primary/5 overflow-hidden">
                <CardHeader className="gradient-primary text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6 animate-scale-in">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We will get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="bg-transparent"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Your Name</Label>
                          <Input
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Email Address</Label>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Subject</Label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) => setFormData({ ...formData, subject: value })}
                        >
                          <SelectTrigger className="border-border/50 focus:border-primary">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="billing">Billing Question</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Your Message</Label>
                        <Textarea
                          placeholder="How can we help you?"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="resize-none border-border/50 focus:border-primary"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 gradient-primary text-white border-0 shadow-lg shadow-primary/25 hover-lift"
                      >
                        {isSubmitting ? (
                          <>
                            <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div className="animate-slide-in-right">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
                  <HelpCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">FAQ</span>
                </div>
                <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Find quick answers to common questions about CareerBoost.
                </p>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg shadow-primary/5 overflow-hidden cursor-pointer hover-lift"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between p-5">
                        <span className="font-medium pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openFaq === index ? "max-h-40" : "max-h-0"
                        }`}
                      >
                        <p className="px-5 pb-5 text-sm text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-xl shadow-primary/5 overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 animate-float">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Headquarters</h3>
                <p className="text-muted-foreground">Noida, India</p>
                <p className="text-muted-foreground">G Block, Sector 22</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
