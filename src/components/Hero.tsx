import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Leaf, Droplets, Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-nature flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Logo Principal */}
        <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
          <Logo size="xl" className="scale-75 sm:scale-90 lg:scale-100" />
        </div>

        {/* Mensaje Principal */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight drop-shadow-lg px-2">
            Sabores frescos
            <span className="block text-secondary">directo de la finca</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Descubre nuestros deliciosos batidos y jugos naturales, 
            preparados con frutas frescas cultivadas con amor en nuestra finca.
          </p>
        </div>

        {/* Características */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 lg:mt-12 px-2">
          <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 bg-card rounded-xl shadow-dramatic hover:shadow-glow transition-all duration-300 hover:scale-105">
            <div className="p-3 bg-gradient-fresh rounded-full">
              <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-primary text-sm sm:text-base">100% Natural</h3>
            <p className="text-muted-foreground text-center text-xs sm:text-sm">
              Sin conservantes ni aditivos artificiales
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 bg-card rounded-xl shadow-dramatic hover:shadow-glow transition-all duration-300 hover:scale-105">
            <div className="p-3 bg-gradient-berry rounded-full">
              <Droplets className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-primary text-sm sm:text-base">Recién Preparado</h3>
            <p className="text-muted-foreground text-center text-xs sm:text-sm">
              Cada batido se prepara al momento para ti
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 bg-card rounded-xl shadow-dramatic hover:shadow-glow transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
            <div className="p-3 bg-gradient-dramatic rounded-full shadow-glow">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-foreground" />
            </div>
            <h3 className="font-semibold text-primary text-sm sm:text-base">Con Amor</h3>
            <p className="text-muted-foreground text-center text-xs sm:text-sm">
              Cultivado y preparado con dedicación familiar
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-10 lg:mt-12 px-4">
          <Button size="lg" className="w-full sm:w-auto bg-gradient-dramatic text-primary-foreground font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl shadow-glow hover:shadow-dramatic transition-all duration-300 hover:scale-105 sm:hover:scale-110 border-0 text-sm sm:text-base">
            Ver Nuestros Sabores
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-fresh text-sm sm:text-base">
            Conoce la Finca
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;