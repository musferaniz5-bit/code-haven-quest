import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ScriptCard from "@/components/ScriptCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle } from "lucide-react";

const Home = () => {
  // Scripts Section
  const scripts = [
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
  ];

  // Maps Section
  const maps = [
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
  ];

  // Vehicles Section
  const vehicles = [
    { id: 133, title: "Supreme Truck 3d Animation", image: "https://img.youtube.com/vi/zgNbHpO1ZGg/hqdefault.jpg", category: "Vehicles" },
    { id: 132, title: "Submarine", image: "https://5leaks.com/uploads/2993cc2409c6c827f69b53a2.webp", category: "Vehicles" },
    { id: 131, title: "ZX10R Animated Lights", image: "https://img.youtube.com/vi/XW8axwZcVtw/hqdefault.jpg", category: "Vehicles" },
    { id: 130, title: "2020 Tesla Roadster", image: "https://5leaks.com/uploads/b85d6e4ea8885687035ad6e6.png", category: "Vehicles" },
    { id: 9, title: "Range Rover Sports SVR", image: "https://5leaks.com/uploads/ebc5fc532ad66a6f7083af9b.png", category: "Vehicles" },
  ];

  // Other Categories
  const clothing = [
    { id: 134, title: "Sly's Non-Branded Male Clothing Pack", image: "https://img.youtube.com/vi/s6IHyzN1OOo/hqdefault.jpg", category: "Clothing" },
  ];

  const servers = [
    { id: 135, title: "Origen V2 Full Server", image: "https://img.youtube.com/vi/Nr0QrehvNbI/hqdefault.jpg", category: "Servers" },
  ];

  const weapons = [
    { id: 136, title: "150 Add-on Weapons", image: "https://img.youtube.com/vi/HwLTzmaoV1U/hqdefault.jpg", category: "Weapons" },
  ];

  const minimaps = [
    { id: 137, title: "Minimap Chicago", image: "https://5leaks.com/uploads/b794f49537c80819a314994b.webp", category: "Minimap" },
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
          {scripts.slice(0, 12).map((script) => (
            <ScriptCard key={script.id} {...script} />
          ))}
        </div>
      </section>

      {/* Maps Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Maps</h2>
          <Link to="/category/2">
            <Button className="gap-2">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {maps.slice(0, 12).map((map) => (
            <ScriptCard key={map.id} {...map} />
          ))}
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Vehicles</h2>
          <Link to="/category/3">
            <Button className="gap-2">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <ScriptCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </section>

      {/* Clothing Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Clothing</h2>
          <Link to="/category/6">
            <Button className="gap-2">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clothing.map((item) => (
            <ScriptCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* Servers Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Servers</h2>
          <Link to="/category/7">
            <Button className="gap-2">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servers.map((server) => (
            <ScriptCard key={server.id} {...server} />
          ))}
        </div>
      </section>

      {/* Weapons Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Weapons</h2>
          <Link to="/category/9">
            <Button className="gap-2">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {weapons.map((weapon) => (
            <ScriptCard key={weapon.id} {...weapon} />
          ))}
        </div>
      </section>

      {/* Minimap Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Minimap</h2>
          <Link to="/category/10">
            <Button className="gap-2">
              See all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {minimaps.map((minimap) => (
            <ScriptCard key={minimap.id} {...minimap} />
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
