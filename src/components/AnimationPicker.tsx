
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Zap, ArrowRight, RotateCcw, Type } from 'lucide-react';

interface AnimationOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const animationOptions: AnimationOption[] = [
  { id: 'fade-in', name: 'Fade In', icon: <Zap className="w-4 h-4" />, description: 'Smooth opacity transition' },
  { id: 'slide-left', name: 'Slide Left', icon: <ArrowRight className="w-4 h-4" />, description: 'Slides from right' },
  { id: 'zoom-bounce', name: 'Zoom Bounce', icon: <RotateCcw className="w-4 h-4" />, description: 'Scale with bounce' },
  { id: 'type-reveal', name: 'Type & Reveal', icon: <Type className="w-4 h-4" />, description: 'Typewriter effect' },
];

interface SectionAnimations {
  about: string;
  experience: string;
  skills: string;
  services: string;
  contact: string;
}

interface AnimationPickerProps {
  animations: SectionAnimations;
  onAnimationChange: (section: keyof SectionAnimations, animation: string) => void;
}

const AnimationPicker: React.FC<AnimationPickerProps> = ({
  animations,
  onAnimationChange
}) => {
  const sections = [
    { id: 'about', name: 'About Section', color: 'neon-blue' },
    { id: 'experience', name: 'Experience Section', color: 'neon-pink' },
    { id: 'skills', name: 'Skills Section', color: 'neon-purple' },
    { id: 'services', name: 'Services Section', color: 'neon-green' },
    { id: 'contact', name: 'Contact Section', color: 'neon-yellow' },
  ];

  return (
    <Card className="glass-morphism neon-border">
      <CardHeader>
        <CardTitle className="font-orbitron text-xl neon-text-green flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Animation Styles
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="space-y-2">
            <Label className={`text-${section.color} font-medium`}>{section.name}</Label>
            <Select 
              value={animations[section.id as keyof SectionAnimations]} 
              onValueChange={(value) => onAnimationChange(section.id as keyof SectionAnimations, value)}
            >
              <SelectTrigger className="bg-cyber-gray/30 border-neon-green/30 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-cyber-dark border-neon-green/50">
                {animationOptions.map((option) => (
                  <SelectItem key={option.id} value={option.id} className="text-white hover:bg-neon-green/20">
                    <div className="flex items-center gap-2">
                      {option.icon}
                      <div>
                        <div>{option.name}</div>
                        <div className="text-xs text-gray-400">{option.description}</div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AnimationPicker;
