import Navbar from "@/components/Navbar";
import CategoryCard from "@/components/CategoryCard";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Scripts",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop",
      description: "Browse items in Scripts"
    },
    {
      id: 2,
      name: "Maps",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=450&fit=crop",
      description: "Browse items in Maps"
    },
    {
      id: 3,
      name: "Vehicles",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=450&fit=crop",
      description: "Browse items in Vehicles"
    },
    {
      id: 6,
      name: "Clothing",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=450&fit=crop",
      description: "Browse items in Clothing"
    },
    {
      id: 7,
      name: "Servers",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
      description: "Browse items in Servers"
    },
    {
      id: 9,
      name: "Weapons",
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&h=450&fit=crop",
      description: "Browse items in Weapons"
    },
    {
      id: 10,
      name: "Minimap",
      image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=450&fit=crop",
      description: "Browse items in Minimap"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold text-foreground">All Categories</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
