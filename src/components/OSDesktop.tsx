import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Monitor, Apple, Terminal } from 'lucide-react';
import WindowsDesktop from './os/WindowsDesktop';
import MacOSDesktop from './os/MacOSDesktop';
import UbuntuDesktop from './os/UbuntuDesktop';

export type OSType = 'windows' | 'macos' | 'ubuntu';

const OSDesktop = () => {
  const [currentOS, setCurrentOS] = useState<OSType>('windows');

  const osConfig = {
    windows: {
      icon: Monitor,
      label: 'Windows 11',
      theme: 'theme-windows'
    },
    macos: {
      icon: Apple,
      label: 'macOS',
      theme: 'theme-macos'
    },
    ubuntu: {
      icon: Terminal,
      label: 'Ubuntu',
      theme: 'theme-ubuntu'
    }
  };

  const renderDesktop = () => {
    switch (currentOS) {
      case 'windows':
        return <WindowsDesktop />;
      case 'macos':
        return <MacOSDesktop />;
      case 'ubuntu':
        return <UbuntuDesktop />;
      default:
        return <WindowsDesktop />;
    }
  };

  return (
    <div className={`h-screen w-full os-transition ${osConfig[currentOS].theme}`}>
      {/* OS Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        {Object.entries(osConfig).map(([os, config]) => {
          const IconComponent = config.icon;
          return (
            <Button
              key={os}
              variant={currentOS === os ? "default" : "secondary"}
              size="sm"
              onClick={() => setCurrentOS(os as OSType)}
              className="flex items-center gap-2 os-transition"
            >
              <IconComponent className="h-4 w-4" />
              <span className="hidden sm:inline">{config.label}</span>
            </Button>
          );
        })}
      </div>

      {/* Desktop */}
      <div className="h-full w-full os-transition">
        {renderDesktop()}
      </div>
    </div>
  );
};

export default OSDesktop;