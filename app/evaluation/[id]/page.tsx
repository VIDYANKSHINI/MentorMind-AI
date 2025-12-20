"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import {
  ArrowLeft,
  Download,
  TrendingUp,
  Brain,
  Video,
  Users,
  Eye,
  Award,
  CheckCircle2,
  AlertTriangle,
  MessageSquare,
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
} from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

interface Parameter {
  name: string
  score: number
  weight: number
  icon: any
  color: string
}

export default function EvaluationReport() {
  const params = useParams()
  const sessionId = params.id as string

  const [scores, setScores] = useState<any>(null)

  useEffect(() => {
    // Generate scores with some randomness based on sessionId
    const seed = Number.parseInt(sessionId) || 12345
    const random = (min: number, max: number, index: number) => {
      const x = Math.sin(seed + index) * 10000
      return min + (x - Math.floor(x)) * (max - min)
    }

    const generatedScores = {
      clarity: Number((7.5 + random(0, 2, 1)).toFixed(1)),
      engagement: Number((7.8 + random(0, 2, 2)).toFixed(1)),
      tone: Number((7.2 + random(0, 2.5, 3)).toFixed(1)),
      pacing: Number((7.0 + random(0, 2, 4)).toFixed(1)),
      technical: Number((7.5 + random(0, 2, 5)).toFixed(1)),
    }

    const overall = Number(
      (
        generatedScores.clarity * 0.2 +
        generatedScores.engagement * 0.2 +
        generatedScores.tone * 0.15 +
        generatedScores.pacing * 0.15 +
        generatedScores.technical * 0.3
      ).toFixed(1),
    )

    setScores({ ...generatedScores, overall })
  }, [sessionId])

  if (!scores) {
    return (
      <div className="min-h-screen bg-[#F7F5F3] flex items-center justify-center">
        <div className="animate-pulse text-[#37322F]">Loading evaluation...</div>
      </div>
    )
  }

  const overallScore = scores.overall
  const teachingLevel =
    overallScore >= 9 ? "Expert" : overallScore >= 8 ? "Advanced" : overallScore >= 7 ? "Proficient" : "Developing"
  const sessionTitle = "Introduction to Machine Learning - Week 1"

  const parameters: Parameter[] = [
    { name: "Clarity", score: scores.clarity, weight: 20, icon: Eye, color: "text-blue-600" },
    { name: "Engagement", score: scores.engagement, weight: 20, icon: Users, color: "text-green-600" },
    { name: "Tone & Confidence", score: scores.tone, weight: 15, icon: Video, color: "text-purple-600" },
    { name: "Pacing", score: scores.pacing, weight: 15, icon: Brain, color: "text-orange-600" },
    { name: "Technical Depth", score: scores.technical, weight: 30, icon: Award, color: "text-pink-600" },
  ]

  const barChartData = parameters.map((p) => ({
    name: p.name,
    score: p.score,
    weight: p.weight,
  }))

  const radarChartData = parameters.map((p) => ({
    parameter: p.name.replace(" & ", "\n"),
    score: p.score,
    fullMark: 10,
  }))

  const sortedParams = [...parameters].sort((a, b) => b.score - a.score)
  const bestParam = sortedParams[0]
  const worstParam = sortedParams[sortedParams.length - 1]

  const strengths = [
    `Excellent ${bestParam.name.toLowerCase()} with a score of ${bestParam.score}/10 - this is a strong foundation`,
    `Clear and professional tone throughout the session that maintains student attention`,
    `Good balance between theory and practical applications in your explanations`,
    `Consistent delivery that shows preparation and subject matter expertise`,
  ]

  const weaknesses = [
    `${worstParam.name} scored ${worstParam.score}/10 - focus on improving this area for better overall performance`,
    worstParam.name === "Pacing"
      ? "Some sections felt rushed while others moved too slowly - work on timing consistency"
      : "",
    worstParam.name === "Technical Depth" ? "Consider adding more advanced examples and exploring edge cases" : "",
    worstParam.name === "Clarity" ? "Some explanations could be more structured and easier to follow" : "",
    worstParam.name === "Engagement" ? "Try incorporating more interactive elements and real-world examples" : "",
    worstParam.name === "Tone & Confidence" ? "Work on varying your vocal tone to maintain engagement" : "",
  ].filter(Boolean)

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
              <h1 className="text-3xl font-semibold text-[#37322F]">Evaluation Report</h1>
              <p className="text-[rgba(55,50,47,0.70)] mt-1">{sessionTitle}</p>
            </div>
          </div>
          <Button className="bg-[#37322F] hover:bg-[#37322F]/90 text-white">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
        </div>

        {/* Overall Score Card */}
        <Card className="bg-white border-[rgba(55,50,47,0.08)] mb-8">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium text-[rgba(55,50,47,0.70)] mb-2">Overall Teaching Score</h2>
                <div className="flex items-end gap-3">
                  <div className="text-6xl font-bold text-[#37322F]">{overallScore}</div>
                  <div className="text-2xl text-[rgba(55,50,47,0.60)] mb-2">/10</div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="px-4 py-2 bg-[#37322F] text-white rounded-lg font-medium">{teachingLevel} Level</div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-green-600">Strong performance across parameters</span>
                  </div>
                </div>
              </div>
              <div className="w-48 h-48 relative">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="96" cy="96" r="80" stroke="#E0DEDB" strokeWidth="12" fill="none" />
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="#37322F"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${(overallScore / 10) * 502.4} 502.4`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#37322F]">{overallScore}</div>
                    <div className="text-sm text-[rgba(55,50,47,0.60)]">out of 10</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Graphical Visualization Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Bar Chart with Weights */}
          <Card className="bg-white border-[rgba(55,50,47,0.08)]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#37322F]">Score Distribution</CardTitle>
              <CardDescription>Parameter scores with evaluation weights</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  score: {
                    label: "Score",
                    color: "#37322F",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0DEDB" />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#37322F", fontSize: 11 }}
                      angle={-45}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis
                      domain={[0, 10]}
                      tick={{ fill: "#37322F" }}
                      label={{ value: "Score", angle: -90, position: "insideLeft", fill: "#37322F" }}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-3 border border-[rgba(55,50,47,0.08)] rounded-lg shadow-lg">
                              <p className="font-semibold text-[#37322F]">{payload[0].payload.name}</p>
                              <p className="text-sm text-[rgba(55,50,47,0.70)]">Score: {payload[0].value}/10</p>
                              <p className="text-sm text-[rgba(55,50,47,0.70)]">Weight: {payload[0].payload.weight}%</p>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Bar dataKey="score" fill="#37322F" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Radar Chart */}
          <Card className="bg-white border-[rgba(55,50,47,0.08)]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#37322F]">Performance Profile</CardTitle>
              <CardDescription>Comprehensive view of teaching effectiveness</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  score: {
                    label: "Score",
                    color: "#37322F",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarChartData}>
                    <PolarGrid stroke="#E0DEDB" />
                    <PolarAngleAxis dataKey="parameter" tick={{ fill: "#37322F", fontSize: 11 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fill: "#37322F", fontSize: 10 }} />
                    <Radar
                      name="Your Score"
                      dataKey="score"
                      stroke="#37322F"
                      fill="#37322F"
                      fillOpacity={0.6}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Parameter Breakdown */}
        <Card className="bg-white border-[rgba(55,50,47,0.08)] mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-[#37322F]">Detailed Parameter Breakdown</CardTitle>
            <CardDescription>Comprehensive evaluation across key teaching dimensions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {parameters.map((param) => {
              const Icon = param.icon
              return (
                <div key={param.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-[#F7F5F3] flex items-center justify-center ${param.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#37322F]">{param.name}</div>
                        <div className="text-sm text-[rgba(55,50,47,0.60)]">Weight: {param.weight}%</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#37322F]">{param.score}</div>
                      <div className="text-sm text-[rgba(55,50,47,0.60)]">/10</div>
                    </div>
                  </div>
                  <Progress value={param.score * 10} className="h-3" />
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Strengths and Weaknesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white border-[rgba(55,50,47,0.08)]">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <CardTitle className="text-lg font-semibold text-[#37322F]">Strengths</CardTitle>
              </div>
              <CardDescription>AI-identified areas of excellence</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <span className="text-[rgba(55,50,47,0.80)] leading-relaxed">{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-[rgba(55,50,47,0.08)]">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <CardTitle className="text-lg font-semibold text-[#37322F]">Areas for Improvement</CardTitle>
              </div>
              <CardDescription>AI-identified opportunities to enhance teaching</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {weaknesses.map((weakness, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
                    <span className="text-[rgba(55,50,47,0.80)] leading-relaxed">{weakness}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Personalized Improvement Resources */}
        <Card className="bg-white border-[rgba(55,50,47,0.08)] mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-[#37322F]" />
              <CardTitle className="text-xl font-semibold text-[#37322F]">Personalized Improvement Resources</CardTitle>
            </div>
            <CardDescription>
              Curated videos and resources to enhance your {worstParam.name.toLowerCase()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-[#F7F5F3] rounded-lg border border-[rgba(55,50,47,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="w-32 h-20 bg-[#37322F] rounded flex items-center justify-center flex-shrink-0">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#37322F] mb-1">
                      {worstParam.name === "Pacing" && "Mastering Teaching Pacing: Finding Your Rhythm"}
                      {worstParam.name === "Clarity" && "Crystal Clear Teaching: Structuring Explanations"}
                      {worstParam.name === "Engagement" && "Engagement Strategies for Modern Classrooms"}
                      {worstParam.name === "Tone & Confidence" && "Vocal Confidence and Tone Mastery for Educators"}
                      {worstParam.name === "Technical Depth" &&
                        "Deepening Technical Content Without Overwhelming Students"}
                    </h4>
                    <p className="text-sm text-[rgba(55,50,47,0.70)] mb-2">
                      Expert strategies specifically focused on improving your {worstParam.name.toLowerCase()}
                    </p>
                    <Button variant="outline" size="sm" className="text-[#37322F] bg-transparent">
                      Watch Video
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F7F5F3] rounded-lg border border-[rgba(55,50,47,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="w-32 h-20 bg-[#37322F] rounded flex items-center justify-center flex-shrink-0">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#37322F] mb-1">Advanced Teaching Techniques: A Masterclass</h4>
                    <p className="text-sm text-[rgba(55,50,47,0.70)] mb-2">
                      Comprehensive guide covering all five evaluation parameters with actionable tips
                    </p>
                    <Button variant="outline" size="sm" className="text-[#37322F] bg-transparent">
                      Watch Video
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F7F5F3] rounded-lg border border-[rgba(55,50,47,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="w-32 h-20 bg-[#37322F] rounded flex items-center justify-center flex-shrink-0">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#37322F] mb-1">Learning from Top-Rated Educators</h4>
                    <p className="text-sm text-[rgba(55,50,47,0.70)] mb-2">
                      See examples of highly-rated teaching sessions and what makes them effective
                    </p>
                    <Button variant="outline" size="sm" className="text-[#37322F] bg-transparent">
                      Watch Video
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed AI Feedback */}
        <Card className="bg-white border-[rgba(55,50,47,0.08)]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#37322F]" />
              <CardTitle className="text-xl font-semibold text-[#37322F]">Detailed AI Feedback</CardTitle>
            </div>
            <CardDescription>Timestamped comments throughout your session</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">{/* Placeholder for detailed feedback */}</div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Link href={`/feedback/${1}`}>
            <Button variant="outline" className="bg-white">
              View Student Feedback
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="bg-[#37322F] hover:bg-[#37322F]/90 text-white">Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
