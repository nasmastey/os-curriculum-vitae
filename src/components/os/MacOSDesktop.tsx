import React, { useState } from 'react';
import { Calculator, Folder, Terminal, Camera, Music, Globe, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WindowComponent from '../Window';

const MacOSDesktop = () => {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const dockApps = [
    { id: 'finder', name: 'Finder', icon: Folder, color: 'from-blue-400 to-blue-600' },
    { id: 'safari', name: 'Safari', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'mail', name: 'Mail', icon: Mail, color: 'from-blue-600 to-blue-800' },
    { id: 'calendar', name: 'Calendrier', icon: Calendar, color: 'from-red-500 to-red-600' },
    { id: 'music', name: 'Musique', icon: Music, color: 'from-pink-500 to-red-500' },
    { id: 'calculator', name: 'Calculatrice', icon: Calculator, color: 'from-gray-600 to-gray-800' },
    { id: 'terminal', name: 'Terminal', icon: Terminal, color: 'from-gray-800 to-black' },
    { id: 'camera', name: 'Photo Booth', icon: Camera, color: 'from-green-400 to-green-600' },
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
    <div className="h-screen w-full relative bg-gradient-to-br from-slate-100 to-blue-50">
      {/* Wallpaper */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }}
      />
      
      {/* Menu Bar */}
      <div className="fixed top-0 left-0 right-0 h-6 bg-black/20 backdrop-blur-md flex items-center px-4 text-white text-sm z-40">
        <div className="flex items-center gap-4">
          <span className="font-semibold">🍎</span>
          <span>Finder</span>
          <span>Fichier</span>
          <span>Édition</span>
          <span>Présentation</span>
          <span>Aller</span>
          <span>Fenêtre</span>
          <span>Aide</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <span>🔋</span>
          <span>📶</span>
          <span>{new Date().toLocaleTimeString('fr-FR', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}</span>
        </div>
      </div>

      {/* Open Windows */}
      {openWindows.map((appId) => (
        <WindowComponent
          key={appId}
          title={dockApps.find(app => app.id === appId)?.name || 'Application'}
          onClose={() => closeApp(appId)}
          className="macos-window"
          variant="macos"
        >
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">
              {dockApps.find(app => app.id === appId)?.name}
            </h3>
            <p className="text-muted-foreground">
              Application {appId} ouverte dans macOS
            </p>
          </div>
        </WindowComponent>
      ))}

      {/* Dock */}
      <div className="macos-dock">
        <div className="flex items-center gap-1 p-1">
          {dockApps.map((app) => {
            const IconComponent = app.icon;
            return (
              <button
                key={app.id}
                onClick={() => openApp(app.id)}
                className="relative group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-lg transform transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-2 ${
                  openWindows.includes(app.id) ? 'scale-110' : ''
                }`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                {openWindows.includes(app.id) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-800 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MacOSDesktop;