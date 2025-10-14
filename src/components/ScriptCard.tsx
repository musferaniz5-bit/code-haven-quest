import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface ScriptCardProps {
  id: number;
  title: string;
  image: string;
  category: string;
  price?: string;
}

const ScriptCard = ({ id, title, image, category, price }: ScriptCardProps) => {
  return (
    <Link to={`/item/${id}`}>
      <div className="card-glow overflow-hidden rounded-lg bg-card">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-4">
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <h3 className="font-semibold text-foreground line-clamp-1">{title}</h3>
          {price && (
            <p className="mt-2 text-lg font-bold text-primary">{price}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ScriptCard;
