import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

// All items data
const itemsData: Record<string, any> = {
  // Scripts
  "127": { title: "Vehicle Auction Script", image: "https://5leaks.com/uploads/30bb67c854de10cf5cb382bc.png", category: "Scripts", downloads: 8 },
  "126": { title: "OX Lib vehicleshop", image: "https://5leaks.com/uploads/6695906633427a0064fa776b.png", category: "Scripts", downloads: 12 },
  "125": { title: "av vehicleshop", image: "https://5leaks.com/uploads/7da31bd3a6ffe454b12e1e77.jpg", category: "Scripts", downloads: 5 },
  "124": { title: "px vehicle shop", image: "https://5leaks.com/uploads/0860fb8490a8e2e7f90097b5.png", category: "Scripts", downloads: 9 },
  "123": { title: "STG vehicleshop", image: "https://5leaks.com/uploads/bd7c4b93ee08f149eeb17986.png", category: "Scripts", downloads: 3 },
  "122": { title: "Vehicleshop", image: "https://5leaks.com/uploads/e55ffc8a22c9a3aca78035ef.png", category: "Scripts", downloads: 7 },
  "121": { title: "imLuka-Vehicleshop", image: "https://5leaks.com/uploads/8c189d319663da7700be0598.png", category: "Scripts", downloads: 11 },
  "120": { title: "ec-dealership", image: "https://5leaks.com/uploads/c4f3eec6457ce1e184427d17.png", category: "Scripts", downloads: 6 },
  "119": { title: "LGF Vehicle Shop", image: "https://5leaks.com/uploads/0e8d28fbf523522c2646de33.png", category: "Scripts", downloads: 4 },
  "116": { title: "Advanced Car Shop System", image: "https://5leaks.com/uploads/dd025817751ccd500933baca.jpg", category: "Scripts", downloads: 15 },
  "115": { title: "Cosmic Crafts Admin Zone", image: "https://5leaks.com/uploads/21b47b420e149fbe76f18bbc.png", category: "Scripts", downloads: 10 },
  "114": { title: "Agency Reports", image: "https://5leaks.com/uploads/a8ab1159d050ebebedd1a533.jpg", category: "Scripts", downloads: 13 },
  
  // Maps
  "74": { title: "Pillbox Hill", image: "https://5leaks.com/uploads/183f4f9999d852a8acb10079.png", category: "Maps", downloads: 20 },
  "73": { title: "Pillbox Hill", image: "https://5leaks.com/uploads/82028da9a2de570f609d8e35.jpg", category: "Maps", downloads: 18 },
  "72": { title: "Pillbox Hill 2", image: "https://5leaks.com/uploads/0a838ffa5e8ffde145970c46.jpg", category: "Maps", downloads: 22 },
  "71": { title: "Los Santos Medical Center", image: "https://5leaks.com/uploads/b551f5f44dff3fd94d5abe54.jpg", category: "Maps", downloads: 16 },
  "70": { title: "MLO Interior El Burro Hospital", image: "https://5leaks.com/uploads/22b7a5dd8363dd6cef8c0807.jpg", category: "Maps", downloads: 14 },
  "69": { title: "Nexus Department", image: "https://5leaks.com/uploads/a54cadfcdb930609fbbb1dbb.jpg", category: "Maps", downloads: 19 },
  "68": { title: "Police Station", image: "https://5leaks.com/uploads/9093b138ae08c3c65b25c1e3.jpg", category: "Maps", downloads: 25 },
  "67": { title: "Pornhub PD", image: "https://5leaks.com/uploads/304223649e644081a9384701.png", category: "Maps", downloads: 17 },
  "66": { title: "Vespucci PD", image: "https://5leaks.com/uploads/4039aca6227a84e0209f75c2.jpg", category: "Maps", downloads: 21 },
  "65": { title: "Rowpunk PD", image: "https://5leaks.com/uploads/3315107ee9ea96298b90b47e.jpg", category: "Maps", downloads: 23 },
  "64": { title: "Vinewood Police", image: "https://5leaks.com/uploads/ee5ae6022247b1f44c58e9d1.jpg", category: "Maps", downloads: 15 },
  "63": { title: "Davis Sheriff Department", image: "https://5leaks.com/uploads/e71ff7fb5bbd73d95f2a1a06.jpg", category: "Maps", downloads: 12 },
  
  // Vehicles
  "133": { title: "Supreme Truck 3d Animation", image: "https://img.youtube.com/vi/zgNbHpO1ZGg/hqdefault.jpg", category: "Vehicles", downloads: 30 },
  "132": { title: "Submarine", image: "https://5leaks.com/uploads/2993cc2409c6c827f69b53a2.webp", category: "Vehicles", downloads: 28 },
  "131": { title: "ZX10R Animated Lights", image: "https://img.youtube.com/vi/XW8axwZcVtw/hqdefault.jpg", category: "Vehicles", downloads: 35 },
  "130": { title: "2020 Tesla Roadster", image: "https://5leaks.com/uploads/b85d6e4ea8885687035ad6e6.png", category: "Vehicles", downloads: 40 },
  "9": { title: "Range Rover Sports SVR", image: "https://5leaks.com/uploads/ebc5fc532ad66a6f7083af9b.png", category: "Vehicles", downloads: 32 },
  
  // Clothing
  "134": { title: "Sly's Non-Branded Male Clothing Pack", image: "https://img.youtube.com/vi/s6IHyzN1OOo/hqdefault.jpg", category: "Clothing", downloads: 25 },
  
  // Servers
  "135": { title: "Origen V2 Full Server", image: "https://img.youtube.com/vi/Nr0QrehvNbI/hqdefault.jpg", category: "Servers", downloads: 50 },
  
  // Weapons
  "136": { title: "150 Add-on Weapons", image: "https://img.youtube.com/vi/HwLTzmaoV1U/hqdefault.jpg", category: "Weapons", downloads: 45 },
  
  // Minimap
  "137": { title: "Minimap Chicago", image: "https://5leaks.com/uploads/b794f49537c80819a314994b.webp", category: "Minimap", downloads: 20 }
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
