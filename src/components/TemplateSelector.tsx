
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Palette } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
  className: string;
}

const templates: Template[] = [
  {
    id: 'neon',
    name: '✨ Neon Tech',
    description: 'Dark cyberpunk with glowing effects',
    preview: 'bg-gradient-to-br from-cyber-dark to-black border border-neon-blue/50',
    className: 'neon-template'
  },
  {
    id: 'minimal',
    name: '📄 Minimal Light',
    description: 'Clean white-based design',
    preview: 'bg-gradient-to-br from-white to-gray-50 border border-gray-200',
    className: 'minimal-template'
  },
  {
    id: 'classic',
    name: '🎩 Classic Resume',
    description: 'Formal CV professional look',
    preview: 'bg-gradient-to-br from-slate-100 to-blue-50 border border-slate-300',
    className: 'classic-template'
  },
  {
    id: 'creative',
    name: '📸 Creative Grid',
    description: 'Photo and card layout style',
    preview: 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200',
    className: 'creative-template'
  }
];

interface TemplateSelectorProps {
  selectedTemplate: string;
  onTemplateChange: (template: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onTemplateChange
}) => {
  return (
    <Card className="glass-morphism neon-border">
      <CardHeader>
        <CardTitle className="font-orbitron text-xl neon-text-blue flex items-center gap-2">
          <Palette className="w-5 h-5" />
          Choose Template
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedTemplate} onValueChange={onTemplateChange}>
          <div className="grid grid-cols-2 gap-4">
            {templates.map((template) => (
              <div key={template.id} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={template.id} id={template.id} />
                  <Label htmlFor={template.id} className="text-sm font-medium cursor-pointer">
                    {template.name}
                  </Label>
                </div>
                <div className={`h-16 w-full rounded-lg ${template.preview} p-2 cursor-pointer transition-all hover:scale-105`}
                     onClick={() => onTemplateChange(template.id)}>
                  <div className="text-xs text-gray-600">{template.description}</div>
                </div>
              </div>
            ))}
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default TemplateSelector;
