import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />
      <div className="fixed top-4 right-4">
        <Button 
          onClick={() => navigate('/pitch')}
          variant="secondary"
          className="shadow-dramatic"
        >
          Ver Pitch 🚀
        </Button>
      </div>
    </div>
  );
};

export default Index;
