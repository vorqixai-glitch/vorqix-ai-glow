import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-2 group ${className}`}>
    <div className="relative h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center shadow-elegant">
      <span className="font-display font-bold text-primary-foreground text-sm">V</span>
      <div className="absolute inset-0 rounded-lg bg-gradient-primary blur-md opacity-50 -z-10 group-hover:opacity-80 transition-opacity" />
    </div>
    <span className="font-display font-bold text-lg tracking-tight">
      VORQIX<span className="text-primary">.AI</span>
    </span>
  </Link>
);