"use client"

import {
  Brain,
  Home,
  Award,
  Users,
  Settings,
  LogOut,
  Video,
  Clock,
  FileText,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  History,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function SessionsPage() {
  // Sample session data
  const sessions = [
    {
      id: 1,
      title: "Algebra II - Quadratic Functions",
      duration: "45:30",
      uploadDate: "Dec 18, 2024",
      score: 8.7,
      status: "completed",
      hasEvaluation: true,
      hasFeedback: true,
    },
    {
      id: 2,
      title: "Chemistry Lab - Acids and Bases",
      duration: "38:15",
      uploadDate: "Dec 17, 2024",
      score: 9.2,
      status: "completed",
      hasEvaluation: true,
      hasFeedback: true,
    },
    {
      id: 3,
      title: "History - World War II",
      duration: "52:00",
      uploadDate: "Dec 16, 2024",
      score: 7.5,
      status: "completed",
      hasEvaluation: true,
      hasFeedback: true,
    },
    {
      id: 4,
      title: "Physics - Newton's Laws",
      duration: "41:20",
      uploadDate: "Dec 15, 2024",
      score: 8.9,
      status: "completed",
      hasEvaluation: true,
      hasFeedback: true,
    },
    {
      id: 5,
      title: "Literature - Shakespeare Analysis",
      duration: "47:45",
      uploadDate: "Dec 14, 2024",
      score: 8.3,
      status: "completed",
      hasEvaluation: true,
      hasFeedback: true,
    },
    {
      id: 6,
      title: "Biology - Cell Structure",
      duration: "39:10",
      uploadDate: "Dec 13, 2024",
      score: 9.0,
      status: "completed",
      hasEvaluation: true,
      hasFeedback: true,
    },
  ]

  const totalSessions = sessions.length
  const averageScore = sessions.reduce((acc, session) => acc + session.score, 0) / totalSessions

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
              <div className="flex items-center gap-3 px-4 py-3 text-[#37322F] hover:bg-[#F7F5F3] rounded-lg cursor-pointer">
                <Home className="w-5 h-5" />
                <span className="font-medium">Dashboard</span>
              </div>
            </Link>
            <Link href="/dashboard/sessions">
              <div className="flex items-center gap-3 px-4 py-3 bg-[#37322F] text-white rounded-lg cursor-pointer">
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

          <div className="mt-auto pt-8">
            <Link href="/">
              <Button variant="outline" className="w-full bg-transparent">
                <LogOut className="w-4 h-4 mr-2" />
                Log Out
              </Button>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-[#37322F]">Session History</h1>
              <p className="text-[rgba(55,50,47,0.70)] mt-2">
                View all your uploaded teaching sessions with complete evaluation records
              </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                <CardHeader className="pb-3">
                  <CardDescription>Total Sessions</CardDescription>
                  <CardTitle className="text-4xl">{totalSessions}</CardTitle>
                </CardHeader>
              </Card>

              <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                <CardHeader className="pb-3">
                  <CardDescription>Average Score</CardDescription>
                  <CardTitle className="text-4xl">{averageScore.toFixed(1)}</CardTitle>
                </CardHeader>
              </Card>

              <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                <CardHeader className="pb-3">
                  <CardDescription>Completed Evaluations</CardDescription>
                  <CardTitle className="text-4xl">{sessions.filter((s) => s.hasEvaluation).length}</CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* Sessions List */}
            <Card className="bg-white border-[rgba(55,50,47,0.08)]">
              <CardContent className="p-6">
                <Tabs defaultValue="all" className="space-y-4">
                  <TabsList className="bg-[#F7F5F3]">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-white data-[state=active]:text-[#37322F]"
                    >
                      All Sessions ({totalSessions})
                    </TabsTrigger>
                    <TabsTrigger
                      value="recent"
                      className="data-[state=active]:bg-white data-[state=active]:text-[#37322F]"
                    >
                      Recent (3)
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-4">
                    {sessions.map((session) => (
                      <div
                        key={session.id}
                        className="flex items-center justify-between p-4 border border-[rgba(55,50,47,0.08)] rounded-lg hover:bg-[#F7F5F3] transition-colors"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-12 h-12 bg-[#37322F] rounded-lg flex items-center justify-center">
                            <Video className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-[#37322F]">{session.title}</h4>
                            <div className="flex items-center gap-4 text-sm text-[rgba(55,50,47,0.70)] mt-1">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {session.duration}
                              </span>
                              <span>{session.uploadDate}</span>
                              {session.hasEvaluation && (
                                <span className="flex items-center gap-1 text-green-600">
                                  <CheckCircle2 className="w-3 h-3" />
                                  Evaluation
                                </span>
                              )}
                              {session.hasFeedback && (
                                <span className="flex items-center gap-1 text-blue-600">
                                  <CheckCircle2 className="w-3 h-3" />
                                  Feedback
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          {session.status === "completed" && (
                            <>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-[#37322F]">{session.score}</div>
                                <div className="text-xs text-[rgba(55,50,47,0.70)]">Score</div>
                              </div>
                              <div className="flex gap-2">
                                <Link href={`/evaluation/${session.id}`}>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="bg-transparent hover:bg-[#37322F] hover:text-white"
                                  >
                                    <FileText className="w-4 h-4 mr-1" />
                                    Evaluation
                                  </Button>
                                </Link>
                                <Link href={`/feedback/${session.id}`}>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="bg-transparent hover:bg-[#37322F] hover:text-white"
                                  >
                                    <MessageSquare className="w-4 h-4 mr-1" />
                                    Feedback
                                  </Button>
                                </Link>
                              </div>
                            </>
                          )}

                          {session.status === "processing" && (
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full">
                              <div className="w-2 h-2 bg-blue-700 rounded-full animate-pulse"></div>
                              <span className="text-sm font-medium">Processing</span>
                            </div>
                          )}

                          {session.status === "pending" && (
                            <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full">
                              <AlertCircle className="w-4 h-4" />
                              <span className="text-sm font-medium">Pending</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="recent" className="space-y-4">
                    {sessions.slice(0, 3).map((session) => (
                      <div
                        key={session.id}
                        className="flex items-center justify-between p-4 border border-[rgba(55,50,47,0.08)] rounded-lg hover:bg-[#F7F5F3] transition-colors"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-12 h-12 bg-[#37322F] rounded-lg flex items-center justify-center">
                            <Video className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-[#37322F]">{session.title}</h4>
                            <div className="flex items-center gap-4 text-sm text-[rgba(55,50,47,0.70)] mt-1">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {session.duration}
                              </span>
                              <span>{session.uploadDate}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          {session.status === "completed" && (
                            <>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-[#37322F]">{session.score}</div>
                                <div className="text-xs text-[rgba(55,50,47,0.70)]">Score</div>
                              </div>
                              <div className="flex gap-2">
                                <Link href={`/evaluation/${session.id}`}>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="bg-transparent hover:bg-[#37322F] hover:text-white"
                                  >
                                    <FileText className="w-4 h-4 mr-1" />
                                    Evaluation
                                  </Button>
                                </Link>
                                <Link href={`/feedback/${session.id}`}>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="bg-transparent hover:bg-[#37322F] hover:text-white"
                                  >
                                    <MessageSquare className="w-4 h-4 mr-1" />
                                    Feedback
                                  </Button>
                                </Link>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
