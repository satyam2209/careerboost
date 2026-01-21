"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Briefcase,
  GraduationCap,
  Wrench,
  Plus,
  Trash2,
  Download,
  Eye,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Save,
  FileText,
  ChevronRight,
} from "lucide-react"

export default function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState("personal")
  const [formData, setFormData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      website: "",
      summary: "",
    },
    experience: [
      {
        id: 1,
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ],
    education: [
      {
        id: 1,
        degree: "",
        school: "",
        location: "",
        startDate: "",
        endDate: "",
        gpa: "",
      },
    ],
    skills: [""],
  })

  const updatePersonal = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }))
  }

  const updateExperience = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }))
  }

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    }))
  }

  const removeExperience = (id) => {
    if (formData.experience.length > 1) {
      setFormData((prev) => ({
        ...prev,
        experience: prev.experience.filter((exp) => exp.id !== id),
      }))
    }
  }

  const updateEducation = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }))
  }

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now(),
          degree: "",
          school: "",
          location: "",
          startDate: "",
          endDate: "",
          gpa: "",
        },
      ],
    }))
  }

  const removeEducation = (id) => {
    if (formData.education.length > 1) {
      setFormData((prev) => ({
        ...prev,
        education: prev.education.filter((edu) => edu.id !== id),
      }))
    }
  }

  const updateSkill = (index, value) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) => (i === index ? value : skill)),
    }))
  }

  const addSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, ""],
    }))
  }

  const removeSkill = (index) => {
    if (formData.skills.length > 1) {
      setFormData((prev) => ({
        ...prev,
        skills: prev.skills.filter((_, i) => i !== index),
      }))
    }
  }

  const tabs = [
    { id: "personal", label: "Personal", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Wrench },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-scale-in">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI Resume Builder</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-up">
              Build Your <span className="gradient-text">Perfect Resume</span>
            </h1>
            <p className="text-muted-foreground text-lg animate-slide-up stagger-1">
              Create a professional, ATS-optimized resume in minutes with our intelligent builder.
            </p>
          </div>
        </div>
      </section>

      {/* Builder Section */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Panel */}
            <div className="animate-slide-in-left">
              <Card className="border-0 shadow-xl shadow-primary/5 overflow-hidden">
                <CardHeader className="gradient-primary text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Resume Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="w-full justify-start rounded-none border-b bg-muted/30 p-0 h-auto">
                      {tabs.map((tab) => (
                        <TabsTrigger
                          key={tab.id}
                          value={tab.id}
                          className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-4 data-[state=active]:shadow-none"
                        >
                          <tab.icon className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">{tab.label}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {/* Personal Info Tab */}
                    <TabsContent value="personal" className="p-6 space-y-6 mt-0">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2">
                            <User className="w-4 h-4 text-primary" />
                            Full Name
                          </Label>
                          <Input
                            placeholder="John Doe"
                            value={formData.personal.fullName}
                            onChange={(e) => updatePersonal("fullName", e.target.value)}
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            Email
                          </Label>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            value={formData.personal.email}
                            onChange={(e) => updatePersonal("email", e.target.value)}
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary" />
                            Phone
                          </Label>
                          <Input
                            placeholder="+1 (555) 000-0000"
                            value={formData.personal.phone}
                            onChange={(e) => updatePersonal("phone", e.target.value)}
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            Location
                          </Label>
                          <Input
                            placeholder="San Francisco, CA"
                            value={formData.personal.location}
                            onChange={(e) => updatePersonal("location", e.target.value)}
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2">
                            <Linkedin className="w-4 h-4 text-primary" />
                            LinkedIn
                          </Label>
                          <Input
                            placeholder="linkedin.com/in/johndoe"
                            value={formData.personal.linkedin}
                            onChange={(e) => updatePersonal("linkedin", e.target.value)}
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-primary" />
                            Website
                          </Label>
                          <Input
                            placeholder="johndoe.com"
                            value={formData.personal.website}
                            onChange={(e) => updatePersonal("website", e.target.value)}
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Professional Summary</Label>
                        <Textarea
                          placeholder="Write a brief summary of your professional background and career goals..."
                          rows={4}
                          value={formData.personal.summary}
                          onChange={(e) => updatePersonal("summary", e.target.value)}
                          className="border-border/50 focus:border-primary resize-none"
                        />
                      </div>
                      <Button onClick={() => setActiveTab("experience")} className="w-full gradient-primary text-white border-0">
                        Continue to Experience
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </TabsContent>

                    {/* Experience Tab */}
                    <TabsContent value="experience" className="p-6 space-y-6 mt-0">
                      {formData.experience.map((exp, index) => (
                        <div key={exp.id} className="p-4 rounded-xl bg-muted/30 border border-border/50 space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm gradient-text">Experience {index + 1}</h4>
                            {formData.experience.length > 1 && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeExperience(exp.id)}
                                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Job Title</Label>
                              <Input
                                placeholder="Software Engineer"
                                value={exp.title}
                                onChange={(e) => updateExperience(exp.id, "title", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Company</Label>
                              <Input
                                placeholder="Tech Corp"
                                value={exp.company}
                                onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Start Date</Label>
                              <Input
                                type="month"
                                value={exp.startDate}
                                onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>End Date</Label>
                              <Input
                                type="month"
                                value={exp.endDate}
                                onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                                disabled={exp.current}
                                placeholder={exp.current ? "Present" : ""}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea
                              placeholder="Describe your responsibilities and achievements..."
                              rows={3}
                              value={exp.description}
                              onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                              className="resize-none"
                            />
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" onClick={addExperience} className="w-full border-dashed border-2 hover:border-primary hover:bg-primary/5 bg-transparent">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Another Experience
                      </Button>
                      <Button onClick={() => setActiveTab("education")} className="w-full gradient-primary text-white border-0">
                        Continue to Education
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </TabsContent>

                    {/* Education Tab */}
                    <TabsContent value="education" className="p-6 space-y-6 mt-0">
                      {formData.education.map((edu, index) => (
                        <div key={edu.id} className="p-4 rounded-xl bg-muted/30 border border-border/50 space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm gradient-text">Education {index + 1}</h4>
                            {formData.education.length > 1 && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeEducation(edu.id)}
                                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Degree</Label>
                              <Input
                                placeholder="Bachelor of Science"
                                value={edu.degree}
                                onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>School</Label>
                              <Input
                                placeholder="University Name"
                                value={edu.school}
                                onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Start Date</Label>
                              <Input
                                type="month"
                                value={edu.startDate}
                                onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>End Date</Label>
                              <Input
                                type="month"
                                value={edu.endDate}
                                onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" onClick={addEducation} className="w-full border-dashed border-2 hover:border-primary hover:bg-primary/5 bg-transparent">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Another Education
                      </Button>
                      <Button onClick={() => setActiveTab("skills")} className="w-full gradient-primary text-white border-0">
                        Continue to Skills
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </TabsContent>

                    {/* Skills Tab */}
                    <TabsContent value="skills" className="p-6 space-y-6 mt-0">
                      <div className="space-y-3">
                        {formData.skills.map((skill, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              placeholder="e.g., JavaScript, React, Project Management"
                              value={skill}
                              onChange={(e) => updateSkill(index, e.target.value)}
                              className="flex-1"
                            />
                            {formData.skills.length > 1 && (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeSkill(index)}
                                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" onClick={addSkill} className="w-full border-dashed border-2 hover:border-primary hover:bg-primary/5 bg-transparent">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Skill
                      </Button>
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1 bg-transparent">
                          <Save className="w-4 h-4 mr-2" />
                          Save Draft
                        </Button>
                        <Button className="flex-1 gradient-primary text-white border-0">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Preview Panel */}
            <div className="animate-slide-in-right">
              <Card className="border-0 shadow-xl shadow-primary/5 sticky top-24">
                <CardHeader className="flex flex-row items-center justify-between bg-muted/30 border-b">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Eye className="w-5 h-5 text-primary" />
                    Live Preview
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm" className="gradient-primary text-white border-0">
                      <Download className="w-4 h-4 mr-1" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-white rounded-lg shadow-inner border p-8 min-h-[600px]">
                    {/* Resume Preview */}
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="text-center border-b-2 border-primary/20 pb-4">
                        <h2 className="text-2xl font-bold text-foreground">
                          {formData.personal.fullName || "Your Name"}
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-3 mt-2 text-sm text-muted-foreground">
                          {formData.personal.email && (
                            <span className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {formData.personal.email}
                            </span>
                          )}
                          {formData.personal.phone && (
                            <span className="flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              {formData.personal.phone}
                            </span>
                          )}
                          {formData.personal.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {formData.personal.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Summary */}
                      {formData.personal.summary && (
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
                            Professional Summary
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {formData.personal.summary}
                          </p>
                        </div>
                      )}

                      {/* Experience */}
                      {formData.experience.some((exp) => exp.title || exp.company) && (
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                            Experience
                          </h3>
                          <div className="space-y-3">
                            {formData.experience
                              .filter((exp) => exp.title || exp.company)
                              .map((exp) => (
                                <div key={exp.id}>
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <p className="font-semibold text-sm">{exp.title}</p>
                                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                                    </span>
                                  </div>
                                  {exp.description && (
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {exp.description}
                                    </p>
                                  )}
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Education */}
                      {formData.education.some((edu) => edu.degree || edu.school) && (
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                            Education
                          </h3>
                          <div className="space-y-2">
                            {formData.education
                              .filter((edu) => edu.degree || edu.school)
                              .map((edu) => (
                                <div key={edu.id} className="flex justify-between">
                                  <div>
                                    <p className="font-semibold text-sm">{edu.degree}</p>
                                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    {edu.startDate} - {edu.endDate}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Skills */}
                      {formData.skills.some((skill) => skill) && (
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
                            Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {formData.skills
                              .filter((skill) => skill)
                              .map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
