import Link from 'next/link';

type ServiceCardProps = {
  title: string;
  description: string;
  imagePath: string;
  category: string;
};

export default function ServiceCard({ title, description, imagePath, category }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imagePath})` }} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-amber-900">{title}</h3>
        <p className="text-gray-700 mb-4">
          {description}
        </p>
        <Link href={`/realizacje?kategoria=${category}`} className="text-amber-700 font-medium hover:text-amber-900 transition-colors">
          Zobacz więcej &rarr;
        </Link>
      </div>
    </div>
  );
} 