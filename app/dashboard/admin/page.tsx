"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  Users,
  TrendingUp,
  TrendingDown,
  Download,
  Filter,
  Search,
  BarChart3,
  PieChart,
  AlertTriangle,
  CheckCircle2,
  Brain,
  Home,
  Video,
  Award,
  Settings,
  Eye,
  Heart,
  MessageSquare,
} from "lucide-react"

interface DepartmentPerformance {
  department: string
  mentors: number
  avgScore: number
  trend: "up" | "down" | "stable"
  accessibilityScore: number
  commonGaps: string[]
}

interface AccessibilityMetric {
  category: string
  effectiveness: number
  studentSatisfaction: number
  color: string
}

export default function AdminView() {
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  const overallStats = {
    totalMentors: 124,
    avgScore: 8.63,
    accessibilityRate: 88.5,
    sessionsEvaluated: 1847,
  }

  const departments: DepartmentPerformance[] = [
    {
      department: "Computer Science",
      mentors: 28,
      avgScore: 8.85,
      trend: "up",
      accessibilityScore: 91,
      commonGaps: ["Technical Depth", "Pacing"],
    },
    {
      department: "Data Science",
      mentors: 22,
      avgScore: 8.72,
      trend: "up",
      accessibilityScore: 89,
      commonGaps: ["Clarity", "Engagement"],
    },
    {
      department: "Machine Learning",
      mentors: 19,
      avgScore: 8.68,
      trend: "stable",
      accessibilityScore: 87,
      commonGaps: ["Tone & Confidence", "Technical Depth"],
    },
    {
      department: "Artificial Intelligence",
      mentors: 25,
      avgScore: 8.51,
      trend: "down",
      accessibilityScore: 86,
      commonGaps: ["Engagement", "Pacing"],
    },
    {
      department: "Software Engineering",
      mentors: 30,
      avgScore: 8.49,
      trend: "up",
      accessibilityScore: 90,
      commonGaps: ["Technical Depth", "Clarity"],
    },
  ]

  const accessibilityMetrics: AccessibilityMetric[] = [
    {
      category: "Caption Quality",
      effectiveness: 94,
      studentSatisfaction: 4.7,
      color: "text-blue-600",
    },
    {
      category: "Audio Descriptions",
      effectiveness: 89,
      studentSatisfaction: 4.5,
      color: "text-green-600",
    },
    {
      category: "Text Interactions",
      effectiveness: 91,
      studentSatisfaction: 4.6,
      color: "text-purple-600",
    },
    {
      category: "Voice Support",
      effectiveness: 87,
      studentSatisfaction: 4.4,
      color: "text-orange-600",
    },
  ]

  const teachingGaps = [
    {
      gap: "Technical Depth",
      occurrence: 42,
      percentage: 34,
      severity: "high",
      departments: ["CS", "ML", "SE"],
    },
    {
      gap: "Student Interaction",
      occurrence: 38,
      percentage: 31,
      severity: "high",
      departments: ["CS", "AI"],
    },
    {
      gap: "Communication Clarity",
      occurrence: 29,
      percentage: 23,
      severity: "medium",
      departments: ["DS", "ML", "SE"],
    },
    {
      gap: "Engagement Techniques",
      occurrence: 25,
      percentage: 20,
      severity: "medium",
      departments: ["AI", "DS"],
    },
    {
      gap: "Accessibility Features",
      occurrence: 18,
      percentage: 15,
      severity: "low",
      departments: ["AI"],
    },
  ]

  return (
    <div className="min-h-screen bg-[#F7F5F3]">
      <div className="flex">
        {/* Navigation Sidebar */}
        <aside className="w-64 min-h-screen bg-white border-r border-[rgba(55,50,47,0.08)] p-6">
          <div className="flex items-center gap-2 mb-8">
            <Brain className="w-6 h-6 text-[#37322F]" />
            <span className="text-[#37322F] font-semibold text-lg">MentorMind AI</span>
          </div>

          <nav className="space-y-2">
            <Link href="/dashboard">
              <div className="flex items-center gap-3 px-4 py-3 text-[#37322F] hover:bg-[#F7F5F3] rounded-lg cursor-pointer">
                <Home className="w-5 h-5" />
                <span className="font-medium">Dashboard</span>
              </div>
            </Link>
            <Link href="/dashboard/sessions">
              <div className="flex items-center gap-3 px-4 py-3 text-[#37322F] hover:bg-[#F7F5F3] rounded-lg cursor-pointer">
                <Video className="w-5 h-5" />
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
              <div className="flex items-center gap-3 px-4 py-3 bg-[#37322F] text-white rounded-lg cursor-pointer">
                <Users className="w-5 h-5" />
                <span className="font-medium">Admin</span>
              </div>
            </Link>
            <div className="flex items-center gap-3 px-4 py-3 text-[#37322F] hover:bg-[#F7F5F3] rounded-lg cursor-pointer">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </div>
          </nav>

          <div className="mt-auto pt-8">
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
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-semibold text-[#37322F] mb-2">Institution Analytics</h1>
                <p className="text-[rgba(55,50,47,0.70)]">Monitor performance and identify improvement opportunities</p>
              </div>
              <Button className="bg-[#37322F] hover:bg-[#37322F]/90 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[rgba(55,50,47,0.70)] mb-2">Total Mentors</div>
                      <div className="text-3xl font-bold text-[#37322F]">{overallStats.totalMentors}</div>
                    </div>
                    <Users className="w-10 h-10 text-[#37322F] opacity-20" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[rgba(55,50,47,0.70)] mb-2">Avg Score</div>
                      <div className="flex items-end gap-2">
                        <div className="text-3xl font-bold text-[#37322F]">{overallStats.avgScore}</div>
                        <TrendingUp className="w-5 h-5 text-green-600 mb-1" />
                      </div>
                    </div>
                    <BarChart3 className="w-10 h-10 text-[#37322F] opacity-20" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[rgba(55,50,47,0.70)] mb-2">Accessibility Rate</div>
                      <div className="text-3xl font-bold text-[#37322F]">{overallStats.accessibilityRate}%</div>
                    </div>
                    <Heart className="w-10 h-10 text-pink-600 opacity-20" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[rgba(55,50,47,0.70)] mb-2">Sessions Evaluated</div>
                      <div className="text-3xl font-bold text-[#37322F]">{overallStats.sessionsEvaluated}</div>
                    </div>
                    <Video className="w-10 h-10 text-[#37322F] opacity-20" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="departments" className="space-y-6">
              <TabsList className="bg-white border border-[rgba(55,50,47,0.08)]">
                <TabsTrigger
                  value="departments"
                  className="data-[state=active]:bg-[#37322F] data-[state=active]:text-white"
                >
                  <PieChart className="w-4 h-4 mr-2" />
                  Departments
                </TabsTrigger>
                <TabsTrigger
                  value="accessibility"
                  className="data-[state=active]:bg-[#37322F] data-[state=active]:text-white"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Accessibility
                </TabsTrigger>
                <TabsTrigger value="gaps" className="data-[state=active]:bg-[#37322F] data-[state=active]:text-white">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Teaching Gaps
                </TabsTrigger>
              </TabsList>

              {/* Departments Tab */}
              <TabsContent value="departments">
                <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-semibold text-[#37322F]">Department Performance</CardTitle>
                        <CardDescription>Compare mentor performance across departments</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="bg-white">
                          <Filter className="w-4 h-4 mr-2" />
                          Filter
                        </Button>
                        <Button variant="outline" size="sm" className="bg-white">
                          <Search className="w-4 h-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {departments.map((dept, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-6 border border-[rgba(55,50,47,0.08)] rounded-lg hover:bg-[#F7F5F3] transition-colors"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-lg font-semibold text-[#37322F]">{dept.department}</h3>
                              {dept.trend === "up" && <TrendingUp className="w-5 h-5 text-green-600" />}
                              {dept.trend === "down" && <TrendingDown className="w-5 h-5 text-red-600" />}
                            </div>
                            <div className="flex items-center gap-6 text-sm text-[rgba(55,50,47,0.70)]">
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {dept.mentors} mentors
                              </span>
                              <span className="flex items-center gap-1">
                                <Heart className="w-4 h-4" />
                                {dept.accessibilityScore}% accessibility
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {dept.commonGaps.map((gap, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium"
                                >
                                  {gap}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right ml-6">
                            <div className="text-4xl font-bold text-[#37322F] mb-1">{dept.avgScore}</div>
                            <div className="text-sm text-[rgba(55,50,47,0.60)]">Avg Score</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Accessibility Tab */}
              <TabsContent value="accessibility">
                <div className="space-y-6">
                  <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-[rgba(55,50,47,0.08)]">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#37322F] rounded-lg flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold text-[#37322F]">
                            Accessibility Effectiveness
                          </CardTitle>
                          <CardDescription>
                            Analyze how well accessibility features are implemented across the institution
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {accessibilityMetrics.map((metric, index) => (
                      <Card key={index} className="bg-white border-[rgba(55,50,47,0.08)]">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-semibold text-[#37322F] mb-1">{metric.category}</h3>
                              <div className="flex items-center gap-4 text-sm text-[rgba(55,50,47,0.70)]">
                                <span className="flex items-center gap-1">
                                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                                  {metric.effectiveness}% effective
                                </span>
                                <span className="flex items-center gap-1">
                                  <MessageSquare className="w-4 h-4 text-blue-600" />
                                  {metric.studentSatisfaction}/5
                                </span>
                              </div>
                            </div>
                            <div
                              className={`w-12 h-12 bg-[#F7F5F3] rounded-lg flex items-center justify-center ${metric.color}`}
                            >
                              <Eye className="w-6 h-6" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-[rgba(55,50,47,0.70)]">Effectiveness</span>
                              <span className="font-medium text-[#37322F]">{metric.effectiveness}%</span>
                            </div>
                            <div className="w-full bg-[#F7F5F3] rounded-full h-2">
                              <div
                                className="bg-[#37322F] h-2 rounded-full transition-all"
                                style={{ width: `${metric.effectiveness}%` }}
                              ></div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Teaching Gaps Tab */}
              <TabsContent value="gaps">
                <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#37322F]">Common Teaching Gaps</CardTitle>
                    <CardDescription>Identify the most frequent areas where mentors need improvement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {teachingGaps.map((gap, index) => (
                        <div
                          key={index}
                          className="p-6 border border-[rgba(55,50,47,0.08)] rounded-lg hover:bg-[#F7F5F3] transition-colors"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-semibold text-[#37322F]">{gap.gap}</h3>
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    gap.severity === "high"
                                      ? "bg-red-100 text-red-700"
                                      : gap.severity === "medium"
                                        ? "bg-orange-100 text-orange-700"
                                        : "bg-yellow-100 text-yellow-700"
                                  }`}
                                >
                                  {gap.severity.toUpperCase()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-[rgba(55,50,47,0.70)] mb-3">
                                <span>Identified in {gap.occurrence} mentors</span>
                                <span>•</span>
                                <span>{gap.percentage}% of total</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {gap.departments.map((dept, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 bg-[#F7F5F3] text-[#37322F] rounded-full text-xs font-medium"
                                  >
                                    {dept}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="text-right ml-6">
                              <div className="text-3xl font-bold text-[#37322F] mb-1">{gap.occurrence}</div>
                              <div className="text-xs text-[rgba(55,50,47,0.60)]">occurrences</div>
                            </div>
                          </div>
                          <div className="w-full bg-[#F7F5F3] rounded-full h-3">
                            <div
                              className={`h-3 rounded-full transition-all ${
                                gap.severity === "high"
                                  ? "bg-red-600"
                                  : gap.severity === "medium"
                                    ? "bg-orange-600"
                                    : "bg-yellow-600"
                              }`}
                              style={{ width: `${gap.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
