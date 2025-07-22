import logoImage from "@/assets/logo-batijugos-realistic.png";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Logo = ({ size = "md", className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12",
    md: "h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16",
    lg: "h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24", 
    xl: "h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
  };

  return (
    <div className={`flex items-center space-x-2 sm:space-x-3 ${className}`}>
      <img 
        src={logoImage} 
        alt="Los batijugos de la finca" 
        className={`${sizeClasses[size]} object-contain rounded-lg sm:rounded-xl shadow-dramatic transition-all duration-300 hover:scale-110 hover:shadow-glow`}
      />
      <div className="flex flex-col">
        <h1 className={`font-bold text-primary leading-tight ${
          size === "xl" ? "text-xl sm:text-2xl md:text-3xl" : 
          size === "lg" ? "text-lg sm:text-xl md:text-2xl" : 
          size === "md" ? "text-base sm:text-lg md:text-xl" : "text-sm sm:text-base md:text-lg"
        }`}>
          Los batijugos
        </h1>
        <p className={`text-muted-foreground font-medium ${
          size === "xl" ? "text-sm sm:text-base md:text-lg" : 
          size === "lg" ? "text-xs sm:text-sm md:text-base" : 
          size === "md" ? "text-xs sm:text-sm" : "text-xs"
        }`}>
          de la finca
        </p>
      </div>
    </div>
  );
};

export default Logo;