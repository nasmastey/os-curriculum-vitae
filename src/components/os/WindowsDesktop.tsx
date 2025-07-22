import React, { useState } from 'react';
import { Calculator, Folder, Search, Wifi, Battery, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WindowComponent from '../Window';

const WindowsDesktop = () => {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const desktopIcons = [
    { id: 'calculator', name: 'Calculatrice', icon: Calculator },
    { id: 'explorer', name: 'Explorateur', icon: Folder },
  ];

  const taskbarApps = [
    { id: 'search', icon: Search },
    { id: 'explorer', icon: Folder },
    { id: 'calculator', icon: Calculator },
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
    <div className="h-screen w-full relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      {/* Wallpaper */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-800/20" />
      
      {/* Desktop Icons */}
      <div className="absolute top-8 left-8 grid gap-4">
        {desktopIcons.map((icon) => {
          const IconComponent = icon.icon;
          return (
            <button
              key={icon.id}
              onDoubleClick={() => openApp(icon.id)}
              className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition-colors group"
            >
              <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <span className="text-white text-sm font-medium">{icon.name}</span>
            </button>
          );
        })}
      </div>

      {/* Open Windows */}
      {openWindows.map((appId) => (
        <WindowComponent
          key={appId}
          title={desktopIcons.find(app => app.id === appId)?.name || 'Application'}
          onClose={() => closeApp(appId)}
          className="windows-window"
        >
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">
              {desktopIcons.find(app => app.id === appId)?.name}
            </h3>
            <p className="text-muted-foreground">
              Application {appId} ouverte dans Windows 11
            </p>
          </div>
        </WindowComponent>
      ))}

      {/* Taskbar */}
      <div className="windows-taskbar">
        <div className="flex items-center gap-1">
          {/* Start Button */}
          <Button
            variant="ghost"
            size="sm"
            className="p-3 hover:bg-white/10 text-white"
          >
            <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm" />
            </div>
          </Button>

          {/* Search */}
          <Button
            variant="ghost"
            size="sm"
            className="p-3 hover:bg-white/10 text-white"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Apps */}
          {taskbarApps.map((app) => {
            const IconComponent = app.icon;
            return (
              <Button
                key={app.id}
                variant="ghost"
                size="sm"
                onClick={() => openApp(app.id)}
                className={`p-3 hover:bg-white/10 text-white ${
                  openWindows.includes(app.id) ? 'bg-white/20' : ''
                }`}
              >
                <IconComponent className="h-5 w-5" />
              </Button>
            );
          })}
        </div>

        {/* System Tray */}
        <div className="ml-auto flex items-center gap-2 text-white">
          <Wifi className="h-4 w-4" />
          <Volume2 className="h-4 w-4" />
          <Battery className="h-4 w-4" />
          <div className="text-sm">
            {new Date().toLocaleTimeString('fr-FR', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowsDesktop;