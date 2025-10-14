import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ScriptCard from "@/components/ScriptCard";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CategoryView = () => {
  const { id } = useParams();

  // All category data
  const categoryData: Record<string, { name: string; items: any[] }> = {
    "1": {
      name: "Scripts",
      items: [
        { id: 127, title: "Vehicle Auction Script", image: "https://5leaks.com/uploads/30bb67c854de10cf5cb382bc.png", category: "Scripts" },
        { id: 126, title: "OX Lib vehicleshop", image: "https://5leaks.com/uploads/6695906633427a0064fa776b.png", category: "Scripts" },
        { id: 125, title: "av vehicleshop", image: "https://5leaks.com/uploads/7da31bd3a6ffe454b12e1e77.jpg", category: "Scripts" },
        { id: 124, title: "px vehicle shop", image: "https://5leaks.com/uploads/0860fb8490a8e2e7f90097b5.png", category: "Scripts" },
        { id: 123, title: "STG vehicleshop", image: "https://5leaks.com/uploads/bd7c4b93ee08f149eeb17986.png", category: "Scripts" },
        { id: 122, title: "Vehicleshop", image: "https://5leaks.com/uploads/e55ffc8a22c9a3aca78035ef.png", category: "Scripts" },
        { id: 121, title: "imLuka-Vehicleshop", image: "https://5leaks.com/uploads/8c189d319663da7700be0598.png", category: "Scripts" },
        { id: 120, title: "ec-dealership", image: "https://5leaks.com/uploads/c4f3eec6457ce1e184427d17.png", category: "Scripts" },
        { id: 119, title: "LGF Vehicle Shop", image: "https://5leaks.com/uploads/0e8d28fbf523522c2646de33.png", category: "Scripts" },
        { id: 116, title: "Advanced Car Shop System", image: "https://5leaks.com/uploads/dd025817751ccd500933baca.jpg", category: "Scripts" },
        { id: 115, title: "Cosmic Crafts Admin Zone", image: "https://5leaks.com/uploads/21b47b420e149fbe76f18bbc.png", category: "Scripts" },
        { id: 114, title: "Agency Reports", image: "https://5leaks.com/uploads/a8ab1159d050ebebedd1a533.jpg", category: "Scripts" },
      ]
    },
    "2": {
      name: "Maps",
      items: [
        { id: 74, title: "Pillbox Hill", image: "https://5leaks.com/uploads/183f4f9999d852a8acb10079.png", category: "Maps" },
        { id: 73, title: "Pillbox Hill", image: "https://5leaks.com/uploads/82028da9a2de570f609d8e35.jpg", category: "Maps" },
        { id: 72, title: "Pillbox Hill 2", image: "https://5leaks.com/uploads/0a838ffa5e8ffde145970c46.jpg", category: "Maps" },
        { id: 71, title: "Los Santos Medical Center", image: "https://5leaks.com/uploads/b551f5f44dff3fd94d5abe54.jpg", category: "Maps" },
        { id: 70, title: "MLO Interior El Burro Hospital", image: "https://5leaks.com/uploads/22b7a5dd8363dd6cef8c0807.jpg", category: "Maps" },
        { id: 69, title: "Nexus Department", image: "https://5leaks.com/uploads/a54cadfcdb930609fbbb1dbb.jpg", category: "Maps" },
        { id: 68, title: "Police Station", image: "https://5leaks.com/uploads/9093b138ae08c3c65b25c1e3.jpg", category: "Maps" },
        { id: 67, title: "Pornhub PD", image: "https://5leaks.com/uploads/304223649e644081a9384701.png", category: "Maps" },
        { id: 66, title: "Vespucci PD", image: "https://5leaks.com/uploads/4039aca6227a84e0209f75c2.jpg", category: "Maps" },
        { id: 65, title: "Rowpunk PD", image: "https://5leaks.com/uploads/3315107ee9ea96298b90b47e.jpg", category: "Maps" },
        { id: 64, title: "Vinewood Police", image: "https://5leaks.com/uploads/ee5ae6022247b1f44c58e9d1.jpg", category: "Maps" },
        { id: 63, title: "Davis Sheriff Department", image: "https://5leaks.com/uploads/e71ff7fb5bbd73d95f2a1a06.jpg", category: "Maps" },
      ]
    },
    "3": {
      name: "Vehicles",
      items: [
        { id: 133, title: "Supreme Truck 3d Animation", image: "https://img.youtube.com/vi/zgNbHpO1ZGg/hqdefault.jpg", category: "Vehicles" },
        { id: 132, title: "Submarine", image: "https://5leaks.com/uploads/2993cc2409c6c827f69b53a2.webp", category: "Vehicles" },
        { id: 131, title: "ZX10R Animated Lights", image: "https://img.youtube.com/vi/XW8axwZcVtw/hqdefault.jpg", category: "Vehicles" },
        { id: 130, title: "2020 Tesla Roadster", image: "https://5leaks.com/uploads/b85d6e4ea8885687035ad6e6.png", category: "Vehicles" },
        { id: 9, title: "Range Rover Sports SVR", image: "https://5leaks.com/uploads/ebc5fc532ad66a6f7083af9b.png", category: "Vehicles" },
      ]
    },
    "6": {
      name: "Clothing",
      items: [
        { id: 134, title: "Sly's Non-Branded Male Clothing Pack", image: "https://img.youtube.com/vi/s6IHyzN1OOo/hqdefault.jpg", category: "Clothing" },
      ]
    },
    "7": {
      name: "Servers",
      items: [
        { id: 135, title: "Origen V2 Full Server", image: "https://img.youtube.com/vi/Nr0QrehvNbI/hqdefault.jpg", category: "Servers" },
      ]
    },
    "9": {
      name: "Weapons",
      items: [
        { id: 136, title: "150 Add-on Weapons", image: "https://img.youtube.com/vi/HwLTzmaoV1U/hqdefault.jpg", category: "Weapons" },
      ]
    },
    "10": {
      name: "Minimap",
      items: [
        { id: 137, title: "Minimap Chicago", image: "https://5leaks.com/uploads/b794f49537c80819a314994b.webp", category: "Minimap" },
      ]
    }
  };

  const currentCategory = categoryData[id || "1"] || categoryData["1"];
  const { name, items } = currentCategory;

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
          All {name}
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <ScriptCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
