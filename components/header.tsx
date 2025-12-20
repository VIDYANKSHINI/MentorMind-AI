import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="w-full border-b border-[#37322f]/6 bg-[#f7f5f3]">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="text-[#37322f] font-semibold text-lg">Brillance</div>
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">Products</button>
              <button className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">Pricing</button>
              <button className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">Docs</button>
            </div>
          </div>
          <Link href="/login" aria-label="Login to your account">
            <Button
              variant="default"
              className="bg-[#37322f] text-white hover:bg-[#37322f]/90 focus-visible:ring-2 focus-visible:ring-[#37322f] focus-visible:ring-offset-2 transition-colors"
              aria-label="Navigate to login page"
            >
              Login
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
