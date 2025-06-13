
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin, ArrowLeft, Sparkles } from 'lucide-react';

interface PortfolioData {
  name: string;
  about: string;
  experience: string;
  skills: string;
  services: string;
  contact: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  template: string;
  sections: string[];
  primaryColor: string;
  font: string;
  backgroundStyle: string;
  padding: string;
  textSize: string;
  animations: any;
}

const PortfolioViewer = () => {
  const location = useLocation();
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    
    if (params.toString() === '') {
      setLoading(false);
      return;
    }

    const data: PortfolioData = {
      name: params.get('name') || '',
      about: params.get('about') || '',
      experience: params.get('experience') || '',
      skills: params.get('skills') || '',
      services: params.get('services') || '',
      contact: params.get('contact') || '',
      email: params.get('email') || '',
      phone: params.get('phone') || '',
      github: params.get('github') || '',
      linkedin: params.get('linkedin') || '',
      template: params.get('template') || 'neon',
      sections: params.get('sections')?.split(',') || [],
      primaryColor: params.get('primaryColor') || '#00f5ff',
      font: params.get('font') || 'orbitron',
      backgroundStyle: params.get('backgroundStyle') || 'gradient',
      padding: params.get('padding') || 'md',
      textSize: params.get('textSize') || '100',
      animations: JSON.parse(params.get('animations') || '{}')
    };

    setPortfolioData(data);
    setLoading(false);
  }, [location]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cyber-dark flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="w-12 h-12 text-neon-blue animate-pulse mx-auto mb-4" />
          <p className="text-neon-blue font-orbitron">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  if (!portfolioData || !portfolioData.name) {
    return (
      <div className="min-h-screen bg-cyber-dark cyber-grid flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="font-orbitron text-4xl font-bold neon-text-blue mb-4">No Portfolio Data</h1>
          <p className="text-gray-400 mb-6">This link doesn't contain valid portfolio data. Please generate a new portfolio link.</p>
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-neon-blue to-neon-purple text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Create Your Portfolio
          </Button>
        </div>
      </div>
    );
  }

  const getTemplateClasses = () => {
    switch (portfolioData.template) {
      case 'minimal':
        return 'bg-white text-gray-900';
      case 'classic':
        return 'bg-slate-100 text-slate-900';
      case 'creative':
        return 'bg-gradient-to-br from-purple-50 to-pink-50 text-gray-900';
      default:
        return 'bg-cyber-dark cyber-grid text-white';
    }
  };

  const getPaddingClass = () => {
    switch (portfolioData.padding) {
      case 'sm': return 'p-4';
      case 'lg': return 'p-12';
      case 'xl': return 'p-16';
      default: return 'p-8';
    }
  };

  const skillsArray = portfolioData.skills.split(',').map(skill => skill.trim()).filter(Boolean);

  return (
    <div className={`min-h-screen ${getTemplateClasses()}`}>
      <div className={`container mx-auto ${getPaddingClass()}`} style={{ fontSize: `${portfolioData.textSize}%` }}>
        
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className={`font-${portfolioData.font} text-5xl md:text-7xl font-black mb-6`} 
              style={{ color: portfolioData.primaryColor }}>
            {portfolioData.name}
          </h1>
        </div>

        {/* About Section */}
        {portfolioData.sections.includes('about') && portfolioData.about && (
          <Card className={`mb-8 ${portfolioData.template === 'neon' ? 'glass-morphism neon-border' : 'bg-white/80 backdrop-blur-sm'}`}>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4" style={{ color: portfolioData.primaryColor }}>About Me</h2>
              <p className="text-lg leading-relaxed">{portfolioData.about}</p>
            </div>
          </Card>
        )}

        {/* Experience Section */}
        {portfolioData.sections.includes('experience') && portfolioData.experience && (
          <Card className={`mb-8 ${portfolioData.template === 'neon' ? 'glass-morphism neon-border' : 'bg-white/80 backdrop-blur-sm'}`}>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4" style={{ color: portfolioData.primaryColor }}>Experience</h2>
              <p className="text-lg leading-relaxed whitespace-pre-line">{portfolioData.experience}</p>
            </div>
          </Card>
        )}

        {/* Skills Section */}
        {portfolioData.sections.includes('skills') && skillsArray.length > 0 && (
          <Card className={`mb-8 ${portfolioData.template === 'neon' ? 'glass-morphism neon-border' : 'bg-white/80 backdrop-blur-sm'}`}>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4" style={{ color: portfolioData.primaryColor }}>Skills & Tools</h2>
              <div className="flex flex-wrap gap-2">
                {skillsArray.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        )}

        {/* Services Section */}
        {portfolioData.sections.includes('services') && portfolioData.services && (
          <Card className={`mb-8 ${portfolioData.template === 'neon' ? 'glass-morphism neon-border' : 'bg-white/80 backdrop-blur-sm'}`}>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4" style={{ color: portfolioData.primaryColor }}>Services</h2>
              <p className="text-lg leading-relaxed whitespace-pre-line">{portfolioData.services}</p>
            </div>
          </Card>
        )}

        {/* Contact Section */}
        {portfolioData.sections.includes('contact') && (
          <Card className={`mb-8 ${portfolioData.template === 'neon' ? 'glass-morphism neon-border' : 'bg-white/80 backdrop-blur-sm'}`}>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: portfolioData.primaryColor }}>Get In Touch</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {portfolioData.email && (
                  <a href={`mailto:${portfolioData.email}`} 
                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100/10 transition-colors">
                    <Mail className="w-5 h-5" style={{ color: portfolioData.primaryColor }} />
                    <span>{portfolioData.email}</span>
                  </a>
                )}
                {portfolioData.phone && (
                  <a href={`tel:${portfolioData.phone}`} 
                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100/10 transition-colors">
                    <Phone className="w-5 h-5" style={{ color: portfolioData.primaryColor }} />
                    <span>{portfolioData.phone}</span>
                  </a>
                )}
                {portfolioData.github && (
                  <a href={portfolioData.github.startsWith('http') ? portfolioData.github : `https://${portfolioData.github}`} 
                     target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100/10 transition-colors">
                    <Github className="w-5 h-5" style={{ color: portfolioData.primaryColor }} />
                    <span>GitHub</span>
                  </a>
                )}
                {portfolioData.linkedin && (
                  <a href={portfolioData.linkedin.startsWith('http') ? portfolioData.linkedin : `https://${portfolioData.linkedin}`} 
                     target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100/10 transition-colors">
                    <Linkedin className="w-5 h-5" style={{ color: portfolioData.primaryColor }} />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </Card>
        )}

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-300/20">
          <p className="text-sm opacity-60">
            Created with <span style={{ color: portfolioData.primaryColor }}>Linkfolio v4.0</span>
          </p>
          <Button 
            onClick={() => window.location.href = '/'}
            variant="outline"
            className="mt-4"
          >
            Create Your Own Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioViewer;
