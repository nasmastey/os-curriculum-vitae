import React, { useState } from 'react';
import { Grid3X3, Folder, Terminal, Globe, Mail, Settings, Calculator, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WindowComponent from '../Window';

const UbuntuDesktop = () => {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const sidebarApps = [
    { id: 'files', name: 'Fichiers', icon: Folder },
    { id: 'firefox', name: 'Firefox', icon: Globe },
    { id: 'terminal', name: 'Terminal', icon: Terminal },
    { id: 'mail', name: 'Thunderbird', icon: Mail },
    { id: 'calculator', name: 'Calculatrice', icon: Calculator },
    { id: 'writer', name: 'LibreOffice Writer', icon: FileText },
    { id: 'settings', name: 'Paramètres', icon: Settings },
  ];

  const openApp = (appId: string) => {
    if (!openWindows.includes(appId)) {
      setOpenWindows([...openWindows, appId]);
    }
  };

  const closeApp = (appId: string) => {
    setOpenWindows(openWindows.filter(id => id !== appId));
  };

  return (
    <div className="h-screen w-full relative bg-gradient-to-br from-purple-900 via-orange-800 to-orange-600">
      {/* Top Panel */}
      <div className="ubuntu-panel">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">Ubuntu</span>
          <span className="text-xs">Fichier</span>
          <span className="text-xs">Édition</span>
          <span className="text-xs">Affichage</span>
          <span className="text-xs">Rechercher</span>
          <span className="text-xs">Outils</span>
          <span className="text-xs">Aide</span>
        </div>
        <div className="ml-auto flex items-center gap-4 text-xs">
          <span>🔊</span>
          <span>📶</span>
          <span>🔋</span>
          <span>{new Date().toLocaleDateString('fr-FR')} {new Date().toLocaleTimeString('fr-FR', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}</span>
          <span>⚙️</span>
        </div>
      </div>

      {/* Sidebar/Dock */}
      <div className="fixed left-0 top-8 bottom-0 w-16 bg-black/80 backdrop-blur-sm flex flex-col items-center py-4 gap-2 z-30">
        {/* Show Applications */}
        <Button
          variant="ghost"
          size="sm"
          className="w-12 h-12 p-0 hover:bg-white/10 text-white rounded-lg"
        >
          <Grid3X3 className="h-6 w-6" />
        </Button>
        
        <div className="w-8 h-px bg-white/20 my-2" />

        {/* Applications */}
        {sidebarApps.map((app) => {
          const IconComponent = app.icon;
          return (
            <Button
              key={app.id}
              variant="ghost"
              size="sm"
              onClick={() => openApp(app.id)}
              className={`w-12 h-12 p-0 hover:bg-white/10 text-white rounded-lg transition-all ${
                openWindows.includes(app.id) ? 'bg-orange-500/50 scale-110' : ''
              }`}
            >
              <IconComponent className="h-6 w-6" />
              {openWindows.includes(app.id) && (
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-orange-500 rounded-r" />
              )}
            </Button>
          );
        })}
      </div>

      {/* Desktop Area */}
      <div className="ml-16 pt-8 h-full">
        {/* Open Windows */}
        {openWindows.map((appId) => (
          <WindowComponent
            key={appId}
            title={sidebarApps.find(app => app.id === appId)?.name || 'Application'}
            onClose={() => closeApp(appId)}
            className="ubuntu-window"
            variant="ubuntu"
          >
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                {sidebarApps.find(app => app.id === appId)?.name}
              </h3>
              <p className="text-muted-foreground">
                Application {appId} ouverte dans Ubuntu Linux
              </p>
            </div>
          </WindowComponent>
        ))}
      </div>
    </div>
  );
};

export default UbuntuDesktop;