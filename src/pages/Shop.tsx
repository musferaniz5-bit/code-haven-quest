import Navbar from "@/components/Navbar";
import ScriptCard from "@/components/ScriptCard";
import { ShoppingCart } from "lucide-react";

const Shop = () => {
  const shopItems = [
    {
      id: 3,
      title: "LB Phone 2.0",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=450&fit=crop",
      category: "Premium",
      price: "£15.00"
    },
    {
      id: 4,
      title: "Advanced Banking System",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop",
      category: "Premium",
      price: "£25.00"
    },
    {
      id: 5,
      title: "Custom HUD Pack",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=450&fit=crop",
      category: "Premium",
      price: "£12.00"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">5Leaks Shop</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Buy premium FiveM scripts, maps, and vehicles securely.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shopItems.map((item) => (
            <ScriptCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
