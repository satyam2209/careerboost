"use client"

import { useState, useRef, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Search,
  FileText,
  Target,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Sparkles,
  Zap,
  TrendingUp,
  Upload,
  File,
  X,
  Lightbulb,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";

// Set worker source using CDN
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

// Helper function for confidence level
const getConfidence = (score) => {
  if (score >= 80) return { label: "Excellent Match", color: "from-green-500 to-emerald-500", textColor: "text-green-500" }
  if (score >= 60) return { label: "Good Match", color: "from-yellow-500 to-orange-500", textColor: "text-yellow-500" }
  return { label: "Needs Improvement", color: "from-red-500 to-pink-500", textColor: "text-red-500" }
}

export default function ATSChecker() {
  const [resumeText, setResumeText] = useState("")
  const [fileName, setFileName] = useState("")
  const [jd, setJd] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const fileInputRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // PDF Extraction
  const handleFile = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setError("")
    setResult(null)
    setFileName(file.name)

    try {
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

      let extractedText = ""

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const content = await page.getTextContent()

        content.items.forEach((item) => {
          extractedText += item.str + " "
        })
      }

      setResumeText(extractedText)
    } catch (err) {
      setError("Failed to read PDF file. Please try another file.")
    }
  }

  // ATS Check with OpenAI
  const checkATS = async () => {
    if (!resumeText || !jd) {
      setError("Please upload a resume PDF and paste the job description.")
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const res = await fetch("/api/ats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText, jd }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong")
        return
      }

      setResult(data)
    } catch {
      setError("Server error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const clearFile = () => {
    setResumeText("")
    setFileName("")
    setResult(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-violet-500/10 border border-pink-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">AI-Powered Analysis</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Check Your <span className="bg-gradient-to-r from-pink-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">ATS Score</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Upload your resume PDF and paste the job description to get instant AI-powered compatibility analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              {/* Resume Upload */}
              <Card className="border-0 shadow-xl shadow-violet-500/10 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Upload Resume (PDF)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {/* File Upload Area */}
                  <div
                    className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer hover:border-violet-500 hover:bg-violet-50/50 ${
                      fileName ? "border-green-500 bg-green-50/50" : "border-slate-300"
                    }`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="application/pdf"
                      onChange={handleFile}
                      className="hidden"
                    />
                    {fileName ? (
                      <div className="space-y-3">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                          <CheckCircle2 className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-green-700 flex items-center justify-center gap-2">
                            <File className="w-4 h-4" />
                            {fileName}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">Click to change file</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            clearFile()
                          }}
                          className="mt-2 bg-transparent"
                        >
                          <X className="w-4 h-4 mr-1" />
                          Remove File
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/30">
                          <Upload className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Click to upload your resume</p>
                          <p className="text-sm text-muted-foreground">PDF files only (max 10MB)</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Extracted Text Preview */}
                  {resumeText && (
                    <div className="mt-4 space-y-2 animate-slide-up">
                      <label className="text-sm font-medium text-muted-foreground">Extracted Text Preview</label>
                      <div className="bg-slate-50 rounded-lg p-4 max-h-32 overflow-y-auto border border-slate-200">
                        <p className="text-sm text-slate-600 whitespace-pre-wrap">
                          {resumeText.slice(0, 500)}...
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {resumeText.split(/\s+/).filter(Boolean).length} words extracted
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Job Description Input */}
              <Card className="border-0 shadow-xl shadow-pink-500/10 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Job Description
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Textarea
                    placeholder="Paste the complete job description here..."
                    rows={10}
                    value={jd}
                    onChange={(e) => setJd(e.target.value)}
                    className="resize-none border-slate-200 focus:border-pink-500 focus:ring-pink-500/20"
                  />
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-muted-foreground">
                      {jd.split(/\s+/).filter(Boolean).length} words
                    </span>
                    <Button variant="outline" size="sm" onClick={() => setJd("")} className="bg-transparent">
                      Clear
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Analyze Button */}
              <Button
                onClick={checkATS}
                disabled={!resumeText || !jd || loading}
                className="w-full h-14 text-lg bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-700 hover:via-purple-700 hover:to-pink-700 text-white border-0 shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? (
                  <span className="flex items-center gap-3">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Analyzing with AI...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Analyze Resume
                  </span>
                )}
              </Button>
            </div>

            {/* Results Section */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              {error && (
                <Alert variant="destructive" className="mb-6 animate-slide-up">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {!result && !loading ? (
                <Card className="border-0 shadow-xl shadow-primary/5 h-full min-h-[600px] flex items-center justify-center bg-gradient-to-br from-white to-slate-50">
                  <CardContent className="text-center p-12">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-6">
                      <Search className="w-12 h-12 text-violet-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Ready to Analyze</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Upload your resume PDF and paste the job description to get AI-powered ATS compatibility analysis.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-violet-100 text-violet-700 text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        Keyword Analysis
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-pink-100 text-pink-700 text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        AI Suggestions
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        Score Report
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : loading ? (
                <Card className="border-0 shadow-xl shadow-primary/5 h-full min-h-[600px] flex items-center justify-center bg-gradient-to-br from-white to-slate-50">
                  <CardContent className="text-center p-12">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center mx-auto mb-6 animate-pulse shadow-xl shadow-purple-500/30">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Analyzing Your Resume</h3>
                    <p className="text-muted-foreground max-w-sm mb-6">
                      Our AI is comparing your resume against the job description...
                    </p>
                    <div className="w-full max-w-xs mx-auto h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full animate-pulse" style={{ width: "66%" }} />
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6 animate-slide-up">
                  {/* Score Card */}
                  <Card className="border-0 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Score Circle */}
                        <div className="relative">
                          <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${getConfidence(result.score).color} p-1 shadow-xl`}>
                            <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                              <span className={`text-5xl font-bold ${getConfidence(result.score).textColor}`}>
                                {result.score}
                              </span>
                              <span className="text-sm text-muted-foreground">out of 100</span>
                            </div>
                          </div>
                        </div>

                        {/* Score Details */}
                        <div className="flex-1 text-center md:text-left space-y-4">
                          <div>
                            <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${getConfidence(result.score).color} text-white font-medium shadow-lg`}>
                              {getConfidence(result.score).label}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{result.summary}</p>
                          <p className="text-xs text-muted-foreground">
                            Remaining checks today: {result.remaining} / 5
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Keywords Cards */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Matched Keywords */}
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-green-50/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-green-700 text-base">
                          <CheckCircle2 className="w-5 h-5" />
                          Matched Keywords
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {result.matched && result.matched.length > 0 ? (
                            result.matched.map((kw, i) => (
                              <Badge key={i} className="bg-green-100 text-green-800 hover:bg-green-200 border-0">
                                {kw}
                              </Badge>
                            ))
                          ) : (
                            <p className="text-sm text-muted-foreground">No specific matches found</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Missing Keywords */}
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-red-50/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-rose-700 text-base">
                          <XCircle className="w-5 h-5" />
                          Missing Keywords
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {result.missing && result.missing.length > 0 ? (
                            result.missing.map((kw, i) => (
                              <Badge key={i} variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50">
                                {kw}
                              </Badge>
                            ))
                          ) : (
                            <p className="text-sm text-muted-foreground">No major keywords missing</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Improvements Section */}
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-amber-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-amber-700">
                        <Lightbulb className="w-5 h-5" />
                        How to Improve
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {result.improvements && result.improvements.length > 0 ? (
                        <ul className="space-y-3">
                          {result.improvements.map((tip, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs flex items-center justify-center font-medium shadow-sm">
                                {i + 1}
                              </span>
                              <span className="text-muted-foreground">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground">
                          Your resume is already well-aligned with this role. Minor refinements in formatting or impact statements could make it even stronger.
                        </p>
                      )}
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 border border-violet-500/20">
                    <p className="text-muted-foreground mb-4">
                      Want to improve your resume based on these suggestions?
                    </p>
                    <Link href="/resume-builder">
                      <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/25">
                        Open Resume Builder
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
