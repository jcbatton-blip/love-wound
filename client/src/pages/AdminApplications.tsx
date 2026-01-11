import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Application {
  id: number;
  name: string | null;
  email: string | null;
  phone: string | null;
  whyNow: string;
  whatTried: string;
  readyForCommitment: string;
  status: string;
  notes: string | null;
  createdAt: string;
}

export default function AdminApplications() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/applications");
      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500";
      case "reviewed":
        return "bg-blue-500";
      case "scheduled":
        return "bg-purple-500";
      case "accepted":
        return "bg-green-500";
      case "declined":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F9F7F2] flex items-center justify-center">
        <p className="text-muted-foreground">Loading applications...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F7F2] py-24">
      <div className="container max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-primary mb-2">
            Root-Work Mentorship Applications
          </h1>
          <p className="text-muted-foreground">
            Review applicant responses before scheduled calls
          </p>
        </div>

        {applications.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No applications yet</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {applications.map((app) => (
              <Card key={app.id} className="border-primary/10">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl font-serif text-primary">
                        {app.name || "Anonymous"}
                      </CardTitle>
                      <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                        {app.email && <span>{app.email}</span>}
                        {app.phone && <span>{app.phone}</span>}
                      </div>
                    </div>
                    <Badge className={getStatusColor(app.status)}>
                      {app.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Submitted: {new Date(app.createdAt).toLocaleString()}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      Why now? What's happening in your life that makes you ready for this work?
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">
                      {app.whyNow}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      What have you already tried? (Therapy, coaching, books, courses, etc.)
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">
                      {app.whatTried}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      Are you ready to commit to a year-long, weekly practice? What makes you say yes or no?
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">
                      {app.readyForCommitment}
                    </p>
                  </div>

                  {app.notes && (
                    <div className="border-t pt-4">
                      <h3 className="font-semibold text-primary mb-2">Admin Notes</h3>
                      <p className="text-muted-foreground whitespace-pre-wrap">
                        {app.notes}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
