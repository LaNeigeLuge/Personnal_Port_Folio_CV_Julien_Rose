import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  green?: boolean;
}

export default function GlassCard({ children, className = '', hover = false, green = false }: GlassCardProps) {
  const baseClasses = green ? 'glass-green rounded-2xl' : 'glass rounded-2xl';
  const hoverClasses = hover ? 'glass-hover' : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
