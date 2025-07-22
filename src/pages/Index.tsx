import { Button } from '@/components/ui/button';
import { FileText, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 cv-gradient-text">
          Portfolio & Démos
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Découvrez mes projets et compétences à travers différentes démonstrations
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/cv">
            <div className="cv-card cv-hover-lift cursor-pointer group">
              <div className="p-8 text-center">
                <FileText className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-semibold mb-3">CV Professionnel</h2>
                <p className="text-muted-foreground">
                  Consultez mon CV interactif avec mes expériences, compétences et projets
                </p>
              </div>
            </div>
          </Link>
          
          <Link to="/os-demo">
            <div className="cv-card cv-hover-lift cursor-pointer group">
              <div className="p-8 text-center">
                <Monitor className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-semibold mb-3">Démo OS Interface</h2>
                <p className="text-muted-foreground">
                  Simulation d'interfaces Windows, macOS et Linux avec interactions complètes
                </p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="mt-12">
          <Button size="lg" className="mr-4">
            Voir mes projets
          </Button>
          <Button variant="outline" size="lg">
            Me contacter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
