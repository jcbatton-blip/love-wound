import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import StickyBookButton from "@/components/StickyBookButton";

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
    { href: "/framework", label: "The Method" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/work-with-me", label: "Services" },
    { href: "/speaking", label: "Speaking" },
    { href: "/membership", label: "Membership" },
    { href: "/vision", label: "Vision" },
  ];

  const footerLinks = [
    { href: "/book", label: "The Book" },
    { href: "/coaches", label: "For Coaches" },
    { href: "/vision", label: "The Vision" },
    { href: "/client-portal", label: "Client Portal" },
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
          <Link href="/" className="text-2xl font-serif tracking-widest text-primary hover:opacity-80 transition-opacity uppercase -ml-4">
            Love Wound
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 xl:gap-12 ml-16">
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
                Book Free Call
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
                Book Free Call
              </Link>
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-0">
        {children}
      </main>

      {/* Sticky Book Button */}
      <StickyBookButton />

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
              {footerLinks.map((link) => (
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
