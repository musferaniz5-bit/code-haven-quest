import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ScriptCard from "@/components/ScriptCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle } from "lucide-react";

const Home = () => {
  const featuredScripts = [
    {
      id: 127,
      title: "Vehicle Auction Script",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=450&fit=crop",
      category: "Scripts"
    },
    {
      id: 126,
      title: "OX Lib vehicleshop",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=450&fit=crop",
      category: "Scripts"
    },
    {
      id: 125,
      title: "av vehicleshop",
      image: "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=800&h=450&fit=crop",
      category: "Scripts"
    },
    {
      id: 124,
      title: "px vehicle shop",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=450&fit=crop",
      category: "Scripts"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">
          WELCOME TO <span className="text-gradient">5LEAKS</span>
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Your #1 source for premium FiveM scripts and resources
        </p>

        {/* Update Alert */}
        <Link to="/category/1">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-primary hover:bg-primary/20 transition-colors border border-primary/30">
            <AlertCircle className="h-5 w-5" />
            <span className="font-semibold">New Update: New scripts are being added!</span>
            <span className="text-primary">Check them out →</span>
          </div>
        </Link>

        {/* Promotional Banners */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
          <a href="https://discord.gg/yourdiscord" target="_blank" rel="noopener noreferrer">
            <div className="rounded-lg overflow-hidden border-2 border-primary hover:border-secondary transition-colors">
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">🔥 EXCLUSIVE SCRIPTS</h3>
                <p className="text-foreground">Join our Discord for early access!</p>
              </div>
            </div>
          </a>
          <a href="https://discord.gg/yourdiscord" target="_blank" rel="noopener noreferrer">
            <div className="rounded-lg overflow-hidden border-2 border-primary hover:border-secondary transition-colors">
              <div className="bg-gradient-to-r from-secondary/20 to-primary/20 p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">💰 PAID AD</h3>
                <p className="text-foreground">Premium resources available!</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Featured Scripts Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Scripts</h2>
          <Link to="/category/1">
            <Button className="gap-2">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredScripts.map((script) => (
            <ScriptCard key={script.id} {...script} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 5Leaks. Your premium FiveM resource marketplace.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
