import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
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
import Services from "./pages/Services";
import ClientPortal from "./pages/ClientPortal";
import DiscoverySession from "./pages/DiscoverySession";
import PatternRevealed from "./pages/PatternRevealed";
import HowItWorks from "./pages/HowItWorks";
import Success from "./pages/Success";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/framework" component={Framework} />
        <Route path="/patterns" component={Patterns} />
        <Route path="/book" component={Book} />
        <Route path="/coaches" component={Coaches} />
        <Route path="/vision" component={Vision} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/pattern-revealed" component={PatternRevealed} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/client-portal" component={ClientPortal} />
        <Route path="/discovery" component={DiscoverySession} />
        <Route path="/success" component={Success} />
        <Route component={NotFound} />
      </Switch>
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
