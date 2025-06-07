import React, { ReactNode } from 'react';

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export default function PageHeader({ title, description, children, className = '' }: PageHeaderProps) {
  return (
    <section className={`relative py-20 bg-[#2D3748] text-white ${className}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        {description && (
          <p className="text-xl max-w-3xl text-gray-200">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
} 