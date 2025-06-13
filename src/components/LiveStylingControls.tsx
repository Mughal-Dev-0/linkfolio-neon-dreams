
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Settings, Type, Palette } from 'lucide-react';

interface StylingOptions {
  primaryColor: string;
  font: string;
  backgroundStyle: string;
  padding: string;
  textSize: number;
}

interface LiveStylingControlsProps {
  options: StylingOptions;
  onOptionsChange: (options: StylingOptions) => void;
}

const LiveStylingControls: React.FC<LiveStylingControlsProps> = ({
  options,
  onOptionsChange
}) => {
  const colorOptions = [
    { value: '#00f5ff', label: 'Neon Blue', color: 'bg-cyan-400' },
    { value: '#ff006e', label: 'Neon Pink', color: 'bg-pink-500' },
    { value: '#8338ec', label: 'Neon Purple', color: 'bg-purple-500' },
    { value: '#39ff14', label: 'Neon Green', color: 'bg-green-400' },
    { value: '#ffff00', label: 'Electric Yellow', color: 'bg-yellow-400' },
  ];

  const fontOptions = [
    { value: 'orbitron', label: 'Orbitron (Futuristic)' },
    { value: 'inter', label: 'Inter (Modern)' },
    { value: 'roboto', label: 'Roboto (Clean)' },
    { value: 'poppins', label: 'Poppins (Friendly)' },
  ];

  const backgroundOptions = [
    { value: 'gradient', label: 'Neon Gradient' },
    { value: 'pattern', label: 'Grid Pattern' },
    { value: 'solid', label: 'Solid Dark' },
    { value: 'particles', label: 'Particle Effects' },
  ];

  const paddingOptions = [
    { value: 'sm', label: 'Compact' },
    { value: 'md', label: 'Default' },
    { value: 'lg', label: 'Spacious' },
    { value: 'xl', label: 'Extra Spacious' },
  ];

  const updateOption = (key: keyof StylingOptions, value: any) => {
    onOptionsChange({ ...options, [key]: value });
  };

  return (
    <Card className="glass-morphism neon-border">
      <CardHeader>
        <CardTitle className="font-orbitron text-xl neon-text-pink flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Live Styling
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label className="text-neon-blue font-medium flex items-center gap-2">
            <Palette className="w-4 h-4" />
            Primary Color
          </Label>
          <Select value={options.primaryColor} onValueChange={(value) => updateOption('primaryColor', value)}>
            <SelectTrigger className="bg-cyber-gray/30 border-neon-blue/30 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-cyber-dark border-neon-blue/50">
              {colorOptions.map((color) => (
                <SelectItem key={color.value} value={color.value} className="text-white hover:bg-neon-blue/20">
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${color.color}`}></div>
                    {color.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-neon-pink font-medium flex items-center gap-2">
            <Type className="w-4 h-4" />
            Font Family
          </Label>
          <Select value={options.font} onValueChange={(value) => updateOption('font', value)}>
            <SelectTrigger className="bg-cyber-gray/30 border-neon-pink/30 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-cyber-dark border-neon-pink/50">
              {fontOptions.map((font) => (
                <SelectItem key={font.value} value={font.value} className="text-white hover:bg-neon-pink/20">
                  {font.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-neon-purple font-medium">Background Style</Label>
          <Select value={options.backgroundStyle} onValueChange={(value) => updateOption('backgroundStyle', value)}>
            <SelectTrigger className="bg-cyber-gray/30 border-neon-purple/30 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-cyber-dark border-neon-purple/50">
              {backgroundOptions.map((bg) => (
                <SelectItem key={bg.value} value={bg.value} className="text-white hover:bg-neon-purple/20">
                  {bg.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-neon-green font-medium">Layout Padding</Label>
          <Select value={options.padding} onValueChange={(value) => updateOption('padding', value)}>
            <SelectTrigger className="bg-cyber-gray/30 border-neon-green/30 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-cyber-dark border-neon-green/50">
              {paddingOptions.map((pad) => (
                <SelectItem key={pad.value} value={pad.value} className="text-white hover:bg-neon-green/20">
                  {pad.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-neon-yellow font-medium">Text Size: {options.textSize}%</Label>
          <Slider
            value={[options.textSize]}
            onValueChange={(value) => updateOption('textSize', value[0])}
            max={150}
            min={75}
            step={5}
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveStylingControls;
