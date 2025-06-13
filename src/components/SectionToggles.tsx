
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Layout, User, Briefcase, Code, DollarSign, Mail } from 'lucide-react';

interface Section {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const sections: Section[] = [
  { id: 'about', name: 'About', icon: <User className="w-4 h-4" />, description: 'Personal introduction' },
  { id: 'experience', name: 'Experience', icon: <Briefcase className="w-4 h-4" />, description: 'Work history' },
  { id: 'skills', name: 'Skills', icon: <Code className="w-4 h-4" />, description: 'Technical skills' },
  { id: 'services', name: 'Services', icon: <DollarSign className="w-4 h-4" />, description: 'What you offer' },
  { id: 'contact', name: 'Contact', icon: <Mail className="w-4 h-4" />, description: 'Contact information' },
];

interface SectionTogglesProps {
  enabledSections: string[];
  onSectionToggle: (sectionId: string, enabled: boolean) => void;
}

const SectionToggles: React.FC<SectionTogglesProps> = ({
  enabledSections,
  onSectionToggle
}) => {
  return (
    <Card className="glass-morphism neon-border">
      <CardHeader>
        <CardTitle className="font-orbitron text-xl neon-text-purple flex items-center gap-2">
          <Layout className="w-5 h-5" />
          Portfolio Sections
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="flex items-center justify-between p-3 bg-cyber-gray/20 rounded-lg border border-neon-purple/20">
            <div className="flex items-center gap-3">
              <div className="text-neon-purple">{section.icon}</div>
              <div>
                <Label className="text-white font-medium">{section.name}</Label>
                <p className="text-xs text-gray-400">{section.description}</p>
              </div>
            </div>
            <Switch
              checked={enabledSections.includes(section.id)}
              onCheckedChange={(checked) => onSectionToggle(section.id, checked)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SectionToggles;
