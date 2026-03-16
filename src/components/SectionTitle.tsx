interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-secondary opacity-70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
