import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-muted-foreground" />
        </div>
        
        <h1 className="text-4xl font-serif font-bold text-primary">
          Pattern Not Found
        </h1>
        
        <p className="text-lg text-muted-foreground">
          It seems you've wandered off the map. Just like in life, sometimes we get lost before we find our way back to the center.
        </p>
        
        <div className="pt-4">
          <Link href="/">
            <Button size="lg" className="font-serif rounded-full px-8">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
