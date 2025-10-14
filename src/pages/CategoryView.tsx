import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ScriptCard from "@/components/ScriptCard";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CategoryView = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on category ID
  const scripts = [
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
    },
    {
      id: 123,
      title: "STG vehicleshop",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=450&fit=crop",
      category: "Scripts"
    },
    {
      id: 122,
      title: "Vehicleshop",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=450&fit=crop",
      category: "Scripts"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/categories">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Categories
          </Button>
        </Link>

        <h1 className="mb-8 text-4xl font-bold text-foreground">
          All Scripts
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {scripts.map((script) => (
            <ScriptCard key={script.id} {...script} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
