import React, { useState, useRef, useEffect } from 'react';
import { X, Minimize2, Maximize2, Minus, Plus, Square } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
  variant?: 'windows' | 'macos' | 'ubuntu';
}

const WindowComponent: React.FC<WindowProps> = ({ 
  title, 
  children, 
  onClose, 
  className = '',
  variant = 'windows'
}) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const renderTitleBar = () => {
    switch (variant) {
      case 'macos':
        return (
          <div 
            className="flex items-center justify-between p-3 border-b cursor-move"
            onMouseDown={handleMouseDown}
          >
            <div className="flex items-center gap-2">
              <button 
                onClick={onClose}
                className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
              />
              <button 
                className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"
              />
              <button 
                onClick={toggleMaximize}
                className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
              />
            </div>
            <div className="text-sm font-medium text-center flex-1">
              {title}
            </div>
            <div className="w-14" />
          </div>
        );
      
      case 'ubuntu':
        return (
          <div 
            className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white cursor-move"
            onMouseDown={handleMouseDown}
          >
            <div className="text-sm font-medium">{title}</div>
            <div className="flex items-center gap-1">
              <button 
                className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded transition-colors"
              >
                <Minus className="h-3 w-3" />
              </button>
              <button 
                onClick={toggleMaximize}
                className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded transition-colors"
              >
                <Square className="h-3 w-3" />
              </button>
              <button 
                onClick={onClose}
                className="w-6 h-6 flex items-center justify-center hover:bg-red-500 rounded transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          </div>
        );
      
      default: // windows
        return (
          <div 
            className="flex items-center justify-between p-3 border-b cursor-move bg-card/50 backdrop-blur-sm"
            onMouseDown={handleMouseDown}
          >
            <div className="text-sm font-medium text-foreground">{title}</div>
            <div className="flex items-center gap-1">
              <button 
                className="w-8 h-8 flex items-center justify-center hover:bg-muted rounded transition-colors"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <button 
                onClick={toggleMaximize}
                className="w-8 h-8 flex items-center justify-center hover:bg-muted rounded transition-colors"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white rounded transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      ref={windowRef}
      className={cn(
        "fixed z-20 window-hover",
        isMaximized ? "inset-4" : "w-96 h-64",
        className
      )}
      style={isMaximized ? {} : { 
        left: position.x, 
        top: position.y,
        transform: isDragging ? 'scale(1.02)' : 'scale(1)'
      }}
    >
      {renderTitleBar()}
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default WindowComponent;