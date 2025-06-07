'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
};

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  type = 'button',
  className = '',
  onClick,
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors';
  
  const variantStyles = {
    primary: 'bg-amber-800 hover:bg-amber-900 text-white',
    secondary: 'bg-white hover:bg-gray-100 text-amber-900',
    outline: 'bg-transparent border border-amber-800 text-amber-800 hover:bg-amber-50',
  };
  
  const sizeStyles = {
    small: 'text-sm px-4 py-2',
    medium: 'px-6 py-3',
    large: 'text-lg px-8 py-4',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-70 cursor-not-allowed' : '';
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
} 