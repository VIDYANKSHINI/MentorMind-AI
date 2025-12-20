"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  Trophy,
  Medal,
  Star,
  TrendingUp,
  Award,
  Target,
  Zap,
  Heart,
  Eye,
  Users,
  Crown,
  Flame,
  Brain,
  Home,
  Video,
  Settings,
} from "lucide-react"

interface Mentor {
  id: string
  name: string
  department: string
  score: number
  aiScore: number
  studentFeedback: number
  accessibilityEngagement: number
  rank: number
  badge?: string
  avatar: string
  trend: "up" | "down" | "stable"
}

interface Badge {
  id: string
  name: string
  description: string
  icon: any
  color: string
  earned: boolean
  progress: number
  earnedDate?: string
}

export default function LeaderboardPage() {
  const currentUser = {
    name: "You",
    rank: 3,
    score: 8.95,
  }

  const mentors: Mentor[] = [
    {
      id: "1",
      name: "Dr. Sarah Mitchell",
      department: "Computer Science",
      score: 9.42,
      aiScore: 9.5,
      studentFeedback: 4.8,
      accessibilityEngagement: 92,
      rank: 1,
      badge: "Accessibility Champion",
      avatar: "SM",
      trend: "up",
    },
    {
      id: "2",
      name: "Prof. James Chen",
      department: "Data Science",
      score: 9.18,
      aiScore: 9.3,
      studentFeedback: 4.7,
      accessibilityEngagement: 89,
      rank: 2,
      badge: "Clarity Master",
      avatar: "JC",
      trend: "stable",
    },
    {
      id: "3",
      name: "You",
      department: "Machine Learning",
      score: 8.95,
      aiScore: 8.7,
      studentFeedback: 4.6,
      accessibilityEngagement: 94,
      rank: 3,
      badge: "Most Improved",
      avatar: "YO",
      trend: "up",
    },
    {
      id: "4",
      name: "Dr. Emily Rodriguez",
      department: "Artificial Intelligence",
      score: 8.83,
      aiScore: 9.0,
      studentFeedback: 4.5,
      accessibilityEngagement: 86,
      rank: 4,
      avatar: "ER",
      trend: "down",
    },
    {
      id: "5",
      name: "Prof. Michael Thompson",
      department: "Software Engineering",
      score: 8.67,
      aiScore: 8.8,
      studentFeedback: 4.4,
      accessibilityEngagement: 85,
      rank: 5,
      badge: "Engagement Pro",
      avatar: "MT",
      trend: "up",
    },
  ]

  const badges: Badge[] = [
    {
      id: "1",
      name: "Accessibility Champion",
      description: "Achieve 90+ accessibility engagement score for 5 consecutive sessions",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      earned: true,
      progress: 100,
      earnedDate: "2025-01-10",
    },
    {
      id: "2",
      name: "Clarity Master",
      description: "Score 9.5+ in Clarity parameter across 10 sessions",
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
      earned: false,
      progress: 70,
    },
    {
      id: "3",
      name: "Engagement Pro",
      description: "Maintain 4.5+ student engagement rating for 3 months",
      icon: Users,
      color: "from-purple-500 to-indigo-500",
      earned: false,
      progress: 85,
    },
    {
      id: "4",
      name: "Most Improved Mentor",
      description: "Increase overall score by 1.5+ points in one month",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      earned: true,
      progress: 100,
      earnedDate: "2025-01-05",
    },
    {
      id: "5",
      name: "Perfect Score",
      description: "Achieve 10/10 overall score in any session",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      earned: false,
      progress: 87,
    },
    {
      id: "6",
      name: "Consistency King",
      description: "Upload and complete evaluation for 30 consecutive days",
      icon: Flame,
      color: "from-orange-500 to-red-500",
      earned: false,
      progress: 45,
    },
    {
      id: "7",
      name: "Innovation Award",
      description: "Receive 10+ 5-star reviews for creative teaching methods",
      icon: Zap,
      color: "from-violet-500 to-purple-500",
      earned: false,
      progress: 60,
    },
    {
      id: "8",
      name: "Elite Educator",
      description: "Rank in top 5 for 6 consecutive months",
      icon: Crown,
      color: "from-amber-500 to-yellow-500",
      earned: false,
      progress: 33,
    },
  ]

  const progressOverTime = [
    { month: "Aug", score: 7.8 },
    { month: "Sep", score: 8.1 },
    { month: "Oct", score: 8.3 },
    { month: "Nov", score: 8.5 },
    { month: "Dec", score: 8.7 },
    { month: "Jan", score: 8.95 },
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
              <div className="flex items-center gap-3 px-4 py-3 bg-[#37322F] text-white rounded-lg cursor-pointer">
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
              <h1 className="text-3xl font-semibold text-[#37322F] mb-2">Leaderboard & Achievements</h1>
              <p className="text-[rgba(55,50,47,0.70)]">Track your progress and compete with fellow educators</p>
            </div>

            {/* Your Rank Card */}
            <Card className="bg-gradient-to-br from-[#37322F] to-[#2F3037] text-white mb-8 border-none">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/70 mb-2">Your Current Rank</div>
                    <div className="flex items-end gap-4">
                      <div className="text-6xl font-bold">#{currentUser.rank}</div>
                      <div className="mb-3">
                        <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-sm font-medium text-green-400">+2 from last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white/70 mb-2">Overall Score</div>
                    <div className="text-5xl font-bold">{currentUser.score}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="leaderboard" className="space-y-6">
              <TabsList className="bg-white border border-[rgba(55,50,47,0.08)]">
                <TabsTrigger
                  value="leaderboard"
                  className="data-[state=active]:bg-[#37322F] data-[state=active]:text-white"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  Leaderboard
                </TabsTrigger>
                <TabsTrigger value="badges" className="data-[state=active]:bg-[#37322F] data-[state=active]:text-white">
                  <Medal className="w-4 h-4 mr-2" />
                  Badges
                </TabsTrigger>
                <TabsTrigger
                  value="progress"
                  className="data-[state=active]:bg-[#37322F] data-[state=active]:text-white"
                >
                  <Target className="w-4 h-4 mr-2" />
                  Progress
                </TabsTrigger>
              </TabsList>

              {/* Leaderboard Tab */}
              <TabsContent value="leaderboard">
                <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#37322F]">Top Mentors</CardTitle>
                    <CardDescription>
                      Rankings based on AI score, student feedback, and accessibility engagement
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mentors.map((mentor) => (
                        <div
                          key={mentor.id}
                          className={`flex items-center justify-between p-6 rounded-lg border transition-all ${
                            mentor.name === "You"
                              ? "bg-[#F7F5F3] border-[#37322F] border-2"
                              : "bg-white border-[rgba(55,50,47,0.08)] hover:shadow-md"
                          }`}
                        >
                          <div className="flex items-center gap-6 flex-1">
                            {/* Rank */}
                            <div className="w-12 text-center">
                              {mentor.rank === 1 && <Crown className="w-8 h-8 text-yellow-500 mx-auto" />}
                              {mentor.rank === 2 && <Medal className="w-8 h-8 text-gray-400 mx-auto" />}
                              {mentor.rank === 3 && <Medal className="w-8 h-8 text-amber-600 mx-auto" />}
                              {mentor.rank > 3 && (
                                <div className="text-2xl font-bold text-[rgba(55,50,47,0.60)]">#{mentor.rank}</div>
                              )}
                            </div>

                            {/* Avatar */}
                            <div className="w-16 h-16 bg-[#37322F] rounded-full flex items-center justify-center text-white font-bold text-xl">
                              {mentor.avatar}
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h3 className="text-lg font-semibold text-[#37322F]">{mentor.name}</h3>
                                {mentor.badge && (
                                  <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-medium rounded-full">
                                    {mentor.badge}
                                  </div>
                                )}
                                {mentor.trend === "up" && <TrendingUp className="w-4 h-4 text-green-600" />}
                              </div>
                              <div className="text-sm text-[rgba(55,50,47,0.70)]">{mentor.department}</div>
                              <div className="flex items-center gap-6 mt-2 text-sm">
                                <span className="flex items-center gap-1">
                                  <Brain className="w-4 h-4 text-purple-600" />
                                  AI: {mentor.aiScore}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-500" />
                                  Students: {mentor.studentFeedback}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Heart className="w-4 h-4 text-pink-600" />
                                  Access: {mentor.accessibilityEngagement}%
                                </span>
                              </div>
                            </div>

                            {/* Score */}
                            <div className="text-right">
                              <div className="text-3xl font-bold text-[#37322F]">{mentor.score}</div>
                              <div className="text-sm text-[rgba(55,50,47,0.60)]">Overall</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Badges Tab */}
              <TabsContent value="badges">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {badges.map((badge) => {
                    const Icon = badge.icon
                    return (
                      <Card
                        key={badge.id}
                        className={`border-2 transition-all ${
                          badge.earned
                            ? "bg-white border-[#37322F] shadow-lg"
                            : "bg-white border-[rgba(55,50,47,0.08)] opacity-70"
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center text-center">
                            <div
                              className={`w-20 h-20 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center mb-4 ${!badge.earned && "grayscale"}`}
                            >
                              <Icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="font-semibold text-[#37322F] mb-2">{badge.name}</h3>
                            <p className="text-sm text-[rgba(55,50,47,0.70)] mb-4">{badge.description}</p>

                            {badge.earned ? (
                              <div className="w-full">
                                <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-2">
                                  Earned
                                </div>
                                <div className="text-xs text-[rgba(55,50,47,0.60)]">{badge.earnedDate}</div>
                              </div>
                            ) : (
                              <div className="w-full">
                                <Progress value={badge.progress} className="h-2 mb-2" />
                                <div className="text-sm font-medium text-[#37322F]">{badge.progress}% Complete</div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>

              {/* Progress Tab */}
              <TabsContent value="progress">
                <Card className="bg-white border-[rgba(55,50,47,0.08)]">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#37322F]">Progress Over Time</CardTitle>
                    <CardDescription>Track your improvement over the past 6 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Chart */}
                      <div className="h-64 flex items-end justify-between gap-4">
                        {progressOverTime.map((data, index) => (
                          <div key={index} className="flex-1 flex flex-col items-center gap-2">
                            <div className="relative w-full bg-[#F7F5F3] rounded-t-lg overflow-hidden h-full flex items-end">
                              <div
                                className="w-full bg-gradient-to-t from-[#37322F] to-[#2F3037] rounded-t-lg transition-all hover:opacity-80"
                                style={{ height: `${data.score * 10}%` }}
                              >
                                <div className="absolute top-2 left-0 right-0 text-center text-white text-sm font-semibold">
                                  {data.score}
                                </div>
                              </div>
                            </div>
                            <div className="text-sm font-medium text-[rgba(55,50,47,0.70)]">{data.month}</div>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[rgba(55,50,47,0.08)]">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">+1.15</div>
                          <div className="text-sm text-[rgba(55,50,47,0.70)]">Points Gained</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600 mb-2">14.7%</div>
                          <div className="text-sm text-[rgba(55,50,47,0.70)]">Improvement Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                          <div className="text-sm text-[rgba(55,50,47,0.70)]">Badges Earned</div>
                        </div>
                      </div>
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
