
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, User, Palette, Layout, Zap, Link } from 'lucide-react';

interface DashboardPreviewProps {
  formData: any;
  selectedTemplate: string;
  enabledSections: string[];
  stylingOptions: any;
  onGenerate: () => void;
}

const DashboardPreview: React.FC<DashboardPreviewProps> = ({
  formData,
  selectedTemplate,
  enabledSections,
  stylingOptions,
  onGenerate
}) => {
  const templateNames = {
    neon: '✨ Neon Tech',
    minimal: '📄 Minimal Light',
    classic: '🎩 Classic Resume',
    creative: '📸 Creative Grid'
  };

  return (
    <Card className="glass-morphism neon-border">
      <CardHeader>
        <CardTitle className="font-orbitron text-xl neon-text-yellow flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          Portfolio Preview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-neon-blue">
              <User className="w-4 h-4" />
              <span className="font-medium">Profile</span>
            </div>
            <div className="text-sm text-gray-300">
              <div>Name: {formData.name || 'Not set'}</div>
              <div>About: {formData.about ? `${formData.about.substring(0, 30)}...` : 'Not set'}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-neon-pink">
              <Palette className="w-4 h-4" />
              <span className="font-medium">Design</span>
            </div>
            <div className="text-sm text-gray-300">
              <div>Template: {templateNames[selectedTemplate as keyof typeof templateNames]}</div>
              <div>Font: {stylingOptions.font}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-neon-purple">
              <Layout className="w-4 h-4" />
              <span className="font-medium">Sections</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {enabledSections.map((section) => (
                <Badge key={section} variant="outline" className="text-xs border-neon-purple/50 text-neon-purple">
                  {section}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-neon-green">
              <Zap className="w-4 h-4" />
              <span className="font-medium">Status</span>
            </div>
            <div className="text-sm text-gray-300">
              <div>Sections: {enabledSections.length}</div>
              <div>Ready: {formData.name ? '✅' : '❌'}</div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-neon-yellow/20">
          <button
            onClick={onGenerate}
            disabled={!formData.name.trim()}
            className="w-full bg-gradient-to-r from-neon-yellow to-neon-green hover:from-neon-green hover:to-neon-blue text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-neon-yellow/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Link className="w-5 h-5" />
            Generate My Smart Portfolio
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardPreview;
