
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, Shuffle } from 'lucide-react';

interface SmartTextSuggestionsProps {
  field: 'about' | 'services' | 'experience';
  onSuggestionSelect: (text: string) => void;
  className?: string;
}

const suggestions = {
  about: [
    "I'm a passionate full-stack developer with a love for creating innovative digital experiences that make a difference.",
    "Creative thinker with 5+ years of experience turning complex problems into elegant, user-friendly solutions.",
    "Coding is my art, and every project is a canvas where I blend creativity with cutting-edge technology.",
    "Dedicated software engineer committed to writing clean, efficient code and building scalable applications."
  ],
  services: [
    "Logo Design - Starting at $20\nCustom Web Development - From $99\nMonthly Maintenance - $10/mo",
    "Frontend Development - $50/hr\nUI/UX Design - $40/hr\nConsulting & Code Review - $75/hr",
    "E-commerce Solutions - From $299\nMobile App Development - From $599\nSEO Optimization - $150/mo",
    "WordPress Development - From $199\nAPI Integration - From $149\nTechnical Support - $25/hr"
  ],
  experience: [
    "Worked with 20+ international clients, delivering high-quality web solutions that increased their online presence by 300%.",
    "3 years at XYZ Tech as UI Designer, leading design systems and improving user engagement across 5 major products.",
    "Freelance developer since 2020, successfully completed 50+ projects ranging from startups to enterprise solutions.",
    "Former Lead Developer at ABC Corp, managed a team of 6 developers and delivered projects 25% ahead of schedule."
  ]
};

const SmartTextSuggestions: React.FC<SmartTextSuggestionsProps> = ({
  field,
  onSuggestionSelect,
  className = ""
}) => {
  const fieldSuggestions = suggestions[field];

  const handleRandomSuggestion = () => {
    const randomIndex = Math.floor(Math.random() * fieldSuggestions.length);
    onSuggestionSelect(fieldSuggestions[randomIndex]);
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <Select onValueChange={onSuggestionSelect}>
        <SelectTrigger className="flex-1 bg-cyber-gray/30 border-neon-purple/30 text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-neon-purple" />
            <SelectValue placeholder="AI Suggestions" />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-cyber-dark border-neon-purple/50">
          {fieldSuggestions.map((suggestion, index) => (
            <SelectItem key={index} value={suggestion} className="text-white hover:bg-neon-purple/20">
              {suggestion.substring(0, 50)}...
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        onClick={handleRandomSuggestion}
        variant="outline"
        size="sm"
        className="border-neon-green/50 text-neon-green hover:bg-neon-green/10"
      >
        <Shuffle className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default SmartTextSuggestions;
