"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Fingerprint, Lock, Mail } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const DEMO_CREDENTIALS = {
  email: "professor@mentormind.ai",
  id: "USER123456",
  password: "demo123",
}

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [emailOrId, setEmailOrId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 800))

    // Validate credentials
    const isValidEmail = emailOrId.toLowerCase() === DEMO_CREDENTIALS.email.toLowerCase()
    const isValidId = emailOrId.toUpperCase() === DEMO_CREDENTIALS.id.toUpperCase()
    const isValidPassword = password === DEMO_CREDENTIALS.password

    if ((isValidEmail || isValidId) && isValidPassword) {
      // Store authentication state
      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("userEmail", DEMO_CREDENTIALS.email)
      localStorage.setItem("userId", DEMO_CREDENTIALS.id)

      // Redirect to dashboard
      router.push("/dashboard")
    } else {
      setError("Invalid email/ID or password. Try: professor@mentormind.ai / demo123")
      setIsLoading(false)
    }
  }

  const handleBiometricLogin = async () => {
    setError("")
    setIsLoading(true)

    if (window.PublicKeyCredential) {
      try {
        const available = await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()

        if (available) {
          await new Promise((resolve) => setTimeout(resolve, 1500))

          // Store authentication state
          localStorage.setItem("isAuthenticated", "true")
          localStorage.setItem("userEmail", DEMO_CREDENTIALS.email)
          localStorage.setItem("userId", DEMO_CREDENTIALS.id)

          // Redirect to dashboard
          router.push("/dashboard")
        } else {
          setError("Fingerprint authentication is not available on this device")
          setIsLoading(false)
        }
      } catch (error) {
        console.error("Biometric auth error:", error)
        setError("Fingerprint authentication failed")
        setIsLoading(false)
      }
    } else {
      setError("Biometric authentication is not supported in this browser")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f5f3] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-[#37322f]/10 shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="text-[#37322f] font-semibold text-2xl">MentorMind AI</div>
          </div>
          <CardTitle className="text-2xl text-center text-[#37322f]">Welcome back</CardTitle>
          <CardDescription className="text-center text-[#37322f]/60">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
            <p className="font-medium text-blue-900 mb-1">Demo Credentials:</p>
            <p className="text-blue-800">Email: professor@mentormind.ai</p>
            <p className="text-blue-800">Password: demo123</p>
          </div>

          {error && <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-800">{error}</div>}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#37322f]">
                Email or ID
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#37322f]/40" />
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your email or ID"
                  className="pl-10 border-[#37322f]/20 focus:border-[#37322f]/40"
                  value={emailOrId}
                  onChange={(e) => setEmailOrId(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#37322f]">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#37322f]/40" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10 border-[#37322f]/20 focus:border-[#37322f]/40"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-[#37322f]/20" />
                <span className="text-[#37322f]/60">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-[#37322f] hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full bg-[#37322f] hover:bg-[#37322f]/90 text-white" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Login"}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#37322f]/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-[#37322f]/60">Or continue with</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full border-[#37322f]/20 hover:bg-[#37322f]/5 bg-transparent"
            onClick={handleBiometricLogin}
            disabled={isLoading}
          >
            <Fingerprint className="mr-2 h-5 w-5" />
            {isLoading ? "Authenticating..." : "Login with Fingerprint"}
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center text-[#37322f]/60">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#37322f] hover:underline font-medium">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
