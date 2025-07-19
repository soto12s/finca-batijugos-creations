import logoImage from "@/assets/logo-batijugos-realistic.png";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Logo = ({ size = "md", className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-24 w-24", 
    xl: "h-32 w-32"
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img 
        src={logoImage} 
        alt="Los batijugos de la finca" 
        className={`${sizeClasses[size]} object-contain rounded-xl shadow-dramatic transition-all duration-300 hover:scale-110 hover:shadow-glow`}
      />
      <div className="flex flex-col">
        <h1 className={`font-bold text-primary leading-tight ${
          size === "xl" ? "text-3xl" : 
          size === "lg" ? "text-2xl" : 
          size === "md" ? "text-xl" : "text-lg"
        }`}>
          Los batijugos
        </h1>
        <p className={`text-muted-foreground font-medium ${
          size === "xl" ? "text-lg" : 
          size === "lg" ? "text-base" : 
          size === "md" ? "text-sm" : "text-xs"
        }`}>
          de la finca
        </p>
      </div>
    </div>
  );
};

export default Logo;