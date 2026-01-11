import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Framework from "./pages/Framework";
import Patterns from "./pages/Patterns";
import Book from "./pages/Book";
import About from "./pages/About";
import Coaches from "./pages/Coaches";
import Vision from "./pages/Vision";
import Membership from "./pages/Membership";
import MemberPortal from "./pages/MemberPortal";
import Services from "./pages/Services";
import ClientPortal from "./pages/ClientPortal";
import DiscoverySession from "./pages/DiscoverySession";
// import PatternRevealed from "./pages/PatternRevealed";
import HowItWorks from "./pages/HowItWorks";
import Success from "./pages/Success";
import TenantPortal from "./pages/TenantPortal";
import Speaking from "./pages/Speaking";
import AdminTestimonials from "./pages/AdminTestimonials";
import SubmitTestimonial from "./pages/SubmitTestimonial";
function Router() {
  const [location] = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    setIsTransitioning(true);
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location]);
  
  // make sure to consider if you need authentication for certain routes
  return (
    <Layout>
      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/framework" component={Framework} />
        <Route path="/patterns" component={Patterns} />
        <Route path="/book" component={Book} />
        <Route path="/coaches" component={Coaches} />
        <Route path="/vision" component={Vision} />
        <Route path="/membership" component={Membership} />
        <Route path="/member-portal" component={MemberPortal} />
        <Route path="/work-with-me" component={Services} />
        <Route path="/about" component={About} />
        {/* <Route path="/pattern-revealed" component={PatternRevealed} /> */}
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/client-portal" component={ClientPortal} />
        <Route path="/discovery" component={DiscoverySession} />
        <Route path="/success" component={Success} />
        <Route path="/tenant-portal" component={TenantPortal} />
        <Route path="/speaking" component={Speaking} />
        <Route path="/admin/testimonials" component={AdminTestimonials} />
        <Route path="/submit-testimonial" component={SubmitTestimonial} />
        <Route component={NotFound} />
      </Switch>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
