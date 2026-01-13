import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";


export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/the-practice", label: "The Practice" },
    { href: "/sanctuary", label: "The Sanctuary" },
    { href: "/speaking", label: "Speaking" },
    { href: "/vision", label: "Vision" },
  ];



  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F9F7F2]">
      {/* Skip to main content - Accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      
      {/* Navigation - Editorial Style */}
      <header
        role="banner"
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          isScrolled
            ? "bg-[#F9F7F2]/90 backdrop-blur-md border-b border-primary/5 py-4 shadow-sm"
            : "bg-transparent py-8"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif tracking-widest text-primary hover:opacity-80 transition-opacity uppercase -ml-4">
            Love Wound
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 xl:gap-12 ml-12 self-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs xl:text-sm font-semibold tracking-[0.2em] uppercase transition-colors hover:text-primary/70",
                  location === link.href
                    ? "text-primary border-b border-primary"
                    : "text-primary/90"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild
              variant="default" 
              size="sm" 
              className="font-serif bg-primary text-white hover:bg-primary/90 rounded-full px-6"
            >
              <Link href="/discovery">
                Apply
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#F9F7F2] border-b border-primary/10 p-8 flex flex-col gap-6 shadow-lg animate-in slide-in-from-top-5 h-screen">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xl font-serif text-center py-2 transition-colors",
                  location === link.href
                    ? "text-primary italic"
                    : "text-primary/70"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild
              className="w-full font-serif mt-4 bg-primary text-white rounded-full py-6"
            >
              <Link href="/discovery">
                Apply
              </Link>
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" role="main" className="flex-1 pt-0">
        {children}
      </main>



      {/* Footer - Minimalist Editorial */}
      <footer className="bg-[#F0EBE0] py-20 border-t border-primary/5">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-primary uppercase tracking-widest">Love Wound</h3>
            <p className="text-primary/60 font-light leading-relaxed max-w-xs mx-auto md:mx-0">
              Awakening isn't about becoming someone better. It's about remembering who you've always been.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-serif text-lg text-primary">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary/60 hover:text-primary transition-colors font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-serif text-lg text-primary">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.youtube.com/@jeffbatton" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary transition-colors font-light flex items-center gap-2 justify-center md:justify-start">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jblc.co/" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary transition-colors font-light flex items-center gap-2 justify-center md:justify-start">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jeffbatton/" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary transition-colors font-light flex items-center gap-2 justify-center md:justify-start">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:jeff@jeffbatton.com" className="text-primary/60 hover:text-primary transition-colors font-light">
                  jeff@jeffbatton.com
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg text-primary">Client Portal</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://us02web.zoom.us/j/6811699428" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary/60 hover:text-primary transition-colors font-light flex items-center gap-2 justify-center md:justify-start"
                >
                  Join Session (Zoom)
                </a>
              </li>
              <li>
                <span className="text-primary/40 font-light text-sm italic">
                  More tools coming soon...
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-20 pt-8 border-t border-primary/10 text-center text-xs text-primary/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Jeff Batton Life Coaching. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
