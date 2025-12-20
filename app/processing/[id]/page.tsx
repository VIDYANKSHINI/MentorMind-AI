"use client"

import { useEffect, useState } from "react"
import { useParams, useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Video, Loader2, CheckCircle2 } from "lucide-react"

interface EvaluationStep {
  name: string
  status: "pending" | "processing" | "completed"
  progress: number
}

export default function ProcessingPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const sessionId = params.id as string
  const title = searchParams.get("title") || "Untitled Session"

  const [steps, setSteps] = useState<EvaluationStep[]>([
    { name: "Processing video file", status: "processing", progress: 0 },
    { name: "Analyzing Clarity", status: "pending", progress: 0 },
    { name: "Evaluating Engagement", status: "pending", progress: 0 },
    { name: "Assessing Tone & Confidence", status: "pending", progress: 0 },
    { name: "Measuring Pacing", status: "pending", progress: 0 },
    { name: "Evaluating Technical Depth", status: "pending", progress: 0 },
    { name: "Generating recommendations", status: "pending", progress: 0 },
  ])

  const [overallProgress, setOverallProgress] = useState(0)

  useEffect(() => {
    let currentStep = 0
    const totalSteps = steps.length

    const interval = setInterval(() => {
      setSteps((prev) => {
        const updated = [...prev]

        // Update current step progress
        if (currentStep < totalSteps) {
          updated[currentStep].status = "processing"
          updated[currentStep].progress += 10

          // If current step is complete, move to next
          if (updated[currentStep].progress >= 100) {
            updated[currentStep].status = "completed"
            currentStep++
          }
        }

        return updated
      })

      // Update overall progress
      const newOverallProgress = ((currentStep + 0.5) / totalSteps) * 100
      setOverallProgress(Math.min(newOverallProgress, 100))

      // When all steps are complete, redirect to evaluation
      if (currentStep >= totalSteps) {
        clearInterval(interval)
        setTimeout(() => {
          router.push(`/evaluation/${sessionId}`)
        }, 1000)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [sessionId, router, steps.length])

  return (
    <div className="min-h-screen bg-[#F7F5F3] flex items-center justify-center p-8">
      <Card className="w-full max-w-3xl bg-white border-[rgba(55,50,47,0.08)]">
        <CardHeader className="text-center pb-4">
          <div className="w-20 h-20 bg-[#37322F] rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-10 h-10 text-white animate-pulse" />
          </div>
          <CardTitle className="text-2xl font-semibold text-[#37322F]">AI Evaluation in Progress</CardTitle>
          <p className="text-[rgba(55,50,47,0.70)] mt-2">{title}</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Overall Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[rgba(55,50,47,0.70)]">Overall Progress</span>
              <span className="font-medium text-[#37322F]">{Math.round(overallProgress)}%</span>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </div>

          {/* Individual Steps */}
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-all ${
                  step.status === "completed"
                    ? "bg-green-50 border-green-200"
                    : step.status === "processing"
                      ? "bg-blue-50 border-blue-200"
                      : "bg-[#F7F5F3] border-[rgba(55,50,47,0.08)]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {step.status === "completed" ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : step.status === "processing" ? (
                      <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-[rgba(55,50,47,0.20)]" />
                    )}
                    <span
                      className={`font-medium ${
                        step.status === "pending" ? "text-[rgba(55,50,47,0.50)]" : "text-[#37322F]"
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                  {step.status === "processing" && (
                    <span className="text-sm text-blue-600 font-medium">{step.progress}%</span>
                  )}
                </div>
                {step.status === "processing" && <Progress value={step.progress} className="h-1.5" />}
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <Video className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-blue-900">
              Our AI is analyzing your teaching session across all five parameters. This usually takes 30-60 seconds.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
