type ProjectCardProps = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

export default function ProjectCard({ id, title, category, image, description }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-64">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-amber-800 mb-2 text-sm font-medium uppercase">
          {category === "pergole" && "Pergola"}
          {category === "tarasy" && "Taras"}
          {category === "zadaszenia" && "Zadaszenie"}
        </p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
} 