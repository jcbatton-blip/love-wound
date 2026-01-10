import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function StickyBookButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <Link href="/discovery">
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif text-base px-6 py-6 h-auto rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
        >
          <Calendar className="w-5 h-5" />
          Book Discovery Session
        </Button>
      </Link>
    </div>
  );
}
