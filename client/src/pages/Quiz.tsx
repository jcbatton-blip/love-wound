import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, RefreshCcw } from "lucide-react";
import { toast } from "sonner";

// Quiz Data
const questions = [
  {
    id: 1,
    text: "When a partner pulls away or gets quiet, what is your immediate internal reaction?",
    options: [
      { text: "Panic. I need to fix it immediately or I feel unsafe.", wound: "Abandonment" },
      { text: "Anger. I feel disrespected and want to punish them.", wound: "Rejection" },
      { text: "Relief. I finally get some space to breathe.", wound: "Control" },
      { text: "Nothing. I just wait for them to come back.", wound: "Invisibility" },
    ],
  },
  {
    id: 2,
    text: "In conflict, what is your default strategy?",
    options: [
      { text: "I over-explain and try to convince them I'm right.", wound: "Rejection" },
      { text: "I shut down and go silent to avoid making it worse.", wound: "Invisibility" },
      { text: "I try to manage their emotions so they don't explode.", wound: "Control" },
      { text: "I apologize for things I didn't do just to restore peace.", wound: "Abandonment" },
    ],
  },
  {
    id: 3,
    text: "What is the core belief that runs your life?",
    options: [
      { text: "If I'm not perfect, I'm not lovable.", wound: "Unworthiness" },
      { text: "If I let go, everything will fall apart.", wound: "Control" },
      { text: "If I show my true self, they will leave.", wound: "Invisibility" },
      { text: "I am always too much or not enough.", wound: "Rejection" },
    ],
  },
  {
    id: 4,
    text: "What feels most dangerous to you in a relationship?",
    options: [
      { text: "Being trapped or controlled.", wound: "Control" },
      { text: "Being ignored or not seen.", wound: "Invisibility" },
      { text: "Being criticized or judged.", wound: "Rejection" },
      { text: "Being left alone.", wound: "Abandonment" },
    ],
  },
  {
    id: 5,
    text: "How do you handle your own needs?",
    options: [
      { text: "I don't have needs. I'm low maintenance.", wound: "Invisibility" },
      { text: "I meet them myself because I can't rely on others.", wound: "Control" },
      { text: "I suppress them until I explode.", wound: "Abandonment" },
      { text: "I feel guilty for having them.", wound: "Unworthiness" },
    ],
  },
];

const results = {
  Abandonment: {
    title: "The Abandonment Wound",
    description: "You learned that love is fragile. Your pattern is to cling, over-give, or pick unavailable partners to replay the fear of being left.",
    prescription: "Your work is to build 'Self-Stay'—learning that you will never leave yourself.",
  },
  Rejection: {
    title: "The Rejection Wound",
    description: "You learned that you are 'too much' or 'not enough.' Your pattern is to perform, perfect, or preemptively reject others before they can reject you.",
    prescription: "Your work is to stop auditioning for love and start approving of yourself.",
  },
  Invisibility: {
    title: "The Invisibility Wound",
    description: "You learned that love meant staying quiet. Your pattern is to shrink, hide your needs, and disappear to keep the peace.",
    prescription: "Your work is to take up space and risk being seen, even if it's messy.",
  },
  Control: {
    title: "The Control Wound",
    description: "You learned that chaos was normal. Your pattern is to manage, fix, and control everything to feel safe.",
    prescription: "Your work is to surrender. Safety comes from trust, not control.",
  },
  Unworthiness: {
    title: "The Unworthiness Wound",
    description: "You learned that love must be earned. Your pattern is to over-function and prove your value constantly.",
    prescription: "Your work is to realize your worth is inherent, not transactional.",
  },
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (wound: string) => {
    const newAnswers = [...answers, wound];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    const counts: Record<string, number> = {};
    finalAnswers.forEach((wound) => {
      counts[wound] = (counts[wound] || 0) + 1;
    });

    const topWound = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );

    setResult(topWound);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email to see your results.");
      return;
    }
    // Here we would send the email to the backend/CRM
    toast.success("Result unlocked!");
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] pt-32 pb-16 px-4">
      <div className="container max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2 text-center">
                <span className="text-sm font-medium text-primary/60 tracking-widest uppercase">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary leading-tight">
                  {questions[currentQuestion].text}
                </h2>
              </div>

              <div className="grid gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.wound)}
                    className="w-full text-left p-6 rounded-xl bg-white border border-primary/10 hover:border-primary hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg text-primary/80 group-hover:text-primary font-light">
                        {option.text}
                      </span>
                      <ArrowRight className="w-5 h-5 text-primary/0 group-hover:text-primary transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : !showResult ? (
            <motion.div
              key="email-gate"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center space-y-8 bg-white p-10 rounded-2xl shadow-sm border border-primary/10"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-serif text-primary">Your Pattern is Ready</h2>
                <p className="text-muted-foreground font-light">
                  Enter your email to reveal your primary Love Wound and get the specific prescription to heal it.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-[#F9F7F2]/50"
                  required
                />
                <Button type="submit" className="w-full py-6 text-lg font-serif bg-primary text-white hover:bg-primary/90">
                  Reveal My Result
                </Button>
              </form>
              <p className="text-xs text-muted-foreground/60">
                You'll also receive "The Mirror," my weekly insights on breaking patterns. Unsubscribe anytime.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-10"
            >
              <div className="space-y-4">
                <span className="text-sm font-medium text-primary/60 tracking-widest uppercase">
                  Your Primary Pattern
                </span>
                <h2 className="text-5xl md:text-6xl font-serif text-primary">
                  {results[result as keyof typeof results].title}
                </h2>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-2xl border border-primary/10 shadow-sm space-y-8 max-w-3xl mx-auto">
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-primary">The Diagnosis</h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {results[result as keyof typeof results].description}
                  </p>
                </div>

                <div className="w-full h-px bg-primary/10" />

                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-primary">The Prescription</h3>
                  <p className="text-lg text-primary font-medium leading-relaxed">
                    {results[result as keyof typeof results].prescription}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button 
                  onClick={() => window.location.href = "/services"}
                  className="px-8 py-6 text-lg font-serif bg-[#D4AF37] text-[#1A2333] hover:bg-[#C49F27]"
                >
                  Heal This Wound (Book Session)
                </Button>
                <Button 
                  variant="outline"
                  onClick={resetQuiz}
                  className="px-8 py-6 text-lg font-serif border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <RefreshCcw className="w-4 h-4 mr-2" /> Retake Quiz
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
