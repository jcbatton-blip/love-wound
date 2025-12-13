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
    { href: "/framework", label: "The Method" },
    { href: "/patterns", label: "The Wounds" },
    { href: "/services", label: "Work With Me" },
    { href: "/book", label: "The Book" },
    { href: "/about", label: "About Jeffrey" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F9F7F2]">
      {/* Navigation - Editorial Style */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          isScrolled
            ? "bg-[#F9F7F2]/90 backdrop-blur-md border-b border-primary/5 py-4 shadow-sm"
            : "bg-transparent py-8"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-serif tracking-widest text-primary hover:opacity-80 transition-opacity uppercase">
              Love Wound
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium tracking-widest uppercase transition-colors hover:text-primary/60",
                    location === link.href
                      ? "text-primary border-b border-primary"
                      : "text-primary/80"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Button variant="outline" size="sm" className="font-serif border-primary text-primary hover:bg-primary hover:text-white rounded-none px-6">
              Get Your Kit
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
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-xl font-serif text-center py-2 transition-colors",
                    location === link.href
                      ? "text-primary italic"
                      : "text-primary/70"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Button className="w-full font-serif mt-4 bg-primary text-white rounded-none py-6">Get Your Kit</Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-0">
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
                  <Link href={link.href}>
                    <a className="text-primary/60 hover:text-primary transition-colors font-light">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-serif text-lg text-primary">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary/60 hover:text-primary transition-colors font-light">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-primary/60 hover:text-primary transition-colors font-light">
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
