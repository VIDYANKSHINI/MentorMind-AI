"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  ArrowLeft,
  Star,
  MessageSquare,
  Video,
  Mic,
  Ear,
  Eye,
  Volume2,
  Type,
  Accessibility,
  TrendingUp,
  Users,
} from "lucide-react"

interface StudentFeedback {
  id: string
  studentName: string
  rating: number
  comment: string
  date: string
  type: "text" | "audio" | "video"
}

interface AccessibilityInsight {
  category: string
  studentGroup: string
  feedback: string
  impact: "positive" | "negative" | "neutral"
  icon: any
}

export default function StudentFeedbackPage() {
  const sessionTitle = "Introduction to Machine Learning - Week 1"

  const overallRating = 4.6
  const totalStudents = 48
  const responseRate = 87

  const feedbackData: StudentFeedback[] = [
    {
      id: "1",
      studentName: "Sarah Johnson",
      rating: 5,
      comment:
        "Excellent explanation of complex concepts. The visual aids really helped me understand gradient descent.",
      date: "2025-01-16",
      type: "text",
    },
    {
      id: "2",
      studentName: "Michael Chen",
      rating: 4,
      comment: "Good session overall, but could use more time for questions at the end.",
      date: "2025-01-16",
      type: "text",
    },
    {
      id: "3",
      studentName: "Emma Davis",
      rating: 5,
      comment: "The pacing was perfect and examples were very relevant to real-world applications.",
      date: "2025-01-16",
      type: "audio",
    },
    {
      id: "4",
      studentName: "James Wilson",
      rating: 4,
      comment: "Appreciated the clear communication style. Would love more interactive coding exercises.",
      date: "2025-01-16",
      type: "video",
    },
  ]

  const accessibilityInsights: AccessibilityInsight[] = [
    {
      category: "Caption Clarity",
      studentGroup: "Deaf Students",
      feedback:
        "Captions were accurate and well-timed. Technical terminology was correctly transcribed, making the content fully accessible.",
      impact: "positive",
      icon: Ear,
    },
    {
      category: "Caption Readability",
      studentGroup: "Deaf Students",
      feedback: "Font size and contrast were excellent. Recommend maintaining this standard for future sessions.",
      impact: "positive",
      icon: Type,
    },
    {
      category: "Audio Clarity",
      studentGroup: "Blind Students",
      feedback:
        "Voice clarity was excellent. All visual elements were verbally described, providing complete context for understanding.",
      impact: "positive",
      icon: Volume2,
    },
    {
      category: "Visual Descriptions",
      studentGroup: "Blind Students",
      feedback:
        "Diagrams and charts were well-explained verbally. Consider adding more detailed descriptions for complex mathematical notations.",
      impact: "neutral",
      icon: Eye,
    },
    {
      category: "Text Interaction",
      studentGroup: "Mute Students",
      feedback:
        "Chat functionality worked well for questions. All text-based interactions were acknowledged and addressed.",
      impact: "positive",
      icon: MessageSquare,
    },
    {
      category: "Voice Interaction",
      studentGroup: "Students Who Cannot Write",
      feedback:
        "Voice-to-text feature enabled seamless participation. Audio responses were transcribed accurately for record-keeping.",
      impact: "positive",
      icon: Mic,
    },
  ]

  const ratingDistribution = [
    { stars: 5, count: 28, percentage: 58 },
    { stars: 4, count: 15, percentage: 31 },
    { stars: 3, count: 4, percentage: 8 },
    { stars: 2, count: 1, percentage: 2 },
    { stars: 1, count: 0, percentage: 0 },
  ]

  return (
    <div className="min-h-screen bg-[#F7F5F3]">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" size="icon" className="bg-white">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-semibold text-[#37322F]">Student Feedback & Accessibility Insights</h1>
              <p className="text-[rgba(55,50,47,0.70)] mt-1">{sessionTitle}</p>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white border-[rgba(55,50,47,0.08)]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[rgba(55,50,47,0.70)] mb-2">Overall Rating</div>
                  <div className="flex items-end gap-2">
                    <div className="text-4xl font-bold text-[#37322F]">{overallRating}</div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(overallRating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <Star className="w-12 h-12 text-yellow-500 fill-yellow-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-[rgba(55,50,47,0.08)]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[rgba(55,50,47,0.70)] mb-2">Total Students</div>
                  <div className="text-4xl font-bold text-[#37322F]">{totalStudents}</div>
                </div>
                <Users className="w-12 h-12 text-[#37322F] opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-[rgba(55,50,47,0.08)]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[rgba(55,50,47,0.70)] mb-2">Response Rate</div>
                  <div className="flex items-end gap-2">
                    <div className="text-4xl font-bold text-[#37322F]">{responseRate}%</div>
                    <TrendingUp className="w-5 h-5 text-green-600 mb-2" />
                  </div>
                </div>
                <MessageSquare className="w-12 h-12 text-[#37322F] opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Rating Distribution */}
        <Card className="bg-white border-[rgba(55,50,47,0.08)] mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-[#37322F]">Rating Distribution</CardTitle>
            <CardDescription>Breakdown of student ratings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-20">
                    <span className="text-sm font-medium text-[#37322F]">{item.stars}</span>
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  </div>
                  <Progress value={item.percentage} className="flex-1 h-3" />
                  <div className="w-16 text-right text-sm text-[rgba(55,50,47,0.70)]">
                    {item.count} ({item.percentage}%)
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="feedback" className="space-y-6">
          <TabsList className="bg-white border border-[rgba(55,50,47,0.08)]">
            <TabsTrigger value="feedback" className="data-[state=active]:bg-[#37322F] data-[state=active]:text-white">
              Student Feedback
            </TabsTrigger>
            <TabsTrigger
              value="accessibility"
              className="data-[state=active]:bg-[#37322F] data-[state=active]:text-white"
            >
              Accessibility Insights
            </TabsTrigger>
          </TabsList>

          {/* Student Feedback Tab */}
          <TabsContent value="feedback" className="space-y-4">
            {feedbackData.map((feedback) => (
              <Card key={feedback.id} className="bg-white border-[rgba(55,50,47,0.08)]">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#37322F] rounded-full flex items-center justify-center text-white font-semibold">
                        {feedback.studentName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-[#37322F]">{feedback.studentName}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < feedback.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-[rgba(55,50,47,0.60)]">{feedback.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {feedback.type === "audio" && (
                        <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full flex items-center gap-1">
                          <Mic className="w-3 h-3" />
                          <span className="text-xs font-medium">Audio</span>
                        </div>
                      )}
                      {feedback.type === "video" && (
                        <div className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full flex items-center gap-1">
                          <Video className="w-3 h-3" />
                          <span className="text-xs font-medium">Video</span>
                        </div>
                      )}
                      {feedback.type === "text" && (
                        <div className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full flex items-center gap-1">
                          <Type className="w-3 h-3" />
                          <span className="text-xs font-medium">Text</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-[rgba(55,50,47,0.80)] leading-relaxed">{feedback.comment}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Accessibility Insights Tab */}
          <TabsContent value="accessibility" className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-[rgba(55,50,47,0.08)]">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#37322F] rounded-lg flex items-center justify-center">
                    <Accessibility className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-[#37322F]">
                      Inclusive Teaching Impact Analysis
                    </CardTitle>
                    <CardDescription>How your teaching quality impacts different accessibility groups</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[rgba(55,50,47,0.80)] leading-relaxed">
                  Your session was evaluated by students with diverse accessibility needs, providing comprehensive
                  insights into how effectively your teaching reaches all learners.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accessibilityInsights.map((insight, index) => {
                const Icon = insight.icon
                return (
                  <Card key={index} className="bg-white border-[rgba(55,50,47,0.08)]">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            insight.impact === "positive"
                              ? "bg-green-100"
                              : insight.impact === "negative"
                                ? "bg-red-100"
                                : "bg-yellow-100"
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 ${
                              insight.impact === "positive"
                                ? "text-green-600"
                                : insight.impact === "negative"
                                  ? "text-red-600"
                                  : "text-yellow-600"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#37322F] mb-1">{insight.category}</h3>
                          <div className="text-sm text-[rgba(55,50,47,0.70)] mb-3">{insight.studentGroup}</div>
                          <p className="text-[rgba(55,50,47,0.80)] leading-relaxed text-sm">{insight.feedback}</p>
                        </div>
                      </div>
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          insight.impact === "positive"
                            ? "bg-green-100 text-green-700"
                            : insight.impact === "negative"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {insight.impact === "positive"
                          ? "Positive Impact"
                          : insight.impact === "negative"
                            ? "Needs Attention"
                            : "Room for Improvement"}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Link href="/dashboard">
            <Button className="bg-[#37322F] hover:bg-[#37322F]/90 text-white">Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
