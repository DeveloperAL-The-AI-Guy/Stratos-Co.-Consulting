import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-white bg-primary-900 hover:bg-primary-800 focus:ring-primary-900 shadow-sm hover:shadow-md",
    secondary: "border-transparent text-primary-900 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500",
    outline: "border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-50 focus:ring-neutral-500",
    ghost: "border-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-500 px-4",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;