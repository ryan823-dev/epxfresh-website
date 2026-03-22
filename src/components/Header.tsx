import React from "react"
import { Menu, ShoppingCart, X, Globe } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Products", href: "#products" },
    { label: "Technology", href: "#technology" },
    { label: "Solutions", href: "#solutions" },
    { label: "Certifications", href: "#certifications" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "bg-slate-900/95 backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-6", className)}>
      <div className="container-professional">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-primary rounded-xl flex items-center justify-center shadow-fresh">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight">EPXFresh</span>
              <span className="text-[10px] text-white/50 uppercase tracking-widest">Fresh-Keeping Technology</span>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white gap-2"><Globe className="w-4 h-4" /><span>EN</span></Button>
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10"><ShoppingCart className="w-5 h-5" /></Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 text-white">Get a Quote</Button>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </nav>
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>{item.label}</a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
