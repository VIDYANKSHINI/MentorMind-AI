"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Upload,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Brain,
  Home,
  Award,
  Users,
  Settings,
  LinkIcon,
  History,
  LogOut,
} from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts"

interface Session {
  id: string
  title: string
  uploadDate: string
  duration: string
  status: "completed" | "processing" | "pending"
  score?: number
  hasEvaluation?: boolean
  hasFeedback?: boolean
}

export default function MentorDashboard() {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userId")
    router.push("/login")
  }

  const [sessions, setSessions] = useState<Session[]>([
    {
      id: "1",
      title: "Introduction to Machine Learning - Week 1",
      uploadDate: "2025-01-15",
      duration: "45:30",
      status: "completed",
      score: 8.7,
      hasEvaluation: true,
      hasFeedback: true,
    },
    {
      id: "2",
      title: "Advanced Python Programming - Session 3",
      uploadDate: "2025-01-14",
      duration: "52:15",
      status: "completed",
      score: 9.2,
      hasEvaluation: true,
      hasFeedback: true,
    },
    {
      id: "3",
      title: "Data Structures and Algorithms - Week 2",
      uploadDate: "2025-01-13",
      duration: "48:20",
      status: "completed",
      score: 8.9,
      hasEvaluation: true,
      hasFeedback: true,
    },
    {
      id: "4",
      title: "Web Development Fundamentals - Session 5",
      uploadDate: "2025-01-12",
      duration: "55:45",
      status: "completed",
      score: 8.4,
      hasEvaluation: true,
      hasFeedback: true,
    },
    {
      id: "5",
      title: "Database Design Principles - Week 3",
      uploadDate: "2025-01-11",
      duration: "50:10",
      status: "completed",
      score: 9.0,
      hasEvaluation: true,
      hasFeedback: true,
    },
    {
      id: "6",
      title: "Cloud Computing Basics - Session 2",
      uploadDate: "2025-01-10",
      duration: "43:30",
      status: "completed",
      score: 8.5,
      hasEvaluation: true,
      hasFeedback: true,
    },
    {
      id: "7",
      title: "React Hooks Deep Dive - Week 4",
      uploadDate: "2025-01-09",
      duration: "57:20",
      status: "completed",
      score: 9.3,
      hasEvaluation: true,
      hasFeedback: true,
    },
    {
      id: "8",
      title: "API Development with Node.js - Session 6",
      uploadDate: "2025-01-08",
      duration: "49:15",
      status: "completed",
      score: 8.8,
      hasEvaluation: true,
      hasFeedback: true,
    },
  ])

  const [dragActive, setDragActive] = useState(false)
  const [videoUrl, setVideoUrl] = useState("")
  const [uploadMethod, setUploadMethod] = useState<"file" | "url">("file")

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFiles = (files: FileList) => {
    const file = files[0]
    if (file && file.type.includes("video")) {
      const sessionId = String(Date.now())
      const newSession: Session = {
        id: sessionId,
        title: file.name.replace(/\.[^/.]+$/, ""),
        uploadDate: new Date().toISOString().split("T")[0],
        duration: "00:00",
        status: "processing",
      }
      setSessions([newSession, ...sessions])

      // Redirect to processing/evaluation page
      router.push(`/processing/${sessionId}?title=${encodeURIComponent(newSession.title)}`)
    }
  }

  const handleUrlUpload = () => {
    if (!videoUrl.trim()) return

    const sessionId = String(Date.now())
    const urlTitle = `Video from ${new URL(videoUrl).hostname}`
    const newSession: Session = {
      id: sessionId,
      title: urlTitle,
      uploadDate: new Date().toISOString().split("T")[0],
      duration: "00:00",
      status: "processing",
    }
    setSessions([newSession, ...sessions])
    setVideoUrl("")

    // Redirect to processing/evaluation page
    router.push(`/processing/${sessionId}?title=${encodeURIComponent(urlTitle)}`)
  }

  const overallScore = 8.95
  const bestParameter = "Engagement"
  const improvementParameter = "Pacing"

  const completedSessions = sessions.filter((s) => s.status === "completed")
  const totalSessions = completedSessions.length
  const averageScore =
    completedSessions.reduce((sum, session) => sum + (session.score || 0), 0) / completedSessions.length

  const parameterData = [
    { parameter: "Clarity", score: 8.8, fullMark: 10 },
    { parameter: "Engagement", score: 9.3, fullMark: 10 },
    { parameter: "Tone", score: 8.6, fullMark: 10 },
    { parameter: "Pacing", score: 8.4, fullMark: 10 },
    { parameter: "Technical", score: 9.1, fullMark: 10 },
  ]

  const barChartData = [
    { name: "Clarity", score: 8.8 },
    { name: "Engagement", score: 9.3 },
    { name: "Tone", score: 8.6 },
    { name: "Pacing", score: 8.4 },
    { name: "Technical", score: 9.1 },
  ]

  return (
    <div className="min-h-screen bg-[#F7F5F3]">
      {/* Navigation Sidebar */}
      <div className="flex">
        <aside className="w-64 min-h-screen bg-white border-r border-[rgba(55,50,47,0.08)] p-6">
          <div className="flex items-center gap-2 mb-8">
            <Brain className="w-6 h-6 text-[#37322F]" />
            <span className="text-[#37322F] font-semibold text-lg">MentorMind AI</span>
          </div>

          <nav className="space-y-2">
            <Link href="/dashboard">
              <div className="flex items-center gap-3 px-4 py-3 bg-[#37322F] text-white rounded-lg cursor-pointer">
                <Home className="w-5 h-5" />
                <span className="font-medium">Dashboard</span>
              </div>
            </Link>
            <Link href="/dashboard/sessions">
              <div className="flex items-center gap-3 px-4 py-3 text-[#37322F] hover:bg-[#F7F5F3] rounded-lg cursor-pointer">
                <History className="w-5 h-5" />
                <span className="font-medium">Sessions</span>
              </div>
            </Link>
            <Link href="/dashboard/leaderboard">
              <div className="flex items-center gap-3 px-4 py-3 text-[#37322F] hover:bg-[#F7F5F3] rounded-lg cursor-pointer">
                <Award className="w-5 h-5" />
                <span className="font-medium">Leaderboard</span>
              </div>
            </Link>
            <Link href="/dashboard/admin">
              <div className="flex items-center gap-3 px-4 py-3 text-[#37322F] hover:bg-[#F7F5F3] rounded-lg cursor-pointer">
                <Users className="w-5 h-5" />
                <span className="font-medium">Admin</span>
              </div>
            </Link>
            <div className="flex items-center gap-3 px-4 py-3 text-[#37322F] hover:bg-[#F7F5F3] rounded-lg cursor-pointer">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </div>
          </nav>

          <div className="mt-auto pt-8 space-y-2">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full bg-transparent text-red-600 border-red-200 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
            <Link href="/">
              <Button variant="outline" className="w-full bg-transparent">
                Back to Home
              </Button>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-[#37322F] mb-2">Welcome back, Professor!</h1>
              <p className="text-[rgba(55,50,47,0.70)]">Here's an overview of your teaching performance</p>
            </div>

            {/* Summary Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-[rgba(55,50,47,0.70)]">Overall Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end gap-2">
                    <div className="text-4xl font-bold text-[#37322F]">{overallScore}</div>
                    <div className="text-xl text-[rgba(55,50,47,0.70)] mb-1">/10</div>
                    <div className="flex items-center text-green-600 mb-1">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">+0.5</span>
                    </div>
                  </div>
                  <Progress value={overallScore * 10} className="mt-4 h-2" />
                </CardContent>
              </Card>

              <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-[rgba(55,50,47,0.70)]">
                    Best Performing Parameter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-[#37322F]">{bestParameter}</div>
                      <div className="text-sm text-[rgba(55,50,47,0.70)]">Score: 9.3/10</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-[rgba(55,50,47,0.70)]">Needs Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <TrendingDown className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-[#37322F]">{improvementParameter}</div>
                      <div className="text-sm text-[rgba(55,50,47,0.70)]">Score: 8.4/10</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Graphical Performance Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Bar Chart - Parameter Scores */}
              <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#37322F]">Parameter-Wise Performance</CardTitle>
                  <CardDescription>Your scores across all evaluation parameters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barChartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E0DEDB" />
                        <XAxis
                          dataKey="name"
                          tick={{ fill: "#37322F", fontSize: 12 }}
                          angle={-45}
                          textAnchor="end"
                          height={80}
                        />
                        <YAxis domain={[0, 10]} tick={{ fill: "#37322F" }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #E0DEDB",
                            borderRadius: "8px",
                          }}
                        />
                        <Bar dataKey="score" fill="#37322F" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Radar Chart - Overall Performance View */}
              <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#37322F]">Performance Radar</CardTitle>
                  <CardDescription>360° view of your teaching strengths</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={parameterData}>
                        <PolarGrid stroke="#E0DEDB" />
                        <PolarAngleAxis dataKey="parameter" tick={{ fill: "#37322F", fontSize: 12 }} />
                        <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fill: "#37322F" }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #E0DEDB",
                            borderRadius: "8px",
                          }}
                        />
                        <Radar name="Your Score" dataKey="score" stroke="#37322F" fill="#37322F" fillOpacity={0.6} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upload Section */}
            <Card className="bg-white border-[rgba(55,50,47,0.08)] mb-8">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#37322F]">Upload Teaching Session</CardTitle>
                <CardDescription>Upload your recorded session or paste a video URL for AI evaluation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-6">
                  <Button
                    variant={uploadMethod === "file" ? "default" : "outline"}
                    onClick={() => setUploadMethod("file")}
                    className={uploadMethod === "file" ? "bg-[#37322F] text-white" : ""}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload File
                  </Button>
                  <Button
                    variant={uploadMethod === "url" ? "default" : "outline"}
                    onClick={() => setUploadMethod("url")}
                    className={uploadMethod === "url" ? "bg-[#37322F] text-white" : ""}
                  >
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Paste URL
                  </Button>
                </div>

                {uploadMethod === "file" ? (
                  <div
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                      dragActive
                        ? "border-[#37322F] bg-[#F7F5F3]"
                        : "border-[rgba(55,50,47,0.20)] hover:border-[#37322F]"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Upload className="w-12 h-12 text-[rgba(55,50,47,0.40)] mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-[#37322F] mb-2">Drag and drop your video file here</h3>
                    <p className="text-sm text-[rgba(55,50,47,0.70)] mb-4">or</p>
                    <Button className="bg-[#37322F] hover:bg-[#37322F]/90 text-white">
                      <input
                        type="file"
                        accept="video/*"
                        className="hidden"
                        id="file-upload"
                        onChange={(e) => e.target.files && handleFiles(e.target.files)}
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        Browse Files
                      </label>
                    </Button>
                    <p className="text-xs text-[rgba(55,50,47,0.60)] mt-4">Supports MP4, AVI, MOV (Max size: 500MB)</p>
                  </div>
                ) : (
                  <div className="border-2 border-[rgba(55,50,47,0.20)] rounded-lg p-8">
                    <div className="flex items-center gap-4">
                      <LinkIcon className="w-8 h-8 text-[rgba(55,50,47,0.40)]" />
                      <div className="flex-1">
                        <Input
                          type="url"
                          placeholder="https://youtube.com/watch?v=... or https://vimeo.com/..."
                          value={videoUrl}
                          onChange={(e) => setVideoUrl(e.target.value)}
                          className="mb-2"
                        />
                        <p className="text-xs text-[rgba(55,50,47,0.60)]">
                          Supports YouTube, Vimeo, and direct video URLs
                        </p>
                      </div>
                      <Button
                        className="bg-[#37322F] hover:bg-[#37322F]/90 text-white"
                        onClick={handleUrlUpload}
                        disabled={!videoUrl.trim()}
                      >
                        Analyze Video
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
