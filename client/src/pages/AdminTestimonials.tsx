import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Star, StarOff, Trash2, Plus } from "lucide-react";
import { Link } from "wouter";

export default function AdminTestimonials() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    initial: "",
    date: "",
    title: "",
    text: "",
    category: "",
  });

  const { data: user } = trpc.auth.me.useQuery();
  const { data: testimonials = [], refetch } = trpc.testimonials.list.useQuery();
  
  const toggleFeaturedMutation = trpc.testimonials.toggleFeatured.useMutation({
    onSuccess: () => {
      toast.success("Testimonial updated!");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update testimonial");
    },
  });

  const deleteMutation = trpc.testimonials.delete.useMutation({
    onSuccess: () => {
      toast.success("Testimonial deleted!");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete testimonial");
    },
  });

  const addMutation = trpc.testimonials.add.useMutation({
    onSuccess: () => {
      toast.success("Testimonial added!");
      setShowAddForm(false);
      setNewTestimonial({
        name: "",
        initial: "",
        date: "",
        title: "",
        text: "",
        category: "",
      });
      refetch();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to add testimonial");
    },
  });

  const handleToggleFeatured = (id: number, currentFeatured: number) => {
    toggleFeaturedMutation.mutate({ id, featured: currentFeatured === 0 });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      deleteMutation.mutate({ id });
    }
  };

  const handleAdd = () => {
    if (!newTestimonial.name || !newTestimonial.title || !newTestimonial.text) {
      toast.error("Please fill in all required fields");
      return;
    }
    addMutation.mutate(newTestimonial);
  };

  // Check if user is admin/owner
  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-serif text-primary mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-6">You don't have permission to access this page.</p>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-serif text-primary mb-2">Manage Testimonials</h1>
            <p className="text-muted-foreground">
              Toggle featured status to control which testimonials appear on the Services page.
            </p>
          </div>
          <Button onClick={() => setShowAddForm(!showAddForm)}>
            <Plus className="w-4 h-4 mr-2" />
            Add New
          </Button>
        </div>

        {showAddForm && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-serif text-primary mb-4">Add New Testimonial</h2>
            <div className="grid gap-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    value={newTestimonial.name}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Initial *</label>
                  <input
                    type="text"
                    value={newTestimonial.initial}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, initial: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="J"
                    maxLength={10}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date *</label>
                  <input
                    type="text"
                    value={newTestimonial.date}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, date: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="January 10, 2026"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Title *</label>
                <input
                  type="text"
                  value={newTestimonial.title}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, title: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Life Changing Experience"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Testimonial Text *</label>
                <textarea
                  value={newTestimonial.text}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, text: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows={4}
                  placeholder="Share your experience..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category (Optional)</label>
                <input
                  type="text"
                  value={newTestimonial.category}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, category: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="personal, couples, transformation, etc."
                />
              </div>
              <div className="flex gap-4">
                <Button onClick={handleAdd} disabled={addMutation.isPending}>
                  {addMutation.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  Add Testimonial
                </Button>
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        )}

        <div className="grid gap-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif">
                      {testimonial.initial}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-primary">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                    </div>
                    {testimonial.featured === 1 && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        Featured
                      </span>
                    )}
                    {testimonial.category && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                        {testimonial.category}
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-xl text-primary mb-2">{testimonial.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggleFeatured(testimonial.id, testimonial.featured)}
                    disabled={toggleFeaturedMutation.isPending}
                  >
                    {testimonial.featured === 1 ? (
                      <>
                        <StarOff className="w-4 h-4 mr-2" />
                        Unfeature
                      </>
                    ) : (
                      <>
                        <Star className="w-4 h-4 mr-2" />
                        Feature
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(testimonial.id)}
                    disabled={deleteMutation.isPending}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {testimonials.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No testimonials yet. Add your first one above!</p>
          </Card>
        )}
      </div>
    </div>
  );
}
