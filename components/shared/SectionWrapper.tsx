import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionWrapper({ children, className = "", style }: SectionWrapperProps) {
  return (
    <section className={`w-full ${className}`} style={style}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">{children}</div>
    </section>
  );
}
