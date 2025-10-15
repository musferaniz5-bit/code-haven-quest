import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

// Sample item data - in production this would come from an API
const itemsData: Record<string, any> = {
  "122": {
    title: "STG vehicleshop",
    category: "Scripts",
    downloads: 3,
    image: "https://5leaks.com/uploads/bd7c4b93ee08f149eeb17986.png",
    downloadUrl: "#"
  },
  "123": {
    title: "ESX Identity",
    category: "Scripts",
    downloads: 15,
    image: "https://5leaks.com/uploads/b4ae8e47f7d30b0a556e3b2c.png",
    downloadUrl: "#"
  },
  "127": {
    title: "Sample Resource",
    category: "Scripts",
    downloads: 10,
    image: "https://5leaks.com/uploads/bd7c4b93ee08f149eeb17986.png",
    downloadUrl: "#"
  }
};

const ItemDetail = () => {
  const { id } = useParams();
  const item = itemsData[id || "122"] || itemsData["122"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">{item.title}</h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <Badge variant="secondary" className="text-base px-4 py-1">
                {item.category}
              </Badge>
              <div className="px-4 py-1 rounded-md border border-primary/20 bg-primary/10">
                <span className="text-primary font-semibold">{item.downloads} Downloads</span>
              </div>
            </div>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden border border-border">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto"
            />
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">DOWNLOADS</h2>
            <Button size="lg" className="px-8">
              <Download className="mr-2 h-5 w-5" />
              Download
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemDetail;
