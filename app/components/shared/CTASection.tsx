import Link from 'next/link';

type CTASectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'primary' | 'secondary';
};

export default function CTASection({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  variant = 'primary' 
}: CTASectionProps) {
  const bgColor = variant === 'primary' ? 'bg-amber-900' : 'bg-amber-50';
  const textColor = variant === 'primary' ? 'text-white' : 'text-gray-800';
  const descriptionColor = variant === 'primary' ? 'text-amber-100' : 'text-gray-700';
  const buttonStyle = variant === 'primary' 
    ? 'bg-white hover:bg-gray-100 text-amber-900' 
    : 'bg-amber-800 hover:bg-amber-900 text-white';

  return (
    <section className={`py-16 ${bgColor} ${textColor}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className={`text-xl ${descriptionColor} mb-8 max-w-2xl mx-auto`}>
          {description}
        </p>
        <Link 
          href={buttonLink} 
          className={`${buttonStyle} px-8 py-4 rounded-md inline-block font-bold transition-colors`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
} 