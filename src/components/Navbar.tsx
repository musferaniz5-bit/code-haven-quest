import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="text-primary">5</span>
              <span className="text-foreground">Leaks</span>
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                className="pl-10 bg-muted/50 border-border focus:border-primary"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <Link to="/shop">
              <Button
                variant={isActive("/shop") ? "default" : "ghost"}
                className="gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                Shop
              </Button>
            </Link>
            
            <Link to="/categories">
              <Button variant={isActive("/categories") ? "default" : "ghost"}>
                Categories
              </Button>
            </Link>

            <a href="https://discord.gg/yourdiscord" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">
                Discord
              </Button>
            </a>

            <Link to="/auth">
              <Button variant="outline">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
