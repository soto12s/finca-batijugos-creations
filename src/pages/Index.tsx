import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />
      <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50">
        <Button 
          onClick={() => navigate('/pitch')}
          variant="secondary"
          className="shadow-dramatic text-xs sm:text-sm px-3 sm:px-4 py-2"
          size="sm"
        >
          <span className="hidden sm:inline">Ver Pitch 🚀</span>
          <span className="sm:hidden">Pitch 🚀</span>
        </Button>
      </div>
    </div>
  );
};

export default Index;
