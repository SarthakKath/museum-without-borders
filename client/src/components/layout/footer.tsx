import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Footer() {
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email") as string;
    
    try {
      await apiRequest("POST", "/api/subscribe", { email, language: "en" });
      toast({
        title: "Success",
        description: "You've been subscribed to our newsletter!"
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to subscribe. Please try again."
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Museum Without Borders</h3>
            <p className="text-sm opacity-80">
              Celebrating immigrant artists through exhibitions, events, and digital storytelling
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/exhibitions">
                <a className="text-sm hover:opacity-80">Exhibitions</a>
              </Link>
              <Link href="/events">
                <a className="text-sm hover:opacity-80">Events</a>
              </Link>
              <Link href="/artists">
                <a className="text-sm hover:opacity-80">Artists</a>
              </Link>
              <Link href="/visit">
                <a className="text-sm hover:opacity-80">Visit</a>
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-white/10"
                required
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-white/20 text-sm opacity-80 text-center">
          © {new Date().getFullYear()} Museum Without Borders. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
