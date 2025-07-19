import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Target, TrendingUp, Users, DollarSign, Leaf, Heart, Award, CheckCircle } from "lucide-react";
import Logo from "./Logo";

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "intro",
      title: "Los Batijugos de la Finca",
      subtitle: "Revolucionando la industria de bebidas naturales",
      content: (
        <div className="text-center space-y-8">
          <Logo size="xl" className="justify-center" />
          <p className="text-2xl text-muted-foreground font-medium">
            Batidos y jugos 100% naturales, directo de la finca a tu mesa
          </p>
          <div className="flex justify-center space-x-8 text-lg">
            <div className="flex items-center space-x-2">
              <Leaf className="text-primary" />
              <span>100% Natural</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="text-primary" />
              <span>Con Amor</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="text-primary" />
              <span>Calidad Premium</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "problem",
      title: "El Problema",
      subtitle: "El mercado de bebidas está saturado de productos artificiales",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-destructive/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-destructive mb-4">🏭 Productos Industrializados</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Conservantes químicos</li>
                <li>• Azúcares artificiales</li>
                <li>• Pérdida de nutrientes</li>
              </ul>
            </div>
            <div className="bg-destructive/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-destructive mb-4">⏰ Falta de Tiempo</h3>
              <p className="text-muted-foreground">Los consumidores no tienen tiempo para preparar bebidas saludables</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-destructive/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-destructive mb-4">💰 Precios Elevados</h3>
              <p className="text-muted-foreground">Las opciones saludables son costosas y poco accesibles</p>
            </div>
            <div className="bg-destructive/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-destructive mb-4">🌱 Desconexión del Origen</h3>
              <p className="text-muted-foreground">Los consumidores no conocen la procedencia de sus alimentos</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "solution",
      title: "Nuestra Solución",
      subtitle: "Batidos y jugos frescos, naturales y trazables",
      content: (
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-primary/5 border-primary/20">
            <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">100% Natural</h3>
            <p className="text-muted-foreground">Sin conservantes, sin azúcares añadidos, solo frutas frescas de nuestra finca</p>
          </Card>
          <Card className="p-6 text-center bg-primary/5 border-primary/20">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Recién Preparado</h3>
            <p className="text-muted-foreground">Preparamos cada batido al momento para garantizar frescura y nutrientes</p>
          </Card>
          <Card className="p-6 text-center bg-primary/5 border-primary/20">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Trazabilidad</h3>
            <p className="text-muted-foreground">Conoce exactamente de dónde vienen tus frutas y cómo se cultivan</p>
          </Card>
        </div>
      )
    },
    {
      id: "market",
      title: "Oportunidad de Mercado",
      subtitle: "Un mercado en crecimiento con alta demanda",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-primary text-white">
              <h3 className="text-2xl font-bold mb-2">$15.6B</h3>
              <p className="text-white/90">Mercado global de jugos naturales (2024)</p>
            </Card>
            <Card className="p-6 bg-gradient-secondary">
              <h3 className="text-2xl font-bold mb-2">23%</h3>
              <p className="text-muted-foreground">Crecimiento anual esperado hasta 2028</p>
            </Card>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Tendencias del Mercado:</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>Mayor conciencia sobre alimentación saludable</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>Demanda de productos orgánicos y locales</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>Preferencia por marcas sostenibles</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>Crecimiento del e-commerce alimentario</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "business",
      title: "Modelo de Negocio",
      subtitle: "Múltiples canales de ingresos sostenibles",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Canales de Venta:</h3>
            <div className="space-y-4">
              <Card className="p-4 bg-primary/5">
                <h4 className="font-bold">🏪 Punto de Venta Físico</h4>
                <p className="text-sm text-muted-foreground">Local estratégico en zona comercial</p>
              </Card>
              <Card className="p-4 bg-primary/5">
                <h4 className="font-bold">🚚 Delivery</h4>
                <p className="text-sm text-muted-foreground">Entrega a domicilio en 30 minutos</p>
              </Card>
              <Card className="p-4 bg-primary/5">
                <h4 className="font-bold">🤝 B2B</h4>
                <p className="text-sm text-muted-foreground">Suministro a oficinas y gimnasios</p>
              </Card>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Proyecciones Financieras:</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center bg-gradient-primary text-white">
                <h4 className="text-lg font-bold">Año 1</h4>
                <p className="text-2xl font-bold">$50K</p>
                <p className="text-sm text-white/80">Ingresos mensuales</p>
              </Card>
              <Card className="p-4 text-center bg-gradient-secondary">
                <h4 className="text-lg font-bold">Año 3</h4>
                <p className="text-2xl font-bold">$200K</p>
                <p className="text-sm text-muted-foreground">Ingresos mensuales</p>
              </Card>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Márgenes:</h4>
              <p>• Margen bruto: 65%</p>
              <p>• Margen neto proyectado: 25%</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "investment",
      title: "Inversión Requerida",
      subtitle: "ROI atractivo con bajo riesgo",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-primary text-white text-center">
              <DollarSign className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">$75,000</h3>
              <p className="text-white/90">Inversión inicial requerida</p>
            </Card>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Uso de Fondos:</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Equipamiento y maquinaria</span>
                  <span className="font-bold">40%</span>
                </div>
                <div className="flex justify-between">
                  <span>Local y adecuaciones</span>
                  <span className="font-bold">25%</span>
                </div>
                <div className="flex justify-between">
                  <span>Inventario inicial</span>
                  <span className="font-bold">15%</span>
                </div>
                <div className="flex justify-between">
                  <span>Marketing y branding</span>
                  <span className="font-bold">10%</span>
                </div>
                <div className="flex justify-between">
                  <span>Capital de trabajo</span>
                  <span className="font-bold">10%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Retorno de Inversión:</h3>
            <Card className="p-6 bg-gradient-secondary text-center">
              <h4 className="text-2xl font-bold mb-2">18 meses</h4>
              <p className="text-muted-foreground">Punto de equilibrio</p>
            </Card>
            <Card className="p-6 bg-gradient-subtle text-center">
              <h4 className="text-2xl font-bold mb-2">35% ROI</h4>
              <p className="text-muted-foreground">Proyectado a 3 años</p>
            </Card>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Ventajas Competitivas:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Productos únicos en el mercado local</li>
                <li>• Relación directa productor-consumidor</li>
                <li>• Costos de producción optimizados</li>
                <li>• Brand story auténtica</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "team",
      title: "Nuestro Equipo",
      subtitle: "Experiencia y pasión por la alimentación saludable",
      content: (
        <div className="text-center space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Fundador/CEO</h3>
              <p className="text-muted-foreground text-sm">10+ años en agricultura sostenible y experiencia en startups alimentarias</p>
            </Card>
            <Card className="p-6">
              <div className="w-20 h-20 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Head de Producción</h3>
              <p className="text-muted-foreground text-sm">Nutricionista especializada en alimentos funcionales y procesos artesanales</p>
            </Card>
            <Card className="p-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Head de Marketing</h3>
              <p className="text-muted-foreground text-sm">Experto en marketing digital para brands de consumo con enfoque sustentable</p>
            </Card>
          </div>
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Advisors Estratégicos</h3>
            <p className="text-muted-foreground">
              Contamos con el respaldo de expertos en retail, distribución alimentaria y sustentabilidad 
              que nos guían en cada etapa del crecimiento.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "ask",
      title: "Únete a Nuestra Misión",
      subtitle: "Juntos revolucionaremos la forma de consumir bebidas saludables",
      content: (
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">¿Por qué invertir en Los Batijugos de la Finca?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-primary text-white">
                <Target className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-3">Mercado en Crecimiento</h4>
                <p className="text-white/90">Sector de bebidas saludables con 23% de crecimiento anual</p>
              </Card>
              <Card className="p-6 bg-gradient-secondary">
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h4 className="text-xl font-bold mb-3">ROI Atractivo</h4>
                <p className="text-muted-foreground">35% ROI proyectado con punto de equilibrio en 18 meses</p>
              </Card>
            </div>
          </div>
          <div className="bg-gradient-primary text-white p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">¡Hagámoslo Realidad!</h3>
            <p className="text-xl mb-6 text-white/90">
              Con tu inversión, podemos llevar productos 100% naturales a miles de consumidores 
              y construir una marca líder en el sector de bebidas saludables.
            </p>
            <div className="text-2xl font-bold">
              Contacto: info@batijugosdelafinca.com
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Anterior</span>
          </Button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2"
          >
            <span>Siguiente</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Slide Content */}
        <div className="bg-background rounded-xl shadow-dramatic p-8 md:p-12 min-h-[600px] flex flex-col">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          
          <div className="flex-1">
            {slides[currentSlide].content}
          </div>

          {/* Slide counter */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            {currentSlide + 1} de {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;