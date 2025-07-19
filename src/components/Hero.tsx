import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Leaf, Droplets, Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-nature flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Logo Principal */}
        <div className="flex justify-center mb-8">
          <Logo size="xl" />
        </div>

        {/* Mensaje Principal */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight drop-shadow-lg">
            Sabores frescos
            <span className="block text-secondary">directo de la finca</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre nuestros deliciosos batidos y jugos naturales, 
            preparados con frutas frescas cultivadas con amor en nuestra finca.
          </p>
        </div>

        {/* Características */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="flex flex-col items-center space-y-3 p-6 bg-card rounded-xl shadow-dramatic hover:shadow-glow transition-all duration-300 hover:scale-105">
            <div className="p-3 bg-gradient-fresh rounded-full">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-primary">100% Natural</h3>
            <p className="text-muted-foreground text-center text-sm">
              Sin conservantes ni aditivos artificiales
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 p-6 bg-card rounded-xl shadow-dramatic hover:shadow-glow transition-all duration-300 hover:scale-105">
            <div className="p-3 bg-gradient-berry rounded-full">
              <Droplets className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-primary">Recién Preparado</h3>
            <p className="text-muted-foreground text-center text-sm">
              Cada batido se prepara al momento para ti
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 p-6 bg-card rounded-xl shadow-dramatic hover:shadow-glow transition-all duration-300 hover:scale-105">
            <div className="p-3 bg-gradient-dramatic rounded-full shadow-glow">
              <Heart className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h3 className="font-semibold text-primary">Con Amor</h3>
            <p className="text-muted-foreground text-center text-sm">
              Cultivado y preparado con dedicación familiar
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button size="lg" className="bg-gradient-dramatic text-primary-foreground font-bold px-10 py-4 rounded-xl shadow-glow hover:shadow-dramatic transition-all duration-300 hover:scale-110 border-0">
            Ver Nuestros Sabores
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-fresh">
            Conoce la Finca
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;