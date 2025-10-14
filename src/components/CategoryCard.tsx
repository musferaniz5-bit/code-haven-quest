import { Link } from "react-router-dom";

interface CategoryCardProps {
  id: number;
  name: string;
  image: string;
  description?: string;
}

const CategoryCard = ({ id, name, image, description }: CategoryCardProps) => {
  return (
    <Link to={`/category/${id}`}>
      <div className="card-glow group overflow-hidden rounded-lg bg-card">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          <p className="mt-3 text-sm text-primary hover:underline">
            Browse items in {name} →
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
